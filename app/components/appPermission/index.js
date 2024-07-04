import { View, Text, PermissionsAndroid, Button, StyleSheet, StatusBar } from 'react-native'
import React from 'react'


const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
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

const Permissions = () => {
  return (
    <View style={styles.container}>
      <Button title="request permissions" onPress={requestCameraPermission} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: StatusBar.currentHeight,
      backgroundColor: '#ecf0f1',
      padding: 8,
    },

  });

export default Permissions