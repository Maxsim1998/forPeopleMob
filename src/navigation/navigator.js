import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { INITIAL_ROUTE_NAME, ROUTES } from './';
// stack
import { Stack } from './stack';

export const Navigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      {ROUTES.map((route) => (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </Stack.Navigator>
  </NavigationContainer>
);
