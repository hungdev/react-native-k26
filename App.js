import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import stylezzzzdddasads from './appstyles'
import { variableStyle } from './appstyles'
import Login from './src/screens/LoginScreen'
import Home from './src/screens/HomeScreen'
export default class App extends Component {
  render() {
    return (
      <Home />
      // <View style={{
      //   // flexDirection: 'row',
      //   // justifyContent: 'space-between',
      //   // alignItems: 'center',
      //   borderWidth: 5,
      //   flex: 1
      // }}>
      //   <View style={{
      //     borderWidth: 5, marginTop: 100,
      //     height: 300, width: 200, position: 'relative'
      //   }}>
      //     <View style={{
      //       position: 'absolute',
      //       top: 10,
      //       // marginTop: 5000,
      //       height: 50, width: 50,
      //       backgroundColor: 'red'
      //     }}></View>
      //   </View>
      //   {/* <View style={{ flex: 2, height: 50, width: 50, backgroundColor: 'blue' }}></View>
      //   <View style={{ flex: 1, height: 50, width: 50, backgroundColor: 'grey' }}></View> */}
      // </View>
    )
  }
}


