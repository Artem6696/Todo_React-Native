import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Navbar = ({ title }) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    marginBottom: 20,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 60,
    alignItems: "center",
    color: "black",
    fontWeight: "100",
  },
});
