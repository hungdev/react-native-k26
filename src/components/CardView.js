import React from 'react'
import { View, Text } from 'react-native'

export default function CardView() {
  return (
    <View style={[styles.container, this.props.style]}>
      {this.props.children}
    </View>
  )
}
