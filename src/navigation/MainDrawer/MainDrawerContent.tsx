import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Headline, Subheading, Divider, Surface, Switch } from 'react-native-paper'
import { AppColors } from '../../lib/theme'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ThemeContext from '../../lib/contexts/ThemeContext'
import UserContext from '../../lib/contexts/UserContext'
import Strings from '../../lib/utils/strings'

/**
 * Custom drawer content, added title, subtitle and user display.
 * 
 * Added button to toggle theme and to exit app
 */
const MainDrawerContent = (props: DrawerContentComponentProps) => {
  const { navigation } = props
  const { user, setUser } = useContext(UserContext)
  const { isThemeDark, toggleTheme } = useContext(ThemeContext)

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.contentScrollView}>
      <Surface style={{flexGrow: 1}}>
        <View style={styles.headerContainer}>
          <Headline style={styles.headerFont}>
            { Strings.vehiclesChecklist }
          </Headline>
          <Subheading style={styles.headerFont}>
            Aperam BioEnergia
          </Subheading>
          <Text style={styles.headerFont}>
            { user?.name ?? Strings.anonymousUser }
          </Text>
        </View>
        <DrawerItemList {...props} />
        <Divider />
        <View style={styles.preferencesContainer}>
          <Text style={{
            color: !isThemeDark ? 'rgba(28, 28, 30, 0.68)' : 'rgba(229, 229, 231, 0.68)',
            marginLeft: 8
          }}>
            Modo Escuro
          </Text>
          <Switch value={isThemeDark} onValueChange={toggleTheme} />
        </View>
        <Divider />
        <DrawerItem 
          label="Sair"
          onPress={() => setUser(undefined) /*() => navigation.navigate('Login')*/}
          icon={props => <MaterialCommunityIcons  name="exit-to-app" {...props} />}
        />
      </Surface>
    </DrawerContentScrollView>
  )
}

export default MainDrawerContent

const styles = StyleSheet.create({
  contentScrollView: {
    paddingTop: 0,
    flexGrow: 1
  },
  headerContainer: {
    paddingHorizontal: 16,
    backgroundColor: AppColors.primary,
    paddingVertical: 24
  },
  headerFont: {
    color: '#fff'
  },
  preferencesContainer: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
