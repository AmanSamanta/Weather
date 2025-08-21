import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Home from './Src/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { enableScreens } from 'react-native-screens';
// enableScreens();


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home}/>

        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#e56c6cff',
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    fontFamily: 'Roboto', 
    
    // Ensure you have the Roboto font available in your project
  },
});