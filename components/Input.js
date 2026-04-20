import { StyleSheet, TextInput, View } from 'react-native'


export default function Input({onChangeText,title,value}) {
  return (
    <View>
      <TextInput 
        style={styles.style}
        onChangeText={onChangeText}
        value={value}
        placeholder={title}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    style: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    }
})