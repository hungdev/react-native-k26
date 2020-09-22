import React, { useEffect, useState } from 'react'
import { View, Text, Image, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Metrics, Fonts, Colors } from '../themes';
import Item from '../components/Item'
import CardView from '../components/CardView';
import { getAllPost, getMe } from '../services/Api'
import { setMe } from '../actions/authAction'
import { useSelector, useDispatch } from 'react-redux';
import Reactotron from 'reactotron-react-native'

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
const initPagination = { limit: 5, skip: 0 }
export default function Home(props) {
  const dispatch = useDispatch()
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isRefresh, setIsRefresh] = useState(false)
  const [canLoadMore, setCanLoadMore] = useState(false)
  const [pagination, setPagination] = useState(initPagination)

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true)
      const result = await getAllPost({ limit: pagination.limit, skip: pagination.skip })
      setData(prev => ([...prev, ...result.data.data]))
      setIsRefresh(false)
      setIsLoading(false)
    }
    getPosts()
  }, [pagination.limit, pagination.skip])

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true)
      const result = await getAllPost({ limit: pagination.limit, skip: pagination.skip })
      setData(result.data.data)
      setIsRefresh(false)
      setIsLoading(false)
    }
    isRefresh && getPosts()
  }, [isRefresh])

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
    props.navigation.navigate('PostScreen')
  }


  const handleLoadMore = () => {
    if (canLoadMore) {
      setPagination(prev => ({ ...prev, skip: prev.skip + 5 }))
    }
  }

  const onRefresh = () => {
    setPagination(initPagination)
    setIsRefresh(true)
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

  const footer = () => {
    if (!isLoading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE",
        }}
      >
        <ActivityIndicator animating size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={{ backgroundColor: Colors.frost }}>
      <FlatList
        data={data}
        ListHeaderComponent={header}
        renderItem={renderItem}
        keyExtractor={item => item._id.toString()}
        // pull to rf
        onRefresh={onRefresh}
        refreshing={isRefresh}
        // loadmore
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        onMomentumScrollBegin={() => setCanLoadMore(true)}
        ListFooterComponent={footer}
      />
    </View>


  )
}
