import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabHome() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Settings" component={LoginScreen} /> */}
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}

function ContainerStack() {
  // const store = useSelector(store => store);
  const isoke = true
  // console.log('store', store.auth.user);
  return (
    <Stack.Navigator>
      {!isoke ? (
        <>
          <Stack.Screen name="SignIn" component={LoginScreen} />
          {/* <Stack.Screen name="SignUp" component={SignUpScreen} /> */}
          {/* <Stack.Screen name="ResetPassword" component={ResetPassword} /> */}
        </>
      ) :
        (
          <>
            <Stack.Screen
              name="Home"
              component={TabHome}
            // options={{ headerShown: false }}
            />
            {/* <Stack.Screen name="Notifications" component={ProfileScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Setting" component={SettingScreen} /> */}
          </>
        )
      }
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <ContainerStack />
      {/* <MyTabs /> */}
    </NavigationContainer>
  );
}

export default App;
