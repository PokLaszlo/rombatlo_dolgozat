import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import RhombusScreen from './screens/RhombusScreen';

const Stack = createNativeStackNavigator();
export default function RouteStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Rhombus" component={RhombusScreen} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})