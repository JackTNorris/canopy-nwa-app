//TODO: refactor types
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeMenuScreen} from './HomeMenuScreen';
import {MedicalResourcesScreen} from './MedicalResourcesScreen';
import {LearningLibraryScreen} from './LearningLibrary';
import InboxScreen from './Inbox';
import {PainGuide} from './PainGuide';
export type HomeScreenRouteParams = {
  HomeMenuScreen: undefined;
  PainGuideScreen: undefined;
  MedicalResourcesScreen: undefined;
  LearningLibraryScreen: undefined;
  InboxScreen: undefined;
};

const Stack = createStackNavigator<HomeScreenRouteParams>();

export type HomeScreenProps = {
  isSpanish: boolean;
}

export const HomeScreen = ({isSpanish}: HomeScreenProps) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeMenuScreen" children={() => <HomeMenuScreen isSpanish={isSpanish} />} />
      <Stack.Screen name="PainGuideScreen" component={PainGuide} />
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
