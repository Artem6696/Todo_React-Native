import React from "react";
import { View, Button, TextInput, StyleSheet, Text } from "react-native";
import ButtonAddTodo from "./ButtonAddTodo";

export const AddTodo = ({ inputValue, handlerInputChange, addTodo }) => {
  const handleInputChange = (text) => {
    handlerInputChange(text);
  };
  const handleAddTodo = () => {
    addTodo();
  };
  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        placeholder="Введите текст"
        value={inputValue}
        onChangeText={handleInputChange}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text value="123" />
      <ButtonAddTodo text="добавить" onPress={handleAddTodo} />
      
    </View>
  );
};
const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    alignItems: "center",
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
    backgroundColor: "red",
    color: "white",
    textDecorationColor: "m",
  },
  btn: {
    color: "black",
  },
});
