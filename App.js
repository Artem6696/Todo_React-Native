import { StatusBar } from "expo-status-bar";
import { Alert, Keyboard, StyleSheet, Platform, View } from "react-native";
import { Navbar } from "./src/components/Navbar";
import { AddTodo } from "./src/components/AddTodo";
import { useState } from "react";
import { TodoList } from "./src/components/TodoList";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MainScreen from "./src/screens/MainScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handlerInputChange = (input) => {
    setInputValue(input);
  };

  const addTodo = () => {
    if (inputValue.trim().length > 0) {
      setTodos([...todos, inputValue]);
      Keyboard.dismiss();
      setInputValue("");
    } else {
      Alert.alert("Поле ввода не может быть пустым.");
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: "red", flex: 1 }}>
        <GestureHandlerRootView style={styles.container}>
          <Navbar style={styles.navbar} title="Tasks" />

          <MainScreen
            todos={todos}
            handlerInputChange={handlerInputChange}
            inputValue={inputValue}
            addTodo={addTodo}
            setTodos={setTodos}
          />
        </GestureHandlerRootView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFBFF",
    flex: 1,

    ...Platform.select({
      ios: {
        // backgroundColor: 'red',
        // paddingVertical: 40,
      },
      android: {
        // backgroundColor: 'blue',
      },
    }),
  },
});
