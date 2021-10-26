import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Surface } from 'react-native-paper'
import { defaultStyles } from '../lib/theme'
import { AppDrawerScreenProps } from '../lib/utils'

/**
 * Screen to display an already filled checklist
 */
const ViewChecklist = (props: AppDrawerScreenProps<'ViewChecklist'>) => {
  
  return (
    <View style={defaultStyles.container}>
      <Surface>
        <Text></Text>
      </Surface>
    </View>
  )
}

export default ViewChecklist

const styles = StyleSheet.create({})
