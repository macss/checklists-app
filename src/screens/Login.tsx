import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-paper'
import { AppStackScreenProps } from '../lib/utils'


const Login = ({ navigation }: AppStackScreenProps<'Login'>) => {
  return (
    <View>
      <Button onPress={() => navigation.navigate('Drawer', {
        screen: 'Home'
      })}>
        Home
      </Button>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})
