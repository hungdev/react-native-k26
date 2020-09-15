import React, { useState } from 'react'
import { View, Text, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Metrics, Fonts, Colors } from '../themes';
// import ScaleImage from 'react-native-scalable-image';
import FitImage from 'react-native-fit-image';
// import Lightbox from 'react-native-lightbox';
import { imageProcess } from '../utils'
import moment from 'moment'
import { connect, useSelector, useDispatch } from 'react-redux';
import { updatePost } from '../services/Api'


// https://stackoverflow.com/questions/39631895/how-to-set-image-width-to-be-100-and-height-to-be-auto-in-react-native
export default function Item(props) {
  const [item, setItem] = useState(props.data)
  const store = useSelector(store => store);
  const user = store.auth.me
  // console.log('user', user)
  const isLiked = item.likes.includes(user._id)

  const onLike = async () => {
    const cloneItemState = { ...item }
    const checkIncludeLike = cloneItemState.likes.includes(user._id)
    const newArrLike = checkIncludeLike ? cloneItemState.likes.filter(e => e !== user._id) : cloneItemState.likes.concat([user._id])

    try {
      const result = await updatePost({
        postId: item._id,
        like: user._id
      })
      console.log('result', result)
      setItem(prev => ({ ...prev, likes: newArrLike }))
    } catch (error) {
      console.log('error', error)
    }
  }
  return (
    <TouchableOpacity>
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
          }}>{props.data.user_id.user_name}</Text>
          <Text style={{}}>{moment(props.data.created_date).format('DD/MM/YYYY hh:mm')}</Text>
        </View>
      </View>
      <View style={{
        flexDirection: 'row',
        padding: Metrics.baseMargin
      }}>
        <Text>{props.data.content}</Text>
      </View>
      <View
        style={{
          // borderWidth: 1, borderColor: 'red',
          maxHeight: 500,
          overflow: 'hidden'
        }}
      >
        {/* <Image
          source={{ uri: props.image }}
          resizeMode='contain'
          style={{
            // maxHeight: 400,
            width: '100%',
            height: undefined,
            // aspectRatio: 1,
            // width: undefined,
            // marginRight: Metrics.baseMargin,
            // resizeMode: 'cover',
          }}
        /> */}
        {/* <Image
          // source={{ uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*' }}
          source={{ uri: props.image }}
          style={{
            flex: 1,
            height: 300,
            width: '100%',
            resizeMode: 'stretch'
          }}
        /> */}
        {/* <ScaleImage
          width={Dimensions.get('window').width - 10} // height will be calculated automatically
          source={{
            uri: props.image
          }}
        /> */}
        {props.data && props.data.image_url ? <FitImage
          source={{ uri: imageProcess(props.data.image_url) }}
          style={{}}
        /> : null}
      </View>
      <View style={{
        flexDirection: 'row', alignItems: 'center',
        justifyContent: 'space-between',
        margin: Metrics.baseMargin,
      }}>
        <TouchableOpacity
          onPress={onLike}
          style={{ flexDirection: 'row', alignItems: 'center' }}>
          <AntDesign name={isLiked ? "like1" : 'like2'} size={30} color={isLiked ? Colors.facebook : 'black'} />
          <Text> {item.likes.length}Likes</Text>
        </TouchableOpacity>
        <View>
          <Text>xxx</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
