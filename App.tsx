import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './src/navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import { darkTheme, defaultTheme } from './src/lib/theme';
import ThemeContext from './src/lib/contexts/ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppStorageKeys } from './src/lib/utils';
import { Provider as StoreProvider } from 'react-redux'
import store from './src/lib/store';

/**
 * The main component of the application, it is used to setup context providers such as store, theme and theme manipulation and navigation.
 */
export default function App() {
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
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <ThemeContext.Provider value={themePreferences}>
          <NavigationContainer theme={theme}>
            <StatusBar />
            <MainStack />
          </NavigationContainer>
        </ThemeContext.Provider>
      </PaperProvider>
    </StoreProvider>
  );
}