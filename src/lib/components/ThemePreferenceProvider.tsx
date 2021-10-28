import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native';
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Provider as PaperProvider } from 'react-native-paper';
import ThemeContext from '../contexts/ThemeContext';
import { darkTheme, defaultTheme } from '../theme'
import { AppStorageKeys } from '../utils'

/**
 * Custom provider that handles swaping between light and dark theme and providing it to the theme providers,
 * has the navigation provider for react navigation and theme provider for react native paper.
 */
const ThemePreferenceProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [isThemeDark, setIsThemeDark] = useState(false)

  /**
   * Loads color scheme when app is opened
   */
  useEffect(() => {
    const getColorScheme = async () => {
      try {
        const data = await AsyncStorage.getItem(AppStorageKeys.colorPreference)
        if (data !== null) {
          setIsThemeDark(data === 'dark')
        }
      } catch (e) {}
    }

    getColorScheme()
  }, [])

  /**
   * Changes cached color scheme with the app
   */
  useEffect(() => {    
    const changeColorScheme = async () => {
      try {
        await AsyncStorage.setItem(AppStorageKeys.colorPreference, !isThemeDark ? 'light' : 'dark')
      } catch (e) {}
    }

    changeColorScheme()
  }, [isThemeDark])

  const theme = isThemeDark ? darkTheme : defaultTheme

  const toggleTheme = useCallback(
    async () => {
      return setIsThemeDark(!isThemeDark)
    },
    [isThemeDark],
  )

  const themePreferences = useMemo(
    () => ({
      toggleTheme,
      isThemeDark
    }),
    [toggleTheme, isThemeDark]
  )
  
  return (    
    <PaperProvider theme={theme}>
      <ThemeContext.Provider value={themePreferences}>
        <NavigationContainer theme={theme}>
          { children }
        </NavigationContainer>
      </ThemeContext.Provider>
    </PaperProvider>
  )
}

export default ThemePreferenceProvider
