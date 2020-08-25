import React, { useState } from 'react'
import { ScrollView, View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

export default function LoginScreen() {
  const [inputValue, setInputValue] = useState({})

  const onChangeInput = (value, name) => {
    setInputValue(prev => ({ ...prev, [name]: value }))
  }
  const onLogin = () => {
    alert(JSON.stringify(inputValue))
  }
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        {/* <Image
          style={{ width: 200, height: 200 }}
          source={{ uri: 'https://facebook.github.io/react/logo-og.png' }} /> */}
        <Image
          style={{ width: 150, height: 150, alignSelf: 'center', marginTop: '20%' }}
          source={require('../images/ins.png')}
        />
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeInput(text, 'email')}
          value={inputValue}
          placeholder='Your Email'
        />
        <TextInput
          style={[styles.input, { marginTop: 20 }]}
          onChangeText={text => onChangeInput(text, 'password')}
          value={inputValue}
          placeholder='Your Password'
        />
        <TouchableOpacity style={styles.btnLogin} onPress={onLogin}>
          <Text style={styles.txtLogin}>Login</Text>
        </TouchableOpacity>
        {/* <Text>
          No count
          <Text style={{ color: 'red' }}>Signup</Text>
        </Text> */}
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ marginRight: 10 }}>No account</Text>
          <Text style={{ color: 'red' }}>Signup</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 40, borderColor: 'gray',
    borderWidth: 1,
    marginTop: 40,
    borderRadius: 5,
    paddingLeft: 15
  },
  btnLogin: {
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 5,
    backgroundColor: 'green',
    marginTop: 20
  },
  txtLogin: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 18
  }
});