import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Pressable } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import SelectDropdown from "react-native-select-dropdown";
import constants from "../../constants";
import SwipeDelete from "./action-todo/SwipeDelete";
import { formatDate, formatTime } from "../../dateTimeUtils";
const todoStatus = ["planned", "in process", "is done"];
import DraggableFlatList, { ScaleDecorator } from "react-native-draggable-flatlist";

const TodoItem = ({ todoTitle, onDelete, onPress, handleEditStatus, todoItem, updateTodos, drag, isActive }) => {
  let time = new Date(todoItem.creationTime); // Convert to Date object
  let date = new Date(todoItem.creationTime);

  return (
    <Swipeable renderRightActions={() => <SwipeDelete onDelete={onDelete} />}>
      <TouchableOpacity
        onLongPress={drag}
        disabled={isActive}
        onPress={onPress}
        delayLongPress={100}
        style={styles.item}
      >
        <View style={styles.todoContainer}>
          <View style={{ width: "100%" }}>
            <Text style={styles.todoTime}>
              {formatDate(date)} | {formatTime(time)}
            </Text>
            <Text style={styles.todoText}>{todoTitle}</Text>
            <View style={styles.dropDown}>
              <SelectDropdown
                data={todoStatus}
                buttonStyle={styles.dropDownBtn}
                defaultValue={
                  todoItem.status !== "in process" && todoItem.status !== "is done" ? "planned" : todoItem.status
                }
                onSelect={(selectedItem) => {
                  handleEditStatus(selectedItem);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                rowTextStyle={{}}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: "row",
    width: "100",
    backgroundColor: constants.Todo,
    borderBottomColor: "grey",
    borderBottomWidth: 0.2,
    marginVertical: 1,
    paddingVertical: 20, // Добавим отступ сверху и снизу, чтобы было место для текста
    paddingHorizontal: 20, // Добавим отступ слева и справа
  },
  todoText: {
    textAlign: "center",
    flex: 1,
    fontSize: 20,
    color: "#14213d",
    flexWrap: "wrap",
    maxWidth: "100%",
  },
  dropDown: {
    alignItems: "flex-end",
  },
  dropDownBtn: {
    width: 130,
    backgroundColor: "white",
    height: 25,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  todoTime: {
    marginLeft: "auto",
    fontSize: 10,
  },
});

export default TodoItem;
