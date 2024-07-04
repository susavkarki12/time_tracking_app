import { View, Text, StyleSheet, Image, Pressable, Button } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Link } from 'expo-router'
import { useNavigation } from '@react-navigation/native'


const Homepge = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.bgColor}>
            <Image
                style={styles.image}
                source={require("./firstPage.png")}
            />
            <View style={styles.view2}>
                <Text style={styles.customText}>Hi, Welcome to</Text>
                <Text style={styles.customText}>Time Blocking App</Text>
                <Text style={styles.thirdText}>Focus on What Matters. Time</Text>
                <Text style={styles.thirdText}>Blocking Makes it Easy.</Text>
            </View>
            
            <View style={styles.viewWhite}>
                <Image
                    style={styles.bar1}
                    source={require("./bar.png")} />
            </View>

            <View style={styles.view3}>
                <LinearGradient
                    colors={['#ff3131', '#ff914d']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.gradient}>
                    <Pressable
                        style={({pressed})=>[
                            pressed ? 'rgb(210, 230, 255)' : 'white',
                        ]}
                        onPress={() =>
                            navigation.navigate('secondPage')}
                    >
                        <Text style={styles.gradientText} >Next</Text>
                    </Pressable>
                </LinearGradient>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bgColor: {
        backgroundColor: "#1F7B55",
        width: "100%",
        aspectRatio: "auto",
        paddingBottom: 33,
    },
    image: {
        height: 520,
        width: "90%",
        marginLeft: 10,
        marginTop: 10,

    },
    bar1: {
        height: 30,
        width: 130,
        paddingBottom:20
    },

    customText: {
        color: "white",
        fontSize: 40,
    },
    thirdText: {
        color: "white",
        fontSize: 15,

    },
    viewWhite: {
        width: "100%",
        flex: 1,
        flexDirection: 'row',

        display: "inlineBlock",
        alignItems: "center",
        padding: 50,
        paddingLeft: 135
    },
    viewGrey1: {
        width: "100%",

        alignItems: "center",
        paddingRight: 170,
        paddingBottom: 0,
    },
    viewGrey2: {
        width: "100%",

        alignItems: "center",
        paddingRight: -200,
        paddingBottom: 0,
    },
    view2: {

        width: "100%",
        aspectRatio: 10 / 3,

        alignItems: "center",

    },
    view3: {


        paddingLeft: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop:-40,
        marginTop:-22

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

        paddingLeft: 60,
        paddingRight: 60,
        paddingTop: 10,
        paddingBottom: 10,
    }

})
export default Homepge