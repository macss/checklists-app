import React from 'react'
import { Text, View } from 'react-native'
import { Surface } from 'react-native-paper'
import { defaultStyles } from '../lib/theme'
import { AppDrawerScreenProps } from '../lib/utils'

/**
 * Displays the list of checklists for the user
 */
const Checklists = (props: AppDrawerScreenProps<'Checklists'>) => {
  return (
    <View style={defaultStyles.container}>
      <Surface style={defaultStyles.surface}>
        <Text>Checklists</Text>
      </Surface>
    </View>
  )
}

export default Checklists