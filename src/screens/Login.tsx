import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Surface, TextInput, Card } from 'react-native-paper'
import { AppStackScreenProps } from '../lib/utils'

interface FormInputs {
  email: string
  password: string
}

const Login = ({ navigation }: AppStackScreenProps<'Login'>) => {
  const [inputs, setInputs] = useState<FormInputs>({
    email: '',
    password: ''
  })

  const handleInputChange = (input: keyof FormInputs) => (str: string) => {
    setInputs(current => ({
      ...current,
      [input]: str
    }))
  }

  return (
    <Surface style={styles.container}>
      <Card elevation={3}>
        <Card.Title title="Entrar" titleStyle={styles.title}/>
        <Card.Content>
          <TextInput 
            style={styles.input}
            label="E-mail"
            value={inputs.email}
            onChangeText={handleInputChange('email')}
            mode="outlined"
          />
          <TextInput 
            style={styles.input}
            label="Senha"
            value={inputs.password}
            onChangeText={handleInputChange('password')}
            mode="outlined"
          />
          <Button
            mode="contained"
            onPress={() => {
              navigation.navigate('Drawer', { screen: 'Home' })
            }}
          >
            Login
          </Button>
        </Card.Content>
      </Card>      
    </Surface>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexGrow: 1,
    padding: 16,
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    marginBottom: 8,
    fontSize: 36,
    lineHeight: 48
  },
  input: {
    marginBottom: 8
  }
})
