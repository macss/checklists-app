import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Card, Surface, TextInput } from 'react-native-paper'
import { AppDimensions, defaultStyles } from '../../lib/theme'
import { AppStackScreenProps } from '../../lib/utils'
import Strings from '../../lib/utils/strings'

const UserRegister = ({ navigation, route: { params: { user } }   }: AppStackScreenProps<'AuthFlowUserRegister'>) => {
  const [register, setRegister] = useState('0000')
  const [error, setError] = useState('')

  const handlePress = () => {
    setError('')
    if (register === '0000') {
      setError(Strings.pleaseEnterYourRegister)
    } else {
      navigation.navigate('AuthFlowUserLicense', {
        user: {
          ...user,
          register: Number(register)
        }
      })
    }
  }

  return (
    <Surface style={styles.container}>
      <Card elevation={3} style={styles.card}>
        <Card.Title title={Strings.register} titleStyle={styles.title}/>
        <Card.Content>
          <TextInput 
            style={styles.input}
            label={error === '' ? Strings.enterYourRegister : error}
            value={register}
            onChangeText={setRegister}
            mode="outlined"
            keyboardType="numeric"
            left={<TextInput.Affix text="200" />}
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

export default UserRegister

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
    marginBottom: 8,
    fontSize: 24,
    lineHeight: 48
  },
  input: {
    marginBottom: 8
  },
  button: {
    flexDirection: 'row-reverse'
  }
})
