//TODO: refactor types
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeMenuScreen} from './HomeScreen/HomeMenuScreen';
import {PainGuideScreen} from './HomeScreen/PainGuideScreen';
import {MedicalNeedScreen} from './HomeScreen/MedicalNeedScreen';
import {ResourcesScreen} from './HomeScreen/ResourcesScreen';
import {LearningLibraryScreen} from './HomeScreen/LearningLibraryScreen';

export type HomeScreenRouteParams = {
  HomeMenuScreen: undefined;
  PainGuideScreen: undefined;
  MedicalNeedScreen: undefined;
  ResourcesScreen: undefined;
  LearningLibraryScreen: undefined;
};

const Stack = createStackNavigator<HomeScreenRouteParams>();

export const HomeScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeMenuScreen" component={HomeMenuScreen} />
      <Stack.Screen name="PainGuideScreen" component={PainGuideScreen} />
      <Stack.Screen name="MedicalNeedScreen" component={MedicalNeedScreen} />
      <Stack.Screen name="ResourcesScreen" component={ResourcesScreen} />
      <Stack.Screen
        name="LearningLibraryScreen"
        component={LearningLibraryScreen}
      />
    </Stack.Navigator>
  );
};
