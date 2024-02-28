import React from 'react'
import { View, StyleSheet, FlatList, Alert, Modal, Text, TextInput, Button, Platform, StatusBar } from "react-native";
import * as Animatable from "react-native-animatable";
import { AntDesign } from "@expo/vector-icons";
import DraggableFlatList from "react-native-draggable-flatlist";
const ModalEdit = ({isModalVisible, setIsModalVisible, selectedTodoId, selectedTodoTitle, setSelectedTodoTitle, editTodoTitle}) => {
  return (
    <Modal visible={isModalVisible} transparent animationType="fade">
    <View style={styles.modalContainer}>
      <Animatable.View style={styles.modalContainerInner} animation="zoomInUp" duration={800}>
        <Animatable.View animation="fadeIn" duration={500}>
          <AntDesign
            style={{ marginBottom: 4 }}
            name="close"
            size={24}
            color={"black"}
            onPress={() => {
              setIsModalVisible(false);
            }}
          />
        </Animatable.View>
        <View style={styles.modalContent}>
          <Text>Edit Todo with ID: {selectedTodoId}</Text>
          <TextInput value={selectedTodoTitle} onChangeText={(text) => setSelectedTodoTitle(text)} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button title="Save" onPress={editTodoTitle} />
          </View>
        </View>
      </Animatable.View>
    </View>
  </Modal>
  )
}

const styles = StyleSheet.create({
    todoListContainer: {
      maxHeight: "900",
      flexGrow: 100,
      backgroundColor: 'white',
      ...Platform.select({
        ios: {
          // paddingBottom: 170,
          // paddingVertical: 40,
        },
        android: {
          // backgroundColor: 'blue',
          flexBasis: 1,
        },
      }),
    },
    tasksContainer: {
      gap: 2,
      alignItems: "center",
    },
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Полупрозрачный фон для модального окна
    },
    modalContainerInner: {
      backgroundColor: "white",
      padding: 10,
      borderRadius: 10,
      elevation: 5,
    },
    modalContent: {
      padding: 20,
    },
  });
  
export default ModalEdit