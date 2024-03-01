import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, ImageBackground, TouchableOpacity, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import constants from "../../constants";

const img = require("../assets/img/1613710504_36-p-minimalistichnii-fon-dlya-prezentatsii-53 (1).jpg");
const imgMountian = require("../assets/img/foggy-mountain-forest-silhouette-landscape-vector.jpg");

const { width } = Dimensions.get("window"); // Получаем ширину экрана

export const Navbar = ({ title, setFilterStatus }) => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const handleFilterChange = (status) => {
    setFilterStatus(status);
    setSelectedFilter(status);
  };
  const renderItem = ({ item }) => item.component;
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

  return (
    <>
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
      <View style={styles.navbarInfo}>
        <TouchableOpacity
          style={[styles.navbarInfoItem, selectedFilter === "all" && { backgroundColor: "rgba(255, 255, 255, 0.5)" }]}
          onPress={() => handleFilterChange("all")}
        >
          <Text style={{ textAlign: "center" }}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.navbarInfoItem, selectedFilter === "planned" && { backgroundColor: "rgba(255, 255, 255, 0.5)" }]}
          onPress={() => handleFilterChange("planned")}
        >
          <Text style={{ textAlign: "center" }}>Planned</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.navbarInfoItem, selectedFilter === "in process" && { backgroundColor: "rgba(255, 255, 255, 0.5)" }]}
          onPress={() => handleFilterChange("in process")}
        >
          <Text style={{ textAlign: "center" }}>In Process</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.navbarInfoItem, selectedFilter === "is done" && { backgroundColor: "rgba(255, 255, 255, 0.5)" }]}
          onPress={() => handleFilterChange("is done")}
        >
          <Text style={{ textAlign: "center" }}>Done</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  navbarInfo: {
    paddingHorizontal: 20,
    height: 65,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
  },
  navbarInfoItem: {
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    textAlign: "center",
  },
  navbarContainer: {
    marginLeft: 20,
    height: 140,
    width: "90%",
    backgroundColor: constants.Navbar,
    justifyContent: "center",
    alignItems: "center",
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
    marginBottom: 110,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 10,
  },
  textContainerTwo: {
    marginBottom: 100,
    backgroundColor: "rgba(0, 1, 1, 0.5)",
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
