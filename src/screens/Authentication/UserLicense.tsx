import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Card, Surface, TextInput } from 'react-native-paper'
import UserContext from '../../lib/contexts/UserContext'
import { AppDimensions, defaultStyles } from '../../lib/theme'
import { AppStackScreenProps } from '../../lib/utils'

const UserLicense = ({ route: { params: { user } }  }: AppStackScreenProps<'AuthFlowUserLicense'>) => {
  const { setUser } = useContext(UserContext)

  const [licenseNumber, setLicenseNumber] = useState('')
  const [licenseExpiration, setLicenseExpiration] = useState('')

  return (
    <Surface style={styles.container}>
      <Card elevation={3} style={styles.card}>
        <Card.Title title="Habilitação" titleStyle={styles.title}/>
        <Card.Content>
          <TextInput 
            style={styles.input}
            label="Número da Habilitação"
            value={licenseNumber}
            onChangeText={setLicenseNumber}
            mode="outlined"
          />
          <TextInput 
            style={styles.input}
            label="Data de validade"
            value={licenseExpiration}
            onChangeText={setLicenseExpiration}
            mode="outlined"
          />
          <Button
            mode="contained"
            onPress={() => {
              setUser({
                ...user,
                license_number: Number(licenseNumber),
                license_expiration: Number(licenseExpiration)
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

export default UserLicense

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