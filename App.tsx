import React from 'react';
import { StatusBar } from 'react-native';
import { MainStack } from './src/navigation';
import { Provider as StoreProvider } from 'react-redux'
import store from './src/lib/store';
import { StoredUserProvider, ThemePreferenceProvider } from './src/lib/components';

/**
 * The main component of the application, it is used to setup context providers such as store, theme and theme manipulation and navigation.
 */
export default function App() {  

  return (
    <StoreProvider store={store}>
      <StoredUserProvider>
        <ThemePreferenceProvider>
          <StatusBar />
          <MainStack />
        </ThemePreferenceProvider>
      </StoredUserProvider>
    </StoreProvider>
  );
}