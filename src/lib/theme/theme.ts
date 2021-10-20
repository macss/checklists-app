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

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme)
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme)

export const AppColors = {
  primary: Colors.blue500,
  secondary: Colors.green500
}

export const defaultTheme = {
  ...CombinedDefaultTheme,
  colors: {
    ...CombinedDefaultTheme.colors,
    primary: AppColors.primary,
    accent: AppColors.secondary
  }
}

export const darkTheme = {
  ...CombinedDarkTheme,
  mode: 'exact',
  colors: {
    ...CombinedDarkTheme.colors,
    primary: AppColors.primary,
    accent: AppColors.secondary
  }
} as typeof PaperDarkTheme & typeof NavigationDarkTheme