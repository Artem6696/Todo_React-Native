import React from "react";
import { View, Text, StyleSheet, FlatList, ImageBackground, TouchableOpacity, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import constants from "../../constants";

const img = require("../assets/img/1613710504_36-p-minimalistichnii-fon-dlya-prezentatsii-53 (1).jpg");
const imgMountian = require("../assets/img/foggy-mountain-forest-silhouette-landscape-vector.jpg");

const { width } = Dimensions.get("window"); // Получаем ширину экрана

export const Navbar = ({ title }) => {
  const data = [
    {
      id: "1",
      component: (
        <TouchableOpacity style={styles.itemContainer}>
          <View style={styles.imageContainer}>
            <ImageBackground resizeMode="cover" source={img} style={styles.image} imageStyle={{ borderRadius: 20 }}>
              <View style={styles.textContainerOne}>
                <Text style={styles.text}>Write down what you are going to do.</Text>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      ),
    },
    {
      id: "2",
      component: (
        <TouchableOpacity style={styles.itemContainer}>
          <View style={styles.imageContainer}>
            <ImageBackground resizeMode="cover" source={imgMountian} style={styles.image} imageStyle={{ borderRadius: 20 }}>
              <View style={styles.textContainerTwo}>
              <Text style={[styles.text]}>
                Writing down tasks and goals helps you plan future activities and develop strategies to achieve your goals. When
                we write down tasks and goals, we can evaluate what steps are needed to complete them and how best to allocate
                efforts to achieve the desired results.
              </Text>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      ),
    },
    {
      id: "3",
      component: (
        <TouchableOpacity style={styles.itemContainer}>
          <Text style={styles.itemText}>Item 3</Text>
        </TouchableOpacity>
      ),
    },
  ];

  const renderItem = ({ item }) => item.component;

  return (
    <View style={styles.navbarContainer}>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContainer}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    marginLeft: 20,
    height: 140,
    width: "90%",
    backgroundColor: constants.Navbar,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  flatListContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  itemContainer: {
    overflow: "hidden",
  },
  imageContainer: {
    width,
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    height: "100%",
  },
  textContainerOne: {
    marginBottom: 90,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 10,
  },
  textContainerTwo :{
    marginBottom: 90,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
});
