import React from "react";
import { View, StyleSheet, FlatList, Alert } from "react-native";
import TodoItem from "./TodoItem";

export const TodoList = ({ todos, setTodos }) => {
  const deleteTodo = (ind) => {
    const newTodos = [...todos];
    newTodos.splice(ind, 1);
    setTodos(newTodos);
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        contentContainerStyle={styles.tasksContainer}
        data={todos}
        renderItem={({ item, index }) => (
          <TodoItem
            todo={item}
            key={index}
            onDelete={() => deleteTodo(index)}
            onLeftSwipe={() => Alert("swipe on left")}
            onRightPress={() => Alert("swipe on right")}
          />
        )}
      />
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
});
