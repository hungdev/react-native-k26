import React, { useEffect } from 'react'
import { Button, View, Text, BackHandler, Alert } from 'react-native'
import NavigationService from './NavigationService'
import TopLevelNavigator from './Router'

export default function AppContainer() {

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    }
  }, [])

  const handleBackButton = () => {
    // Alert.alert('Bạn có chắc thoát ứng dụng không?')
    return true;
  }

  return (
    <TopLevelNavigator
      refs={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef)
      }}
    />
  )
}
