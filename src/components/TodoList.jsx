import React, { useState } from "react";
import { View, StyleSheet, FlatList, Alert, Modal, Text, TextInput, Button } from "react-native";
import * as Animatable from "react-native-animatable";
import { AntDesign } from "@expo/vector-icons";

import TodoItem from "./TodoItem";

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
    console.warn(id);
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
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, status: statusUpd } : todo
    );
    await saveTodos(updatedTodos);
    setTodos(updatedTodos);
    console.log("====================================");
    console.log(updatedTodos);
    console.log("====================================");
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        contentContainerStyle={styles.tasksContainer}
        data={todos}
        renderItem={({ item, index }) => (
          <TodoItem
            todoItem={item}
            handleEditStatus={(status) => handleEditStatus(status, item.id)}
            todoTitle={item.title}
            key={index}
            onPress={() => handleEditTodo(item.id, item.title)}
            onDelete={() => deleteTodo(index)}
            updatedTodos={todos}
          />
        )}
      />

      <Modal visible={isModalVisible} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <Animatable.View style={styles.modalContainerInner} animation="zoomInUp" duration={800}>
            <Animatable.View animation="fadeIn" duration={500}>
              <AntDesign
                style={{ marginBottom: 4 }}
                name="close"
                size={24}
                color={"black"}
                onPress={() => {
                  setIsModalVisible(false);
                }}
              />
            </Animatable.View>
            <View style={styles.modalContent}>
              <Text>Edit Todo with ID: {selectedTodoId}</Text>
              <TextInput
                value={selectedTodoTitle}
                onChangeText={(text) => setSelectedTodoTitle(text)}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Button title="Save" onPress={editTodoTitle} />
              </View>
            </View>
          </Animatable.View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  tasksContainer: {
    gap: 2,
    // flexGrow: 0,
    flexGrow: 1, /// когда здесь ставил   height: '100%' прокрутка не работала ** у родительского компонента тоже должно быть flexGrow: 1,
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Полупрозрачный фон для модального окна
  },
  modalContainerInner: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    elevation: 5,
  },
  modalContent: {
    padding: 20,
  },
});
