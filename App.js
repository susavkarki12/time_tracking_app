import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepge from './app/components/firstPage';
import SecondPage from './app/components/secondPage';
import ThirdPage from './app/components/thirdPage';
import FourthPage from './app/components/fourthPage';
import FifthPage from './app/components/fifthPage';
import DashBoard from './app/components/dashboard';
import Permissions from './app/components/appPermission';

const Stack = createNativeStackNavigator();

class App extends React.Component {
  componentDidMount() {
    StatusBar.setHidden(false);
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='home'
            component={Homepge}
            options={{
              headerShown: false,
              statusBarHidden: true,
            }}
          />
          <Stack.Screen
            name='secondPage'
            component={SecondPage}
            options={{
              headerShown: false,
              statusBarHidden: true,
            }} />
          <Stack.Screen 
            name='thirdPage'
            component={ThirdPage}
            options={{
              headerShown: false,
              statusBarHidden: true,
            }} />
            <Stack.Screen 
            name='fourthPage'
            component={FourthPage}
            options={{
              headerShown: false,
              statusBarHidden: true,
            }} />
            <Stack.Screen 
            name='fifthPage'
            component={FifthPage}
            options={{
              headerShown: false,
              statusBarHidden: true,
            }} />
            <Stack.Screen 
            name='dashBoard'
            component={DashBoard}
            options={{
              headerShown: false,
              statusBarHidden: true,
            }} />
            <Stack.Screen 
            name='permissions'
            component={Permissions}
            options={{
              headerShown: false,
              statusBarHidden: true,
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

}
export default App