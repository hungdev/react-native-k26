import React from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Metrics, Fonts, Colors } from '../themes';
import Item from '../components/Item'
import CardView from '../components/CardView';

const data = Array(10).fill('').map((e, i) => ({
  id: i + 1,
  content: 'zzzz',
  username: 'admin',
  image: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
  date: '1/1/2001'
}))
export default function Home() {
  const renderItem = ({ item }) => (
    <CardView style={{ marginVertical: Metrics.baseMargin }}>
      <Item title={item.title} />
    </CardView>
  );

  const header = () => (
    <CardView style={{ marginVertical: Metrics.baseMargin }}>
      <View style={{
      }}>
        <View style={{
          flexDirection: 'row',
          padding: Metrics.baseMargin,
          alignItems: 'center',
          borderBottomWidth: 0.5
        }}>
          <Image source={require('../images/ins.png')}
            style={{
              height: 50, width: 50, borderRadius: 25,
              marginRight: Metrics.baseMargin
            }}
          />
          <Text>What's on your mind?</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            padding: Metrics.baseMargin,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <AntDesign name="instagram" size={30} color={Colors.facebook} />
          <Text>Photo</Text>
        </View>
      </View>
    </CardView>
  )

  return (
    <View style={{ backgroundColor: Colors.frost }}>
      <FlatList
        data={data}
        ListHeaderComponent={header}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>


  )
}
