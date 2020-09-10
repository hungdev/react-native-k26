import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import { Fonts, Metrics, Colors } from '../themes'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import ImagePicker from 'react-native-image-picker';

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default function CreatePost() {
  const [data, setData] = useState({})

  const onChangeText = (value) => {
    setData(prev => ({ ...data, content: value }))
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={{ uri: 'https://i.ytimg.com/vi/49ttxlWY6VA/maxresdefault.jpg' }}
            // source={{ uri: getImageUrl(user && user.avatar_url) }}
            style={{ height: 60, width: 60, borderRadius: 30, marginRight: 10 }} />
          <View >
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              {/* {user && user.user_name} */}Cee
            </Text>
          </View>
        </View>
      </View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, flex: 1, textAlignVertical: 'top', fontSize: 18 }}
        onChangeText={text => onChangeText(text)}
        value={data.content}
        placeholder={`What's on your mind?`}
        multiline={true}
      />
      {/* {imageRs && <Image
        source={{ uri: imageRs.uri }}
        resizeMode='cover'
        style={{ height: 100, width: '100%' }} />} */}
      <View style={{ justifyContent: 'center', alignItems: 'center', height: 50 }}>
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
        // onPress={() => this.onUpload()}
        >
          <Text>Add your post</Text>
          <MaterialIcons name="photo-camera" size={20} color={Colors.facebook} style={{ marginLeft: 10 }} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

