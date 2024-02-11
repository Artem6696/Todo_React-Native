import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
  Animated,
  FlatList,
} from "react-native";
import TaskItem from "./TaskItem";

export const TaskList = ({ todos, setTodos }) => {
  const deleteTodo = (ind) => {
    const newTodos = [...todos];
    newTodos.splice(ind, 1);
    setTodos(newTodos);
  };

  return (
    <View style={{ width: "100%"}}>
      {/* <FlatList  contentContainerStyle={styles.tasksContainer}
        data={todos}
        renderItem={({ item, index }) => (
          <TaskItem
            todo={item}
            key={index}
            onDelete={() => deleteTodo(index)}
          />
        )}
      /> */}
      <ScrollView contentContainerStyle={styles.tasksContainer}>
        {todos.map((todo, index) => (
          <TaskItem
            todo={todo}
            key={index}
            onDelete={() => deleteTodo(index)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  tasksContainer: {
    height: '100%',
    alignItems: "center",
  },
});