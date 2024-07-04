import { View, Text, StyleSheet, Image, Pressable, Button } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Link } from 'expo-router'
import { useNavigation } from '@react-navigation/native'


const FifthPage = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.bgColor}>
            <Image
                style={styles.image}
                source={require("./fifthpage.png")}
            />
            <View style={styles.view2}>
                <Text style={styles.customText}>All Set!</Text>
                
                <Text style={styles.thirdText}>Your journey to a calmer, more</Text>
                <Text style={styles.thirdText}>productive you starts now</Text>
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
                            navigation.navigate('permissions')}
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

    customText: {
        marginTop: 20,
        color: "white",
        fontSize: 60,
        marginBottom: 15
    },
    thirdText: {
        color: "white",
        fontSize: 18,

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
        marginTop:-22,
        marginTop:80,

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
export default FifthPage