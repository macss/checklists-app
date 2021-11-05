import { signInAnonymously } from '@firebase/auth'
import React, { useContext, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Card, Surface, TextInput } from 'react-native-paper'
import { auth } from '../../lib/config/firebaseConfig'
import UserContext from '../../lib/contexts/UserContext'
import { AppDimensions, defaultStyles } from '../../lib/theme'
import { AppStackScreenProps } from '../../lib/utils'
import Strings from '../../lib/utils/strings'

const UserLicense = ({ route: { params: { user } }  }: AppStackScreenProps<'AuthFlowUserLicense'>) => {
  const { setUser } = useContext(UserContext)
  
  const [licenseNumber, setLicenseNumber] = useState('')
  const [licenseExpiration, setLicenseExpiration] = useState('')
  
  const [errors, setErrors] = useState({
    licenseNumber: '',
    licenseExpiration: ''
  })

  const handlePress = () => {
    setErrors({licenseExpiration: '', licenseNumber: ''})

    if (licenseExpiration === '') {
      setErrors(v => ({...v, licenseExpiration: Strings.pleaseEnterYourLicenseExpiration}))
    }

    if (licenseNumber === '') {
      setErrors(v => ({...v, licenseExpiration: Strings.licenseNumber}))
    }

    if (licenseNumber !== '' && licenseExpiration !== '') {
      signInAnonymously(auth)
        .then(() => {          
          setUser({
            ...user,
            license_number: Number(licenseNumber),
            license_expiration: Number(licenseExpiration)
          })
        })
    }

  }

  return (
    <Surface style={styles.container}>
      <Card elevation={3} style={styles.card}>
        <Card.Title title={Strings.license} titleStyle={styles.title}/>
        <Card.Content>
          <TextInput 
            style={styles.input}
            label={errors.licenseNumber === '' ? Strings.licenseNumber : errors.licenseNumber}
            error={errors.licenseNumber !== ''}
            value={licenseNumber}
            onChangeText={setLicenseNumber}
            mode="outlined"
          />
          <TextInput 
            style={styles.input}
            label={errors.licenseExpiration === '' ? Strings.licenseExpiration : errors.licenseExpiration}
            error={errors.licenseExpiration !== ''}
            value={licenseExpiration}
            onChangeText={setLicenseExpiration}
            mode="outlined"
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
