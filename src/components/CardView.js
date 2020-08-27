import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles/CardViewStyles'
export default function CardView(props) {
  return (
    <View style={[styles.container, props.style]}>
      {props.children}
    </View>
  )
}
