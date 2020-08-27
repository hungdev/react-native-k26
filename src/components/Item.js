import React from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Metrics, Fonts, Colors } from '../themes';

export default function Item() {
  return (
    <View>
      <View style={{ flexDirection: 'row', padding: Metrics.baseMargin }}>
        <Image source={require('../images/ins.png')}
          style={{
            height: 50, width: 50, borderRadius: 25,
            marginRight: Metrics.baseMargin
          }}
        />
        <View>
          <Text style={{
            fontSize: Fonts.size.regular,
            fontWeight: 'bold'
          }}>Hello</Text>
          <Text style={{}}>9h 25 20/2/2020</Text>
        </View>
      </View>
      <View style={{
        flexDirection: 'row',
        padding: Metrics.baseMargin
      }}>
        <Text>Content</Text>
      </View>
      <View>
        <Image source={require('../images/download.jpeg')}
          style={{
            maxHeight: 400,
            width: '100%',
            marginRight: Metrics.baseMargin,
            // resizeMode: 'cover',
          }}
        />
      </View>
      <View style={{
        flexDirection: 'row', alignItems: 'center',
        justifyContent: 'space-between',
        margin: Metrics.baseMargin
      }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <AntDesign name="like1" size={30} color={Colors.facebook} />
          <Text>Likes</Text>
        </View>
        <View>
          <Text>dateeeeee</Text>
        </View>
      </View>
    </View>
  )
}
