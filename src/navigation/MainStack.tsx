import { NavigatorScreenParams } from '@react-navigation/core'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { RootDrawerParamList } from '.'
import { Login, SignUp } from '../screens'
import MainDrawer from './MainDrawer'

/**
 * Defines all routes of the stack navigator and it's parameters, if any
 */
export type RootStackParamList = {
  Drawer: NavigatorScreenParams<RootDrawerParamList>
  Login: undefined
  SignUp: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

/**
 * The main stack navigator, here you set the screens the stack needs to navigate to.
 * 
 * If you add new screens you have to add it to the RootStackParamList
 * 
 * @returns Stack.Navigator
 */
const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Drawer" component={MainDrawer} options={{ title: 'Home' }} />
      <Stack.Screen name="SignUp" component={SignUp}/>
    </Stack.Navigator>
  )
}

export default MainStack
