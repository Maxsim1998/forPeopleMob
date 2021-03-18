import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ApolloProvider } from '@apollo/client';
import { createStackNavigator } from '@react-navigation/stack';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
// client
import client from './client';
// navigation
import { Navigator } from './src/navigation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ActionSheetProvider>
        <>
          <Navigator />
          <StatusBar style="auto" />
        </>
      </ActionSheetProvider>
    </ApolloProvider>
  );
}
