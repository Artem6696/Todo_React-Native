import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const ButtonAddTodo = ({ text, onPress }) => {
  const [pressed, setPressed] = useState(false);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.4}
      style={[styles.container, pressed && styles.buttonPressed]}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 45,
    backgroundColor: "#e5e5e5",
    borderRadius: 10,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "100%",
    height: "100%",
  },
  buttonPressed: {
    transform: [{ translateY: -4 }], // Поднимаем кнопку на 2 пикселя вверх при нажатии
  },
  buttonText: {
    textAlign: "center",
  },
});

export default ButtonAddTodo;
