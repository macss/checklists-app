import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Card, Paragraph, Surface, TextInput } from 'react-native-paper'
import { AppDimensions, defaultStyles } from '../../lib/theme'
import { AppStackScreenProps } from '../../lib/utils'
import Strings from '../../lib/utils/strings'

const UserName = ({ navigation }: AppStackScreenProps<'AuthFlowUserName'>) => {
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  const handlePress = () => {
    setError('')
    if (name === '') {
      setError(Strings.pleaseEnterYourName)
    } else {
      navigation.navigate('AuthFlowUserManagement', {
        user: {
          name
        }
      })
    }
  }

  return (
    <Surface style={styles.container}>
      <Card elevation={3} style={styles.card}>
        <Card.Title title={Strings.initialRegistration} titleStyle={styles.title}/>
        <Card.Content>
          <TextInput 
            style={styles.input}
            label={error === '' ? Strings.enterYourName : error}
            value={name}
            onChangeText={setName}
            mode="outlined"
            error={error !== ''}
          />
          <Button
            mode="contained"
            onPress={handlePress}
            icon="arrow-right"
            contentStyle={styles.button}
          >
            { Strings.next }
          </Button>
        </Card.Content>
      </Card>      
    </Surface>
  )
}

export default UserName

const styles = StyleSheet.create({
  container: {
    ...defaultStyles.container,
    flexGrow: 1,
    padding: AppDimensions.containerPadding,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    width: 350
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 48,
    marginTop: 8
  },
  input: {
    marginBottom: 16
  },
  button: {
    flexDirection: 'row-reverse'
  }
})
