import { NavigationContainer } from "@react-navigation/native";

import React from "react";
import TodosScreen from "./src/screens/TodosScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodoDetailsScreen from "./src/screens/TodoDetailsScreen";
//Tab Bottom
const Tab = createBottomTabNavigator();
function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="TodoStackGroup"
        component={TodoStackGroup}
        options={{
          tabBarIcon: () => <AntDesign name="edit" size={36} color="black" />,
          // tabBarShowLabel: false, // скрытие tittle с иконки
          // tabBarStyle: { height:  }, изменения высоты
        }}
      />
      <Tab.Screen
        name="TodoStackGroup1"
        component={TodosScreen}
        options={{
          tabBarIcon: () => <AntDesign name="edit" size={36} color="black" />,
          // tabBarShowLabel: false, // скрытие tittle с иконки
          // tabBarStyle: { height:  }, изменения высоты
        }}
      />
    </Tab.Navigator>
  );
}
//Stack
const TodoStack = createNativeStackNavigator();

function TodoStackGroup() {
  return (
    <TodoStack.Navigator>
      <TodoStack.Screen name="TodosScreen" component={TodosScreen} />
      <TodoStack.Screen
        name="TodoDetailsScreen"
        component={TodoDetailsScreen}
      />
    </TodoStack.Navigator>
  );
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <TabGroup />
    </NavigationContainer>
  );
};

export default Navigation;
