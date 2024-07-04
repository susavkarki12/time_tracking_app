import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const DashBoard = () => {
    return (
        <View style={styles.mainView}>
            <View style={styles.topView}>
                <Image
                    style={styles.logo}
                    source={require("./logo.png")} />
                <Text style={styles.text}>FreeDAY</Text>
                <Image
                    style={styles.searchLogo}
                    source={require("./search.png")} />
                <TextInput
                    style={styles.input}

                    placeholder="Search Here"

                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        paddingTop: 60,
        height: "100%"
    },

    topView: {
        width: "30%",
        height: "20%",
        flexDirection: "row",

    },

    logo: {
        width: 50,
        height: 50
    },

    text: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 20
    },

    searchLogo: {
        width: 30,
        height: 30,
        marginLeft: 140,
        marginTop: 10
    },

    input: {
        width: 80,
        marginLeft: 40,
        marginRight: 40,
        aspectRatio: 10 / 3,
        position: "sticky",
        marginTop: -70,
        backgroundColor: "black",

    }
})

export default DashBoard