import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, Keyboard, StyleSheet, Platform, View } from "react-native";
import { Navbar } from "../components/Navbar";
import { AddTodo } from "../components/AddTodo";
import { useState, useEffect } from "react";
import { TodoList } from "../components/TodoList";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import constants from "../../constants";

const TodosScreen = () => {
  const insets = useSafeAreaInsets();
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [statusTodo, setStatusTodo] = useState("запланированно");

  useEffect(() => {
    loadTodos();
  }, []);

  useEffect(() => {
    saveTodos(todos);
    console.log("====================================");
    console.log(todos);
    console.log("====================================");
  }, [todos]);

  const loadTodos = async () => {
    try {
      const savedTodos = await AsyncStorage.getItem("todos");
      if (savedTodos) {
        setTodos(JSON.parse(savedTodos));
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
    <GestureHandlerRootView style={styles.container}>
      <View style={{}}>
        <Navbar style={styles.navbar} title="Tasks" />

        <AddTodo
          inputValue={inputValue}
          setInputValue={setInputValue}
          addTodo={addTodo}
        />
      </View>

      <TodoList todos={todos} setTodos={setTodos} saveTodos={saveTodos} />
    </GestureHandlerRootView>
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
