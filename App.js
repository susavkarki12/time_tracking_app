import "react-native-gesture-handler";
import React, { createContext, useContext } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./app/navigation/AppNavigation";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

const FontContext = createContext();

const App = () => {
  let [fontsLoaded] = useFonts({
    TTHoves: require("./assets/fonts/TT-Hoves.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <FontContext.Provider value="TTHoves">
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </FontContext.Provider>
  );
};

export default App;
