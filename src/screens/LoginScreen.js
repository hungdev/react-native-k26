import React, { useState } from 'react'
import { ScrollView, View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { setAuth } from '../actions/authAction'
import { login } from '../services/Api'
import { connect, useSelector, useDispatch } from 'react-redux';

export default function LoginScreen() {
  const store = useSelector(store => store);
  // console.log('store2', store.auth.token);
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState({
    email: 'hello@cee.com',
    password: '123456'
  })

  const onChangeInput = (value, name) => {
    setInputValue(prev => ({ ...prev, [name]: value }))
  }
  const onLogin = async () => {
    // alert(JSON.stringify(inputValue))
    try {
      const result = await login(inputValue)
      console.log('result', result)
      // dispatch({type: 'abcc', data: 'aaa'})
      dispatch(setAuth(result.data.token))
      // const isAuth = store.auth.token
      // console.log('store1', store.auth.token);
    } catch (error) {
      console.log(error)
    }

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
          value={inputValue.email}
          placeholder='Your Email'
        />
        <TextInput
          style={[styles.input, { marginTop: 20 }]}
          onChangeText={text => onChangeInput(text, 'password')}
          value={inputValue.password}
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