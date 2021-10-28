import { NavigatorScreenParams } from '@react-navigation/core'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useContext } from 'react'
import { ActivityIndicator, Surface, Text } from 'react-native-paper'
import { RootDrawerParamList } from '.'
import { LoadingIndicator } from '../lib/components'
import UserContext from '../lib/contexts/UserContext'
import { User } from '../lib/model'
import { UserLicense, UserManagement, UserName, UserRegister } from '../screens/Authentication'
import MainDrawer from './MainDrawer'

/**
 * Defines all routes of the stack navigator and it's parameters, if any
 */
export type RootStackParamList = {
  Drawer: NavigatorScreenParams<RootDrawerParamList>
  AuthFlowLoading: undefined
  AuthFlowUserName: undefined
  AuthFlowUserManagement: {
    user: Pick<User, 'name'>
  }
  AuthFlowUserRegister: {
    user: Pick<User, 'name' | 'management'>
  }
  AuthFlowUserLicense: {
    user: Omit<User, 'license_number' | 'license_expiration'>
  }
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
  /**
   * Checks if the has done the auth flow and switches between auth flows
   */
  const { user, loading } = useContext(UserContext)

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="AuthFlowUserName"
    >
      {
        loading ?
          <Stack.Screen name="AuthFlowLoading" component={LoadingIndicator} options={{ title: 'Carregando...'}} />
        :
        !Boolean(user) ?
          <Stack.Group>
            <Stack.Screen name="AuthFlowUserName" component={UserName} options={{ title: 'Cadastro inicial - Nome' }}/>
            <Stack.Screen name="AuthFlowUserManagement" component={UserManagement} options={{ title: 'Cadastro inicial - Gerência' }} />
            <Stack.Screen name="AuthFlowUserRegister" component={UserRegister} options={{ title: 'Cadastro inicial - Registro' }} />
            <Stack.Screen name="AuthFlowUserLicense" component={UserLicense} options={{ title: 'Cadastro inicial - Dados da Habilitação' }} />
          </Stack.Group> 
        :
          <Stack.Screen name="Drawer" component={MainDrawer} options={{ title: 'Home' }} />
      }
    </Stack.Navigator>
  )
}

export default MainStack
