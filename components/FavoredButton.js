import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'

export default function FavoredButton({onPress, title}) {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.container}
    >
        <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#07e249b9',
        padding: 10
    },
    text: {
        fontSize: 16,
        color: '#000000'
    }
})