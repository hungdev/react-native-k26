import React, { useState } from 'react'
import { View, Text, Button, Image, TextInput, TouchableOpacity } from 'react-native'
import { Fonts, Metrics, Colors } from '../themes'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import ImagePicker from 'react-native-image-picker';
import { createPost } from '../services/Api'

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default function CreatePost({ navigation }) {
  const [data, setData] = useState({})
  const [imagePicker, setImagePicker] = useState({})

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{ borderWidth: 1, borderColor: 'red', width: 50, height: 50 }}>
          <Text>aaaa</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const onChangeText = (value) => {
    setData(prev => ({ ...data, content: value }))
  }

  const onUpload = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {
          uri: response.uri,
          name: response.fileName,
          type: response.type
        };
        setImagePicker(source)
      }
    });
  }

  const onPost = async () => {
    let form = new FormData()
    form.append('title', 'HN')
    form.append('content', data.content)
    form.append('location', 'HN')
    form.append('imageUrl', imagePicker)

    const result = await createPost(form)
    console.log('result1111', result)
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={{ uri: 'https://i.ytimg.com/vi/49ttxlWY6VA/maxresdefault.jpg' }}
            // source={{ uri: getImageUrl(user && user.avatar_url) }}
            style={{ height: 60, width: 60, borderRadius: 30, marginRight: 10 }} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              {/* {user && user.user_name} */}Cee
            </Text>
          </View>
          <TouchableOpacity onPress={onPost}>
            <Text style={{ color: 'red', fontSize: 20 }}>post</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, flex: 1, textAlignVertical: 'top', fontSize: 18 }}
        onChangeText={text => onChangeText(text)}
        value={data.content}
        placeholder={`What's on your mind?`}
        multiline={true}
      />
      {imagePicker && imagePicker.uri && <Image
        source={{ uri: imagePicker.uri }}
        resizeMode='cover'
        style={{ height: 100, width: '100%' }} />}
      <View style={{ justifyContent: 'center', alignItems: 'center', height: 50 }}>
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          onPress={onUpload}
        >
          <Text>Add your post</Text>
          <MaterialIcons name="photo-camera" size={20} color={Colors.facebook} style={{ marginLeft: 10 }} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

