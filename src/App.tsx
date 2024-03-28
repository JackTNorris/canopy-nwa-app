import * as React from 'react';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './screens/HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {ProfileScreen} from './screens/ProfileScreen';
import {VoiceControlScreen} from './screens/VoiceControlScreen';
import {Header} from './components/Header';

const Tab = createBottomTabNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Header />
      {/*check for async storage status that case manager inputted*/}
      <Tab.Navigator
        screenOptions={{headerShown: false, tabBarActiveTintColor: 'orange'}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Voice Control"
          component={VoiceControlScreen}
          options={{
            tabBarLabel: 'Voice Control',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="microphone"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
