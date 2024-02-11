import React from "react";
import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";

const TaskItem = ({ todo, onDelete }) => {
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
  tasksContainer: {
    
    alignItems: "center",
  },
  todoElement: {
    //shadows for android
    elevation: 4, 
    //
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    height: 70,
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
    justifyContent: "space-between",
  },
  todoText: {
    marginLeft: 25,
    fontSize: 20,
    color: "blue",
  },
});
export default TaskItem;
