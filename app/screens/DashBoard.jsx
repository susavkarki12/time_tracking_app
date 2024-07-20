import { View, Text, Image, Platform, StyleSheet, TextInput, Dimensions, KeyboardAvoidingView, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
const { height, width } = Dimensions.get("screen")
import { BarChart } from "react-native-chart-kit";
import { useNavigation, Link } from "@react-navigation/native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const rgba = (r, g, b, a) => `rgba(${r}, ${g}, ${b}, ${a})`;



const data = {
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 34]
    }
  ]
};



const DashBoard = ({ navigation }) => {
  //const navigation = useNavigation();
  const nav=()=>{
    navigation.navigate("Setting")
  }
  const navtovip=()=>{
    navigation.navigate("vip")
  }


  return (

    <View style={styles.mainView}>
      <View style={styles.topView}>
        <Image
          style={styles.logo}
          source={require("./icons/logo.png")} />
        <Text style={styles.text}>FreeDAY</Text>

        <Image
          style={styles.searchLogo}
          source={require("./icons/search.png")} />
        <TextInput
          style={styles.input}
          placeholder="Search Here"
        />
      </View>

      <View style={{
        //marginTop:-40,
        flexDirection: "row",
        width: "80%",
        height: "80%"
      }}>
        <Text style={{
          fontFamily: "TTHoves",
          marginLeft: "5%",
          fontSize: 33
        }}>Just keep moving {"\n"} forward</Text>

        <Image
          style={{
            width: "30%",
            height: "15%"
          }}
          source={require("./icons/logo.png")}
        />
      </View>



      
        <View >
          <LinearGradient
            colors={["#ff3131", "#ff914d"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={{
              marginTop: "-133%",
              marginLeft: "3%",
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderTopRightRadius: 20,
              marginRight: "3%",
              flexDirection: "row"
            }}
          >
            <TouchableOpacity onPress={navtovip}>
            <Text style={{
              fontFamily: "TTHoves",
              paddingLeft: "5%",
              paddingTop: "4%",
              paddingBottom: "3.5%",
              fontSize: 25,
              color: "white"
            }}>Upgrade To Premium {"\n"} {"\n"}
              <Text style={{
                fontSize: 15,
                //paddingTopTop: -20
              }}>Become a VIP Member to get {"\n"}
                Unlimited Apps & more Features!
              </Text>
            </Text>
            </TouchableOpacity>
            <Image
              style={{
                width: "22%",
                height: "63%",
                marginLeft: "3%",
                marginTop: "6%"

              }}
              source={require("./icons/8.png")}
            />
          </LinearGradient>
        </View>
      


      <View style={{ flexDirection: "row" }}>
        <Text style={{
          fontFamily: "TTHoves",
          fontSize: 20,
          marginTop: "-96%",
          marginLeft: "5%"
        }}>Usages</Text>
        <Pressable style={{ marginLeft: 193 }}><Text style={{
          fontFamily: "TTHoves",
          marginTop: "-350%",
          fontSize: 18,
          color: "black"
        }}>See more  </Text></Pressable>
      </View>

      

        <BarChart
          style={{

            marginTop: "-85%",
            marginLeft: "4%",
            borderRadius: 20,
            width: "50%",
            height: "20%"
          }}
          fromZero
          data={data}
          width={Dimensions.get("screen").width - 30}
          height={260}
          horizontalLabelRotation={0}
          chartConfig={{
            //backgroundGradientFrom: "white",
            backgroundGradientFromOpacity: 1,
            //backgroundGradientTo: "white",
            backgroundGradientToOpacity: 0.8,
            color: (opacity = 1) => rgba(26, 255, 146, opacity),
            strokeWidth: 2, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: false // optional
          }}
          verticalLabelRotation={30}
        />
      
      <LinearGradient
        colors={["#ff3131", "#ff914d"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={{
          width:"95%",
          marginLeft: 11,
          borderRadius: 30,
          marginRight: "40%",
          marginTop: "30%",
          flexDirection: "row"
        }}
      >
        <Image
          style={{
            width: "12%",
            height: "100%",
            marginLeft: "2%",
            
            marginBottom: "2%"

          }}
          source={require("./icons/1.png")}
        />
        <Text style={{
          fontFamily: "TTHoves",
          color: "white",
          width:"22%",
          marginTop: "5%",
          fontSize: 15,
          marginLeft: "5%"
        }}>DashBoard</Text>
        <View style={{
          width: "0.5%",
          height: "35%",
          backgroundColor: "white",
          marginTop: "5%",
          marginLeft: "5%",
          marginRight: "8%"
        }} />
<<<<<<< HEAD
        <TouchableOpacity onPress={nav}>
=======
        <TouchableOpacity onPress={navigation.navigate("Setting")}>
>>>>>>> b1e6b9083740e5444e9a18c1f99903841ec85fcf
        <Image
          style={[styles.footerLogo, {
            width: wp('12%')
          }]}
          
          source={require("./icons/2.png")}
        />
<<<<<<< HEAD
        </TouchableOpacity >
=======
        </TouchableOpacity>
>>>>>>> b1e6b9083740e5444e9a18c1f99903841ec85fcf
        <Image
          style={[styles.footerLogo]}
          source={require("./icons/3.png")}
        />
        <Image
          style={styles.footerLogo}
          source={require("./icons/4.png")}
        />
      </LinearGradient>

    </View>


  )
}

const styles = StyleSheet.create({
  mainView: {
    marginTop:"12%",
    height: "100%",

  },

  topView: {
    paddingTop: 0,
    width: "80%",
    height: "100%",
    flexDirection: "row",
    marginBottom: "-195%",

  },

  logo: {
    width: "20%",
    height: "7%",
    marginLeft: "2%",
    marginTop:0
  },

  text: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 20,
    fontFamily: "TTHoves",
  },

  searchLogo: {
    width: "10%",
    height: "05%",
    marginLeft: 100,
    marginTop: 10
  },

  input: {
    width: "28%",
    height: "5%",
    marginLeft: 0,
    marginRight: 20,
    borderWidth: 0.3,
    paddingLeft: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    position: "sticky",
    marginTop: 10,
    backgroundColor: "transparent",

  },

  footerLogo: {
    width: "12%",
    height: 45,
    marginLeft: 8,
    marginTop: 8,
    marginBottom: "2%",
    borderWidth: 1,
    borderColor: "white",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
  }
})

export default DashBoard