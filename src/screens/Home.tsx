import React from 'react'
import { View } from 'react-native'
import { Surface, Text } from 'react-native-paper'
import { defaultStyles } from '../lib/theme'
import { AppDrawerScreenProps } from '../lib/utils'

/**
 * The home page
 */
const Home = ({ navigation }: AppDrawerScreenProps<'Home'>) => {
  return (
    <View style={defaultStyles.container}>
      <Surface style={defaultStyles.surface}>
        <Text>Olá</Text>
      </Surface>
    </View>
  )
}

export default Home