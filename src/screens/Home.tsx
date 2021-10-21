import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import { AppDrawerScreenProps } from '../lib/utils'

/**
 * The home page
 */
const Home = ({ navigation }: AppDrawerScreenProps<'Home'>) => {
  return (
    <View>
      <Text>Olá</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
