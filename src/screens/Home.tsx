import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { AppDrawerScreenProps } from '../lib/utils'

const Home = ({ navigation }: AppDrawerScreenProps<'Home'>) => {
  return (
    <View>
      <Button onPress={() => navigation.navigate('Login')}>
        Login
      </Button>
      <Text>Olá</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
