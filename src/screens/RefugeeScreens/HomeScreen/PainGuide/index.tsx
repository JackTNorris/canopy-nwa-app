//TODO: refactor route names
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {WhereItHurts} from './WhereItHurts';
import {PainQuantifier} from './PainQuantifier';

export type PainGuideRouteParams = {
  WhereItHurts: undefined;
  PainQuantifier: {part: string; src: string};
};
const Stack = createStackNavigator<PainGuideRouteParams>();

export const PainGuide = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="WhereItHurts" component={WhereItHurts} />
      <Stack.Screen name="PainQuantifier" component={PainQuantifier} />
    </Stack.Navigator>
  );
};
