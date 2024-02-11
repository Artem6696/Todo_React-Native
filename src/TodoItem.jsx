import React from "react";
import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <View>
      <View style={styles.todoElement}>
        <Text style={styles.todoText}>{todo}</Text>
        <TouchableOpacity
          onPress={() => {
            onDelete();
          }}
        >
          <Image
            style={{ width: 40, height: 35, marginRight: 20 }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/11573/11573055.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  todoElement: {
    //shadows for android
    elevation: 4,
    //
    flexDirection: "row",
    alignItems: "flex-start", // Расположение элементов вверху контейнера
    width: "90%",
    backgroundColor: "white",
    //Shadow for IOS
    borderRadius: 10,
    shadowOpacity: 0.08,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 10,
    //
    marginVertical: 10,
    paddingVertical: 10, // Добавим отступ сверху и снизу, чтобы было место для текста
    paddingHorizontal: 20, // Добавим отступ слева и справа
    justifyContent: "space-between",
  },
  todoText: {
    flex: 1, // Позволяет тексту занимать доступное пространство по высоте
    fontSize: 20,
    color: "#14213d",
    flexWrap: 'wrap',
  },
});
export default TaskItem;
