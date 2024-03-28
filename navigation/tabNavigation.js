import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, Login, Welcome } from "../screens/index";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}
    >
      <Tab.Screen name="Home" component={Home}></Tab.Screen>
      <Tab.Screen name="Search" component={Home}></Tab.Screen>
      <Tab.Screen name="Fav" component={Home}></Tab.Screen>
      <Tab.Screen name="Account" component={Home}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;
