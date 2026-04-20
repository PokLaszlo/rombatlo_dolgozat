import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FavoredButton from '../components/FavoredButton'

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Text>Rombusz síkidom területének kiszámítása a két átlójának segítségével</Text>
      <View>
        <FavoredButton 
            onPress={() => navigation.navigate('Rhombus')} 
            title="Rombusz terület számítás" />
      </View>
      <View>
        <FavoredButton 
            onPress={() => navigation.navigate('About')} 
            title="Készítő" />
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})