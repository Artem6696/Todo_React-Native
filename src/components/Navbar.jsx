import React from "react";
import { View, Text, StyleSheet } from "react-native";
import constants from "../../constants";

export const Navbar = ({ title }) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    
    height: 100,
    backgroundColor: constants.Navbar,
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
