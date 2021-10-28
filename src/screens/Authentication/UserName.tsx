import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Card, Surface, TextInput } from 'react-native-paper'
import { AppDimensions, defaultStyles } from '../../lib/theme'
import { AppStackScreenProps } from '../../lib/utils'

const UserName = ({ navigation }: AppStackScreenProps<'AuthFlowUserName'>) => {
  const [name, setName] = useState('')

  return (
    <Surface style={styles.container}>
      <Card elevation={3} style={styles.card}>
        <Card.Title title="Cadastro inicial" titleStyle={styles.title}/>
        <Card.Content>
          <TextInput 
            style={styles.input}
            label="Digite seu nome"
            value={name}
            onChangeText={setName}
            mode="outlined"
          />
          <Button
            mode="contained"
            onPress={() => {
              navigation.navigate('AuthFlowUserManagement', {
                user: {
                  name
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
    fontSize: 36,
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
