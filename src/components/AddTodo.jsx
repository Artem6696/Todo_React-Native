import React from "react";
import { View, Button, TextInput, StyleSheet, Text } from "react-native";
import ButtonAddTodo from "./ButtonAddTodo";
import constants from "../../constants";

export const AddTodo = ({ inputValue, setInputValue, addTodo }) => {
  const handleAddTodo = () => {
    addTodo();
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        placeholder="Введите текст"
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <ButtonAddTodo text="добавить" onPress={handleAddTodo} />
    </View>
  );
};
const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
    alignItems: "center",
    backgroundColor: constants.Navbar,
  },
  input: {
    height: 40,
    width: "60%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "grey",
    margin: 12,
    padding: 12,
    marginLeft: 20,
  },
  btnContainer: {
    color: "white",
  },
  btn: {
    color: "black",
  },
});
