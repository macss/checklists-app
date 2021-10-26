import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  Colors,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import merge from 'deepmerge';

import { StyleSheet } from 'react-native';
import { AppDimensions } from '.';

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme)
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme)

/**
 * The colors used on the app
 */
export const AppColors = {
  primary: Colors.blue500,
  secondary: Colors.green500
}

/**
 * Light theme of the app
 */
export const defaultTheme = {
  ...CombinedDefaultTheme,
  colors: {
    ...CombinedDefaultTheme.colors,
    primary: AppColors.primary,
    accent: AppColors.secondary
  }
}

/**
 * Dark theme of the app
 */
export const darkTheme = {
  ...CombinedDarkTheme,
  mode: 'exact',
  colors: {
    ...CombinedDarkTheme.colors,
    primary: AppColors.primary,
    accent: AppColors.secondary
  }
} as typeof PaperDarkTheme & typeof NavigationDarkTheme

/**
 * Default styles
 */
export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex'
  },
  surface: {
    flex: 1,
    padding: AppDimensions.containerPadding
  }
})