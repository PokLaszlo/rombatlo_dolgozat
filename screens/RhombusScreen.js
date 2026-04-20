import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { calcArea } from '../utils/rhombus';
import Input  from '../components/Input';
import FavoredButton from '../components/FavoredButton';

const RhombusScreen = ({navigation}) => {
  const [a_diagonal, setA_diagonal] = useState();
  const [b_diagonal, setB_diagonal] = useState();
  const [area, setArea] = useState();

  function startCalculation() {
    const area = calcArea(
        Number(a_diagonal),Number(b_diagonal)
    );
    setArea(area);
  }

  return (
    <View>
        <Text>Rombusz terület számítás</Text>
        <Input title="Hosszanti átló" onChangeText={a_diagonal => setA_diagonal(a_diagonal)} />
        <Input title="Keresztátló" onChangeText={b_diagonal => setB_diagonal(b_diagonal)} />
        <FavoredButton onPress={() => startCalculation()} title="Számítás" />
        <Input title="Terület" value={area} />
    </View>
  )
}

export default RhombusScreen

const styles = StyleSheet.create({})