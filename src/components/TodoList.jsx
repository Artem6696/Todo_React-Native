import React, { useState } from "react";
import { View, StyleSheet, Platform, } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";

import TodoItem from "./TodoItem";
import constants from "../../constants";
import ModalEdit from "./action-todo/ModalEdit";

export const TodoList = ({ todos, setTodos, saveTodos }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTodoId, setSelectedTodoId] = useState(null);
  const [selectedTodoTitle, setSelectedTodoTitle] = useState("");

  const deleteTodo = (ind) => {
    const newTodos = [...todos]; //создаем копию которая не мутирует
    newTodos.splice(ind, 1);
    setTodos(newTodos);
  };

  const handleEditTodo = (id, title) => {
    
    setSelectedTodoId(id);
    setIsModalVisible(true);
    setSelectedTodoTitle(title);
  };
  const editTodoTitle = () => {
    const updatedTodos = todos.map((todo) =>
      // оставляем остальные свойства внутри todo, меняем только title
      todo.id === selectedTodoId ? { ...todo, title: selectedTodoTitle } : todo
    );
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
    setIsModalVisible(false);
  };
  const handleEditStatus = async (statusUpd, id) => {
    const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, status: statusUpd } : todo));
    await saveTodos(updatedTodos);
    setTodos(updatedTodos);
    console.log("====================================");
    console.log(updatedTodos);
    console.log("====================================");
  };

  return (
    <View style={styles.todoListContainer}>
      <DraggableFlatList
      contentContainerStyle={{ padding: 18, paddingBottom: 400, gap: 10}}
        data={todos || []}
        onDragEnd={({ data }) => {
          setTodos(data);
          saveTodos(data);
        }}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index, drag, isActive }) => (
          <TodoItem
            todoItem={item}
            handleEditStatus={(status) => handleEditStatus(status, item.id)}
            todoTitle={item.title}
            key={index}
            onPress={() => handleEditTodo(item.id, item.title)}
            onDelete={() => deleteTodo(index)}
            updatedTodos={todos}
            drag={drag}
            isActive={isActive}
          />
          
        )}
      
      />
      <ModalEdit
        isModalVisible={isModalVisible} 
        setIsModalVisible={setIsModalVisible} 
        selectedTodoTitle={selectedTodoTitle}
        editTodoTitle={editTodoTitle}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  todoListContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        // paddingBottom: 170,
        // paddingVertical: 40,
      },
      android: {
        // backgroundColor: 'blue',
        flexBasis: 1,
      },
    }),
  },
  tasksContainer: {
    gap: 2,
    alignItems: "center",
  },

});
