import React, { useEffect } from 'react';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { StatusBar } from 'expo-status-bar';

import store from './store/store';
import client from './services/apollo';
import { setupNotifications } from './services/notifications';
import RootNavigator from './navigation/RootNavigator';

export default function App() {
  useEffect(() => {
    setupNotifications();
  }, []);

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <NativeBaseProvider>
          <RootNavigator />
          <StatusBar barStyle="light-content" />
        </NativeBaseProvider>
      </ApolloProvider>
    </Provider>
  );
}