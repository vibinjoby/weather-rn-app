import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import ViewWeatherDetails from '../screens/ViewWeatherDetails';
import routes from './routes';

export default function RootStackNav() {
  const screenOptions = {
    cardOverlayEnabled: false,
    headerStyle: {
      elevation: 1,
      shadowOpacity: 0,
    },
    headerBackTitleVisible: false,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerTitleAlign: 'center',
  };
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={routes.HOME} component={Home} />
      <Stack.Screen name={routes.VIEW_DETAILS} component={ViewWeatherDetails} />
    </Stack.Navigator>
  );
}
