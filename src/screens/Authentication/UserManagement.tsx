import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Card, Surface } from 'react-native-paper'
import { SelectDropDown } from '../../lib/components'
import { AppDimensions, defaultStyles } from '../../lib/theme'
import { AppStackScreenProps, managements } from '../../lib/utils'
import Strings from '../../lib/utils/strings'

const UserManagement = ({ navigation, route: { params: { user } } }: AppStackScreenProps<'AuthFlowUserManagement'>) => {
  const [management, setManagement] = useState<typeof managements[number]>()

  return (
    <Surface style={styles.container}>
      <Card elevation={3} style={styles.card}>
        <Card.Title title={Strings.management} titleStyle={styles.title}/>
        <Card.Content>
          <SelectDropDown 
            items={managements}
            labelProperty='name'
            onItemPress={(key) => setManagement(managements[key])}
            anchorLabel={Strings.managementDropdownLabel}
            containerStyle={styles.input}
            mode="outlined"
          />
          <Button
            mode="contained"
            onPress={() => {
              navigation.navigate('AuthFlowUserRegister', {
                user: {
                  ...user,
                  management: management?.initials ?? Strings.undefined
                }
              })
            }}
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

export default UserManagement

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
