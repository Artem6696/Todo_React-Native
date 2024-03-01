import React from "react";
import { View, StyleSheet, FlatList, Alert, Modal, Text, TextInput, Button, Platform, StatusBar } from "react-native";
import * as Animatable from "react-native-animatable";
import { AntDesign } from "@expo/vector-icons";
import DraggableFlatList from "react-native-draggable-flatlist";
import ButtonEditTodo from "../Button";
const ModalEdit = ({
  isModalVisible,
  setIsModalVisible,
  selectedTodoId,
  selectedTodoTitle,
  setSelectedTodoTitle,
  editTodoTitle,
}) => {
  return (
    <Modal visible={isModalVisible} transparent animationType="fade">
      <View style={styles.modalContainer}>
        <Animatable.View style={styles.modalContainerInner} animation="zoomInUp" duration={800}>
          <Animatable.View animation="fadeIn" duration={500} style={styles.headlineModal}>
            <AntDesign
              style={{ marginBottom: 4 }}
              name="close"
              size={24}
              color={"black"}
              onPress={() => {
                setIsModalVisible(false);
              }}
            />
            <Text style={styles.headlineText}> Изменить задачу: </Text>
          </Animatable.View>
          <View style={styles.modalContent}>
            <TextInput
              multiline={true}
              style={styles.inputText}
              value={selectedTodoTitle}
              onChangeText={(text) => setSelectedTodoTitle(text)}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              {/* <Button title="Save" onPress={editTodoTitle} /> */}
              <ButtonEditTodo text="изменить" onPress={editTodoTitle} />
            </View>
          </View>
        </Animatable.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  headlineModal: {
    flexDirection: "row",
    textAlign: "center",
    gap: 60,
  },
  headlineText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  inputText: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 20,
    flexWrap: "wrap",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Полупрозрачный фон для модального окна
  },
  modalContainerInner: {
    width: "90%",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    elevation: 5,
  },
  modalContent: {
    paddingTop: 20,
  },
});

export default ModalEdit;
