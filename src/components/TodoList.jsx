import React, { useState } from "react";
import { View, StyleSheet, FlatList, Alert, Modal, Text, TextInput, Button ,Platform, StatusBar } from "react-native";
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
  const openModal = () => {
    setIsModalVisible(true);
    StatusBar.setBarStyle("light-content"); // Устанавливаем белый текст для статус-бара
    StatusBar.setBackgroundColor("rgba(0, 0, 0, 0.5)"); // Устанавливаем цвет фона для статус-бара
  };

  const closeModal = () => {
    setIsModalVisible(false);
    StatusBar.setBarStyle("default"); // Сбрасываем стиль текста статус-бара на стандартный
    StatusBar.setBackgroundColor("transparent"); // Сбрасываем цвет фона статус-бара на прозрачный
  };
  return (
    <View style={styles.todoListContainer}>
      <FlatList
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
  todoListContainer: {
    flexGrow: 1,
    ...Platform.select({
      ios: {
        paddingBottom: 170
        // paddingVertical: 40,
      },
      android: {
        // backgroundColor: 'blue',
        flexBasis:1      },
    }),
  },
  tasksContainer: {
    gap: 2,
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
