import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

const OnBoardingRenderItem = ({ item }) => {
  const navigation = useNavigation();

  switch (item.type) {
    case "static":
      return (
        <View style={styles.staticContainer}>
          <View style={styles.imageView}>
            <Image source={item.image} style={styles.image} />
          </View>
          <View style={styles.textBox}>
            <Text style={styles.title1}>{item.title1}</Text>
            {item.title2 ? (
              <Text style={styles.title2}>{item.title2}</Text>
            ) : null}
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      );

    case "dynamic":
      return (
        <View style={styles.staticContainer}>
          <Text>Dynamix</Text>
        </View>
      );
  }
};

export default OnBoardingRenderItem;

const styles = StyleSheet.create({
  staticContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    width: Dimensions.get("screen").width,
  },
  imageView: {
    width: 320,
    height: 450,
    marginBottom: 40,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textBox: {
    textAlign: "center",
  },
  title1: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: -5,
    fontFamily: "TTHoves",
  },
  title2: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
    fontFamily: "TTHoves",
  },
  description: {
    color: "white",
    fontSize: 20,
    marginVertical: 20,
    textAlign: "center",
    fontFamily: "TTHoves",
  },
});
