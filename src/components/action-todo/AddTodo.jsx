import React from "react";
import { View, Button, TextInput, StyleSheet, Text } from "react-native";

import ButtonAddTodo from "../Button";
import constants from "../../../constants";

export const AddTodo = ({ inputValue, setInputValue, addTodo }) => {
  const handleAddTodo = () => {
    addTodo();
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        placeholder="enter you TODO"
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
        autoCapitalize="none"
        autoCorrect={false}
       
      />
      <ButtonAddTodo text="add" onPress={handleAddTodo} />
    </View>
  );
};
const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    
    alignItems: "center",
    backgroundColor: constants.Navbar,
    marginBottom: 20
  },
  input: {
    height: 44,
    width: "65%",
    borderStyle: "solid",
    borderWidth: 1.5,
    borderColor: "#ccc",
    // margin: 12,
    padding: 12,
    marginLeft: 20,
    borderRadius: 5,
    backgroundColor: 'white'
  },
  btnContainer: {
    color: "white",
  },
  btn: {
    color: "black",
  },
});
