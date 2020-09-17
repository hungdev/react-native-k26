import React, { useEffect, useState } from 'react'
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Metrics, Fonts, Colors } from '../themes';
import Item from '../components/Item'
import CardView from '../components/CardView';
import { getAllPost, getMe } from '../services/Api'
import { setMe } from '../actions/authAction'
import { useSelector, useDispatch } from 'react-redux';

const arrImages = [
  'https://therightsofnature.org/wp-content/uploads/2018/01/turkey-3048299_1920-1366x550.jpg',
  'https://static.wixstatic.com/media/7b6cb3_196895f06d2748d8b7dc708fe93a33fb~mv2_d_2202_1467_s_2.jpg/v1/fill/w_640,h_1214,al_c,q_85,usm_0.66_1.00_0.01/7b6cb3_196895f06d2748d8b7dc708fe93a33fb~mv2_d_2202_1467_s_2.webp',
  'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*',
  'https://img.redbull.com/images/c_fill,g_auto,w_860,h_1075/q_auto,f_auto/redbullcom/2015/07/27/1331737542701_2/moon-hill-natural-bridge-in-china',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfaw_YxzoXrXVleIt4FnHXnD48GknuJoWoyA&usqp=CAU'
]
// const data = Array(10).fill('').map((e, i) => ({
//   id: i + 1,
//   content: 'zzzz',
//   username: 'admin',
//   image: arrImages[i] || 'https://therightsofnature.org/wp-content/uploads/2018/01/turkey-3048299_1920-1366x550.jpg',
//   date: '1/1/2001'
// }))
export default function Home(props) {
  const dispatch = useDispatch()
  const [data, setData] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const result = await getAllPost()
      console.log('result', result)
      setData(result.data.data)
    }
    getPosts()
  }, [])

  useEffect(() => {
    const getUserInfo = async () => {
      const result = await getMe()
      dispatch(setMe(result.data.data))
    }
    getUserInfo()
  }, [])

  const onMove = () => {
    // alert('ok')
    // props.navigation.navigate('Albums')
  }
  const renderItem = ({ item }) => {
    // console.log('item', item)
    return (
      <CardView style={{ marginVertical: Metrics.baseMargin }}>
        <Item data={item} onPress={onMove} />
      </CardView>
    )
  };

  const onCreatePost = () => {
    // alert('ok')
    props.navigation.navigate('PostScreen')
  }

  const header = () => (
    <CardView style={{ marginVertical: Metrics.baseMargin }}>
      <TouchableOpacity
        onPress={onCreatePost}
      >
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
      </TouchableOpacity>
    </CardView>
  )

  return (
    <View style={{ backgroundColor: Colors.frost }}>
      <Text>bookmark</Text>
    </View>


  )
}
