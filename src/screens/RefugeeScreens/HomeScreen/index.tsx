//TODO: refactor types
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeMenuScreen} from './HomeMenuScreen';
import {PainGuideScreen} from './PainGuideScreen';
import {MedicalResourcesScreen} from './MedicalResourcesScreen';
import {LearningLibraryScreen} from './LearningLibrary';
import InboxScreen from './Inbox';
export type HomeScreenRouteParams = {
  HomeMenuScreen: undefined;
  PainGuideScreen: undefined;
  MedicalResourcesScreen: undefined;
  LearningLibraryScreen: undefined;
  InboxScreen: undefined;
};

const Stack = createStackNavigator<HomeScreenRouteParams>();

export const HomeScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeMenuScreen" component={HomeMenuScreen} />
      <Stack.Screen name="PainGuideScreen" component={PainGuideScreen} />
      <Stack.Screen
        name="MedicalResourcesScreen"
        component={MedicalResourcesScreen}
      />
      <Stack.Screen name="InboxScreen" component={InboxScreen} />
      <Stack.Screen
        name="LearningLibraryScreen"
        component={LearningLibraryScreen}
      />
    </Stack.Navigator>
  );
};
