import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, Keyboard, StyleSheet, Platform, View } from "react-native";
import { Navbar } from "../components/Navbar";
import { AddTodo } from "../components/action-todo/AddTodo";
import { useState, useEffect } from "react";
import { TodoList } from "../components/TodoList";
import { SafeAreaView } from "react-native-safe-area-context";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import constants from "../../constants";

const TodosScreen = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [statusTodo, setStatusTodo] = useState("planned");
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    loadTodos();
  }, []);

  useEffect(() => {
    saveTodos(todos);
    console.log(todos);
  }, [todos]);

  const loadTodos = async () => {
    try {
      const savedTodos = await AsyncStorage.getItem("todos");
      if (savedTodos) {
        const parsedTodos = JSON.parse(savedTodos);
      
        setTodos(parsedTodos);
      }
    } catch (error) {
      console.error("Ошибка при загрузке задач из AsyncStorage:", error);
    }
  };

  const saveTodos = async (updatedTodos) => {
    try {
      await AsyncStorage.setItem("todos", JSON.stringify(updatedTodos));
    } catch (error) {
      console.error("Ошибка при сохранении задач в AsyncStorage:", error);
    }
  };

  const generateId = () => {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;

    for (let i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const addTodo = () => {
    if (inputValue.trim().length > 0) {
      const newTodo = {
        id: generateId(),
        title: inputValue,
        creationTime: new Date(),
        status: statusTodo,
      };
      setTodos([...todos, newTodo]);
      Keyboard.dismiss();
      setInputValue("");
      console.log(todos);
    } else {
      Alert.alert("Поле ввода не может быть пустым.");
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: constants.Navbar }}>
      <GestureHandlerRootView style={styles.container}>
        <View style={{}}>
          <Navbar style={styles.navbar} title="Tasks" setFilterStatus={setFilterStatus} />
          <AddTodo 
           inputValue={inputValue}
           setInputValue={setInputValue}
           addTodo={addTodo}
           />
        </View>
        <TodoList
          todos={todos}
          
          setTodos={setTodos}
          saveTodos={saveTodos}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
        />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",

    ...Platform.select({
      ios: {
        // paddingVertical: 40,
      },
      android: {
        // backgroundColor: 'blue',
      },
    }),
  },
  containerBOX: {
    backgroundColor: constants.Container,
    flex: 1,
  },
});

export default TodosScreen;
