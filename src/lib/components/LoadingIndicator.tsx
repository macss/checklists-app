import React from 'react'
import { ActivityIndicator, Surface, Text } from 'react-native-paper'

const LoadingIndicator = () => {
  return (
    <Surface style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <ActivityIndicator size="large" />
      <Text style={{marginTop: 16}}>Carregando...</Text>
    </Surface>
  )
}

export default LoadingIndicator
