import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Pressable } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Svg, { Path } from "react-native-svg";
import SelectDropdown from "react-native-select-dropdown";

const RightAction = ({ onDelete }) => {
  return (
    <View
      style={{
        backgroundColor: "red",
        width: 70,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 20,
        marginVertical: 1,
      }}
    >
      <View style={styles.rightAction}>
        <TouchableOpacity
          onPress={() => {
            onDelete();
          }}
        >
          <Svg
            style={{}}
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            width={60}
            height={60}
            fill="#FFF"
          >
            <Path d="M46 13c-1.645 0-3 1.355-3 3v2H32.266a5.006 5.006 0 0 0-4.29 2.428L26.435 23H23c-2.197 0-4 1.803-4 4s1.803 4 4 4h1.074l3.574 46.459A6.014 6.014 0 0 0 33.631 83h32.738a6.014 6.014 0 0 0 5.983-5.541L75.926 31H77c2.197 0 4-1.803 4-4s-1.803-4-4-4h-3.434l-1.543-2.572A5.006 5.006 0 0 0 67.734 18H57v-2c0-1.645-1.355-3-3-3h-8zm0 2h8c.565 0 1 .435 1 1v2H45v-2c0-.565.435-1 1-1zm-13.734 5h11.566a1 1 0 0 0 .326 0h11.674a1 1 0 0 0 .326 0h11.576c1.056 0 2.03.552 2.573 1.457L71.834 24H68.5a.5.5 0 1 0 0 1H77c1.117 0 2 .883 2 2s-.883 2-2 2H23c-1.117 0-2-.883-2-2s.883-2 2-2h38.5a.5.5 0 1 0 0-1H28.166l1.527-2.543A2.996 2.996 0 0 1 32.266 20zM64.5 24a.5.5 0 1 0 0 1h2a.5.5 0 1 0 0-1h-2zm-38.422 7h47.844l-3.565 46.307A3.987 3.987 0 0 1 66.37 81H33.631c-2.1 0-3.828-1.6-3.988-3.693L26.078 31zM38 35c-1.651 0-3 1.349-3 3v35c0 1.651 1.349 3 3 3s3-1.349 3-3V38c0-1.651-1.349-3-3-3zm12 0c-1.651 0-3 1.349-3 3v35c0 1.651 1.349 3 3 3s3-1.349 3-3v-3.5a.5.5 0 1 0-1 0V73c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2V38c0-1.11.89-2 2-2 1.11 0 2 .89 2 2v25.5a.5.5 0 1 0 1 0V38c0-1.651-1.349-3-3-3zm12 0c-1.651 0-3 1.349-3 3v1.5a.5.5 0 1 0 1 0V38c0-1.11.89-2 2-2 1.11 0 2 .89 2 2v35c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2V47.5a.5.5 0 1 0-1 0V73c0 1.651 1.349 3 3 3s3-1.349 3-3V38c0-1.651-1.349-3-3-3zm-24 1c1.11 0 2 .89 2 2v35c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2V38c0-1.11.89-2 2-2zm21.492 5.992A.5.5 0 0 0 59 42.5v2a.5.5 0 1 0 1 0v-2a.5.5 0 0 0-.508-.508z" />
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const TodoItem = ({ todoTitle, onDelete, onPress, handleEditStatus, todoItem, updateTodos }) => {
  const todoStatus = ["planned", "in process", "is done"];
  return (
    <Swipeable renderRightActions={() => <RightAction onDelete={onDelete} />}>
      <Pressable onLongPress={onPress} delayLongPress={400}>
        <View style={styles.todoContainer}>
          <View style={{ width: "100%" }}>
            <Text style={styles.todoText}>{todoTitle}</Text>
            <View style={styles.dropDown}>
              <SelectDropdown
                data={todoStatus}
                buttonStyle={styles.dropDownBtn}
                defaultValue={
                  todoItem.status !== "in process" && todoItem.status !== "is done"
                    ? "planned"
                    : todoItem.status
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
      </Pressable>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#e7ecef",
    borderBottomColor: "grey",
    borderBottomWidth: 0.2,
    marginVertical: 1,
    paddingVertical: 20, // Добавим отступ сверху и снизу, чтобы было место для текста
    paddingHorizontal: 20, // Добавим отступ слева и справа
  },
  rightAction: {
    alignItems: "center",
  },
  todoElement: {},
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
});

export default TodoItem;
