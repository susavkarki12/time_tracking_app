
import { Text, View, StyleSheet, Image, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'

const FourthPage = () => {

  const navigation = useNavigation();
  return (
    <View style={styles.mainView}>
      <View style={styles.topView}>
        <Image
          style={styles.imageLogo}
          source={require("./logo.png")} />

        <Text style={styles.text}> App Name </Text>
      </View>
      <View style={styles.midView}>
        <Text style={styles.innerFirstText}>How familiar are you</Text>
        <Text style={styles.innerSecondText}>with <Text style={styles.goalText}>Time Blocking?</Text></Text>

        <View style={styles.gridView}>
          <Text style={styles.gridText}>Very Familiar</Text>
        </View>
        <View style={styles.gridView}>
          <Text style={styles.gridText}>Familiar</Text>
        </View>
        <View style={styles.gridView}>
          <Text style={styles.gridText}>Not Familiar</Text>
        </View>
        <View style={styles.gridView}>
          <Text style={styles.gridText}>I want to know more</Text>
        </View>
        <Image
          style={styles.bar1}
          source={require("./bar.png")} />

        <LinearGradient
          colors={['#ff3131', '#ff914d']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}>
          <Pressable
            style={({ pressed }) => [
              pressed ? 'rgb(210, 230, 255)' : 'white',
            ]}
            onPress={() =>
              navigation.navigate('fifthPage')}
          >
            <Text style={styles.gradientText} >Next</Text>
          </Pressable>
        </LinearGradient>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "#1F7B55",
    width: "100%",
    aspectRatio: "auto",
    paddingBottom: 33,
  },

  topView: {
    alignItems: "center",

    width: "100%",
    aspectRatio: 10 / 3,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",

    paddingTop: 50,

  },

  imageLogo: {
    width: 40,
    height: 40
  },

  text: {
    color: "white",
    fontSize: 35,
  },
  midView: {
    backgroundColor: "white",
    alignItems: "center",
    marginBottom: 60,
    paddingBottom: 33,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 50,
  },

  innerFirstText: {
    fontSize: 30,
    paddingTop: 40,
    marginTop:20,
  },

  innerSecondText: {
    fontSize: 30,
    marginBottom: 40,
  },

  goalText:{
    color: "#1F7B55",
  },

  gridView: {
    borderWidth: 1,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    marginTop: 20,
    paddingLeft: "100",
    paddingRight: "100",
    padding: 15,
    marginBottom: 10,
  },
  gridText: {
    fontSize: 17,
  },

  bar1: {
    height: 30,
    width: 130,
    paddingBottom: 20
  },
  gradientText: {
    color: "white",
    fontSize: 35,
    paddingLeft: 80,
    paddingRight: 80,
    marginLeft:10,
    marginRight:10

},
gradient: {
    borderWidth: 0.3,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    marginTop:20,
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 10,
    paddingBottom: 10,
}
})

export default FourthPage
