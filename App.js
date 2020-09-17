import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import Login from './src/screens/LoginScreen'
import Home from './src/screens/HomeScreen'
import AppContainer from './src/appNavigation/AppContainer'
import { MenuProvider } from 'react-native-popup-menu';

// setup redux
import allReducers from './src/reducers';
import { REHYDRATE, PURGE, persistCombineReducers, persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage' // or whatever storage you are using
import { PersistGate } from 'redux-persist/es/integration/react';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  //sẽ persist
  // whitelist: [
  //   'accountReducer'
  // ],
  //ko persist
  blacklist: [
    // 'auth'
  ],
};


const persistedReducer = persistReducer(persistConfig, allReducers);

export let store = createStore(persistedReducer);
let persistor = persistStore(store);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MenuProvider>
            <AppContainer />
          </MenuProvider>
        </PersistGate>
      </Provider>
    )
  }
}


