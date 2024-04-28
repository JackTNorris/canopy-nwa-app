//TODO: fix component definition throwing an eslint error
//TODO: refactor translations
import * as React from 'react';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {HomeScreen} from './HomeScreen';
import {Profile} from './ProfileScreen';
import {VoiceControlScreen} from './VoiceControlScreen';
import {Text, View} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import { translations } from '@src/consts';

const Tab = createBottomTabNavigator();

const RefugeeScreens = () => {
  const [isSpanish, setIsSpanish] = React.useState(false);
  return (
    <>
      <View style={{    backgroundColor: '#f0f0ff',}}>
        <ToggleSwitch
          isOn={isSpanish}
          onColor="green"
          label='Spanish?'
          offColor="red"
          labelStyle={{color: 'black', fontWeight: '900'}}
          size="small"
          onToggle={isOn => setIsSpanish(!isSpanish)}
        />{' '}
      </View>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'orange',
          tabBarHideOnKeyboard: true,
        }}
        detachInactiveScreens={false}>
        <Tab.Screen
          name="Home"
          children={() => <HomeScreen isSpanish={isSpanish} />}
          options={{
            tabBarLabel: isSpanish ? translations.Home : 'Home',
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: isSpanish ? translations.Profile : 'Profile',
            // eslint-disable-next-line react/no-unstable-nested-components
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
            tabBarLabel: isSpanish
              ? translations['Voice Control']
              : 'Voice Control',
            // eslint-disable-next-line react/no-unstable-nested-components
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
    </>
  );
};

export default RefugeeScreens;
