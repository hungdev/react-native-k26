import React from 'react'
import { View, Text, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Metrics, Fonts, Colors } from '../themes';
import ScaleImage from 'react-native-scalable-image';
import FitImage from 'react-native-fit-image';
import Lightbox from 'react-native-lightbox';
// https://stackoverflow.com/questions/39631895/how-to-set-image-width-to-be-100-and-height-to-be-auto-in-react-native
export default function Item(props) {
  const { onPress } = props
  return (
    <TouchableOpacity onPress={onPress}>
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
      <View
        style={{
          borderWidth: 1, borderColor: 'red',
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
        <FitImage
          source={{ uri: props.image }}
          style={{}}
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
          <Text>xxx</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
