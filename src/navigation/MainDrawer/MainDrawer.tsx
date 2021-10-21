import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { Checklists, Home, NewChecklist, ViewChecklist } from '../../screens'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AppColors } from '../../lib/theme'
import MainDrawerContent from './MainDrawerContent'

/**
 * Defines all routes of the drawer navigation and it's parameters if any
 */
export type RootDrawerParamList = {
  Home: undefined
  Checklists: undefined
  NewChecklist: undefined
  ViewChecklist: {
    id: string
  }
}

const Drawer = createDrawerNavigator<RootDrawerParamList>()

/**
 * The main drawer navigator, here you set the screens the drawer needs to navigate to.
 * 
 * If you add new screens you have to add it to the RootDrawerParamList
 * 
 * @returns Drawer.Navigator
 */
const MainDrawer = () => {
  return (
    <Drawer.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: AppColors.primary }
      }}
      drawerContent={props => <MainDrawerContent {...props}/>}
    >
      <Drawer.Screen 
        name="Home"
        component={Home}
        options={{
          drawerIcon: (props) => <MaterialCommunityIcons name="home" {...props} />,
          title: 'Home'
        }}
      />
      <Drawer.Screen 
        name="Checklists" 
        component={Checklists}
        options={{
          title: 'Meus Checklists',
          drawerIcon: (props) => <MaterialCommunityIcons name="playlist-check" {...props} />
        }}
      />
      <Drawer.Screen 
        name="NewChecklist" 
        component={NewChecklist}
        options={{
          title: 'Novo Checklist',
          drawerIcon: (props) => <MaterialCommunityIcons name="playlist-plus" {...props} />
        }}
      />
      <Drawer.Screen 
        name="ViewChecklist" 
        component={ViewChecklist}
        options={{
          drawerItemStyle: {
            display: 'none'
          }
        }}
      />
    </Drawer.Navigator>
  )
}

export default MainDrawer