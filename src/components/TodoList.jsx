import React, { useState } from "react";
import { View, StyleSheet, Platform, TouchableOpacity, Text } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";

import TodoItem from "./TodoItem";
import constants from "../../constants";
import ModalEdit from "./action-todo/ModalEdit";

export const TodoList = ({ todos, setFilteredTodos, setTodos, saveTodos, setFilterStatus, filterStatus }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTodoId, setSelectedTodoId] = useState(null);
  const [selectedTodoTitle, setSelectedTodoTitle] = useState("");
// добавляем состояние для фильтрации по статусу

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleEditTodo = (id, title) => {
    setSelectedTodoId(id);
    setIsModalVisible(true);
    setSelectedTodoTitle(title);
    console.warn(id, title)
  };
  
  const editTodoTitle = () => {
    const updatedTodos = todos.map((todo) =>
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
    console.log(updatedTodos);
  };

  const filteredTodos = filterStatus === "all" ? todos : todos.filter(todo => todo.status === filterStatus); // фильтруем задачи по статусу

  return (
    <View style={styles.todoListContainer}>

      <DraggableFlatList
        contentContainerStyle={{ paddingLeft: 18, paddingRight: 18, paddingBottom: 400, gap: 10, flexDirection: "column-reverse" }}
        data={filteredTodos}
        onDragEnd={({ data }) => {
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
            onDelete={() => deleteTodo(item.id)}
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
        setSelectedTodoTitle={setSelectedTodoTitle}
        editTodoTitle={editTodoTitle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  todoListContainer: {
    flexGrow: 1,
    backgroundColor: constants.Container,
    ...Platform.select({
      ios: {},
      android: {},
    }),
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  filterButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});