import * as React from 'react';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './screens/RefugeeScreens/HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {ProfileScreen} from './screens/RefugeeScreens/ProfileScreen';
import {VoiceControlScreen} from './screens/RefugeeScreens/VoiceControlScreen';
import {Header} from './components/Header';
import RefugeeScreens from './screens/RefugeeScreens';
import CaseManagerScreen from './screens/CaseManagerScreen';
const Tab = createBottomTabNavigator();

export const App = () => {
  const [isSetup, setIsSetup] = React.useState(false);
  return (
    <NavigationContainer>
      <Header />
      {isSetup ? <RefugeeScreens /> : <CaseManagerScreen />}
    </NavigationContainer>
  );
};

export default App;
