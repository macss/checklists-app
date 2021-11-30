import React, { useEffect } from 'react'
import { View } from 'react-native'
import { Surface, Text } from 'react-native-paper'
import queryDataAt from '../lib/services/queryDataAt'
import { defaultStyles } from '../lib/theme'
import { AppDrawerScreenProps } from '../lib/utils'

/**
 * The home page
 */
const Home = ({ navigation }: AppDrawerScreenProps<'Home'>) => {
  useEffect(() => {
    queryDataAt('checklists', {limit: 10})
  }, [])

  return (
    <View style={defaultStyles.container}>
      <Surface style={defaultStyles.surface}>
        <Text>Olá</Text>
      </Surface>
    </View>
  )
}

export default Home