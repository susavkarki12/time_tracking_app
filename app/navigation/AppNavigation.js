import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dashboard, OnBoardingScreen } from "../screens";

import VipComponent from "../screens/VIP";

const AppStack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <AppStack.Navigator
      initialRouteName="OnBoard"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen name="OnBoard" component={OnBoardingScreen} />
      <AppStack.Screen name="DashBoard" component={Dashboard} />
      
      <AppStack.Screen name="vip" component={VipComponent} />
    </AppStack.Navigator>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
