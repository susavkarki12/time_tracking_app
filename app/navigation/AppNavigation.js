import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dashboard, OnBoardingScreen } from "../screens";
import { Setting } from "../screens/Setting";

import VipComponent from "../screens/VIP";
import { Setting } from "../screens/Settings";

const AppStack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <AppStack.Navigator
      
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen name="OnBoard" component={OnBoardingScreen} />
      <AppStack.Screen name="DashBoard" component={Dashboard} />
      <AppStack.Screen name="Setting" component= {Setting} />
      <AppStack.Screen name="vip" component={VipComponent} />
      <AppStack.Screen name="Setting" component={Setting} />
    </AppStack.Navigator>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
