//TODO: refactor types & names
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProfileScreen} from './screens/ProfileScreen';
import {VaccineScreen} from './screens/VaccineScreen';
export type HomeScreenRouteParams = {
  ProfileScreen: undefined;
  VaccineScreen: undefined;
};

const Stack = createStackNavigator<HomeScreenRouteParams>();

export const Profile = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="VaccineScreen" component={VaccineScreen} />
    </Stack.Navigator>
  );
};
