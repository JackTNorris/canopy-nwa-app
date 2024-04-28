//TODO: refactor types
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SeverityGuideSearch} from './SeverityGuideSearch';
import {SeverityGuideSymptomInfo} from './SeverityGuideSymptomInfo';

export type SeverityGuideScreenRouteParams = {
  SeverityGuideSearch: undefined;
  SymptomInfo: {symptom: string; asset: string};
};

const Stack = createStackNavigator<SeverityGuideScreenRouteParams>();

export const SeverityGuideScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="SeverityGuideSearch"
        component={SeverityGuideSearch}
      />
      <Stack.Screen name="SymptomInfo" component={SeverityGuideSymptomInfo} />
    </Stack.Navigator>
  );
};
