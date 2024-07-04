import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import OnBoardingData from "../constants/OnBoardingData";
import OnBoardingRenderItem from "../components/OnBoardingRenderItem";
import Pagination from "../components/Pagination";
import { LinearGradient } from "expo-linear-gradient";

const { height, width } = Dimensions.get("screen");

const OnBoardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();

  const flatListRef = useRef(null);

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offsetX / width);
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    if (currentIndex < OnBoardingData.length - 1) {
      // If not on the last page, move to the next page
      flatListRef.current.scrollToIndex({
        animated: true,
        index: currentIndex + 1,
      });
    } else {
      // If on the last page, navigate to the dashboard
      navigation.replace("DashBoard");
    }
  };

  return (
    <LinearGradient
      colors={["#3d823d", "#3b893b"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 0.95 }}>
          <FlatList
            ref={flatListRef}
            data={OnBoardingData}
            renderItem={({ item }) => <OnBoardingRenderItem item={item} />}
            horizontal
            pagingEnabled
            bounces={false}
            onScroll={handleScroll}
            scrollEventThrottle={32}
            showsHorizontalScrollIndicator={false}
          />
          <Pagination
            currentIndex={currentIndex}
            total={OnBoardingData.length}
          />
        </View>
        <TouchableOpacity onPress={handleNext}>
          <LinearGradient
            colors={["#ff3131", "#ff914d"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={styles.nextButton}
          >
            <Text style={styles.nextButtonText}>
              {currentIndex === OnBoardingData.length - 1 ? "All Set" : "Next"}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },

  nextButton: {
    backgroundColor: "ff3131",
    width: "85%",
    alignSelf: "center",
    marginBottom: 20,
    alignItems: "center",
    paddingVertical: 20,
    borderRadius: 30,
  },
  nextButtonText: {
    color: "white",
    fontSize: 18,
    fontFamily: "TTHoves",
  },
});
