import { StatusBar } from "expo-status-bar";
import { Alert, Keyboard, StyleSheet, Platform, View } from "react-native";
import { Navbar } from "./src/Navbar";
import { AddTodo } from "./src/AddTodo";
import { useState } from "react";
import { TodoList } from "./src/TodoList";
import { SafeAreaView } from "react-native-safe-area-context";

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
    <SafeAreaView style={styles.container}>
      <Navbar style={styles.navbar} title="Tasks" />
      <View>
        <AddTodo
          handlerInputChange={handlerInputChange}
          inputValue={inputValue}
          addTodo={addTodo}
        />
      </View>
      <TodoList todos={todos} setTodos={setTodos} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColorL: "#FAFBFF",
    flex: 1,

    ...Platform.select({
      ios: {
        // backgroundColor: 'red',
        paddingVertical: 40,
      },
      android: {
        // backgroundColor: 'blue',
      },
    }),
  },
});
