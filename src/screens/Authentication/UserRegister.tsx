import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Card, Surface, TextInput } from 'react-native-paper'
import { AppDimensions, defaultStyles } from '../../lib/theme'
import { AppStackScreenProps } from '../../lib/utils'

const UserRegister = ({ navigation, route: { params: { user } }   }: AppStackScreenProps<'AuthFlowUserRegister'>) => {
  const [register, setRegister] = useState('0000')

  return (
    <Surface style={styles.container}>
      <Card elevation={3} style={styles.card}>
        <Card.Title title="Registro" titleStyle={styles.title}/>
        <Card.Content>
          <TextInput 
            style={styles.input}
            label="Digite seu registro"
            value={register}
            onChangeText={setRegister}
            mode="outlined"
            keyboardType="numeric"
            left={<TextInput.Affix text="200" />}
          />
          <Button
            mode="contained"
            onPress={() => {
              navigation.navigate('AuthFlowUserLicense', {
                user: {
                  ...user,
                  register: Number(register)
                }
              })
            }}
            icon="arrow-right"
            contentStyle={styles.button}
          >
            Próxima
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
    fontSize: 36,
    lineHeight: 48
  },
  input: {
    marginBottom: 8
  },
  button: {
    flexDirection: 'row-reverse'
  }
})
