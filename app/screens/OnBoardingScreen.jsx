import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
  PermissionsAndroid,
} from "react-native";
import React, { useState, useRef,useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import OnBoardingData from "../constants/OnBoardingData";
import OnBoardingRenderItem from "../components/OnBoardingRenderItem";
import Pagination from "../components/Pagination";
import { LinearGradient } from "expo-linear-gradient";
import { ThemeContext } from "../Context/ThemeContext";

const { height, width } = Dimensions.get("screen");

const requestNotificationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      {
        title: 'Notification access is required',
        message:
          'App name needs to access notification' +
          'so we can remind you of the time.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Notification granted');
    } else {
      console.log('Notification not granted');
    }
  } catch (err) {
    console.warn(err);
  }
};

const OnBoardingScreen = () => {
  const {isDarkMode} =useContext(ThemeContext);
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
      requestNotificationPermission()
      navigation.navigate("DashBoard")
    }
  };

  return (
    <LinearGradient
      colors={["#3d823d", "#3b893b"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{...styles.container,backgroundColor:isDarkMode? "#001F3F" : "white"}}>
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
    marginBottom: "8%",
    alignItems: "center",
    paddingVertical: "5%",
    borderRadius: 30,
  },
  nextButtonText: {
    color: "white",
    fontSize: 18,
    fontFamily: "TTHoves",
  },
});
