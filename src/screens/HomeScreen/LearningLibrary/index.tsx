//TODO: refactor types
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LearningLibraryMenuScreen} from './LearningLibraryMenuScreen';
import {SeverityGuideScreen} from './SeverityGuideScreen';
import {ClinicTypeScreen} from './ClinicTypeScreen';
import {InsuranceScreen} from './InsuranceScreen';

export type LearningLibraryRouteParams = {
  LearningLibraryMenuScreen: undefined;
  InsuranceScreen: undefined;
  SeverityGuideScreen: undefined;
  ClinicTypeScreen: undefined;
};

const Stack = createStackNavigator<LearningLibraryRouteParams>();

export const LearningLibraryScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="LearningLibraryMenuScreen"
        component={LearningLibraryMenuScreen}
      />
      <Stack.Screen name="InsuranceScreen" component={InsuranceScreen} />
      <Stack.Screen
        name="SeverityGuideScreen"
        component={SeverityGuideScreen}
      />
      <Stack.Screen name="ClinicTypeScreen" component={ClinicTypeScreen} />
    </Stack.Navigator>
  );
};
