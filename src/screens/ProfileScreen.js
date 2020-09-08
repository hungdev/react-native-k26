import React from 'react';
import { Button, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import CardView from '../components/CardView';
// import { Metrics, Colors } from '../themes'
// import { logout } from '../../actions/authAction'
// import imagePicker from '../../components/ImagePicker'
// import ImagePicker from 'react-native-image-picker';
import { connect, useSelector, useDispatch } from 'react-redux';
import { removeAuth } from '../actions/authAction'

export default function ProfileScreen() {
  const dispatch = useDispatch()
  const onLogout = () => {
    dispatch(removeAuth())
  }
  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', }}>
        <View style={{ marginTop: '5%' }}>
          <Image
            source={{
              uri:
                'https://randomuser.me/api/portraits/women/34.jpg'
            }}
            style={{ height: 150, width: 150, borderWidth: 1, borderRadius: 80 }}
            resizeMode='cover'
          />
          <View style={{ position: 'absolute', bottom: 8, right: 0 }}>
            <TouchableOpacity
              onPress={() => { }}
              style={{
                borderWidth: 1,
                backgroundColor: '#0077FF', borderRadius: 23, height: 45, width: 45,
                justifyContent: 'center', alignItems: 'center', borderColor: '#fff'
              }}>
              <MaterialIcons name="add-a-photo" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        <CardView style={{ width: '90%', paddingHorizontal: 20, marginTop: 40 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
            <FontAwesome name="envelope-o" style={{ marginRight: 15 }} size={16} color="#bbb" />
            <Text>Become a member</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
            <MaterialIcons name="help-outline" style={{ marginRight: 15 }} size={16} color="#bbb" />
            <Text>Help</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
            <AntDesign name="customerservice" style={{ marginRight: 15 }} size={16} color="#bbb" />
            <Text>Terms of service</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
            <MaterialIcons name="security" style={{ marginRight: 15 }} size={16} color="#bbb" />
            <Text>Private policy</Text>
          </View>
        </CardView>

        <CardView style={{ width: '90%', paddingHorizontal: 20, marginTop: 30 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
            <FontAwesome name="gears" style={{ marginRight: 15 }} size={16} color="#bbb" />
            <Text>Settings</Text>
          </View>
          <TouchableOpacity
            onPress={() => onLogout()}
            style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
            <FontAwesome5 name="sign-out-alt" style={{ marginRight: 15 }} size={16} color="#bbb" />
            <Text>Logout</Text>
          </TouchableOpacity>
        </CardView>
      </View >
    </ScrollView>
  )
}
