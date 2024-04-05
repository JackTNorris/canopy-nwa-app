//TODO: maybe refactor user info to a redux store (unlikely tho)
import * as React from 'react';
import 'react-native-gesture-handler';
import {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Header} from './components/Header';
import RefugeeScreens from './screens/RefugeeScreens';
import CaseManagerScreen from './screens/CaseManagerScreen';
import {USER_INFO_KEY, UserInfo} from './consts';
import storage from './loaders/storage';
import {ActivityIndicator, View} from 'react-native';
import globalStyles from './global.styles';

export const App = () => {
  const [userInfo, setUserInfo] = React.useState<UserInfo | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  useEffect(() => {
    const fetchUserInfo = async () => {
      // load
      try {
        const data = (await storage.load({
          key: USER_INFO_KEY,
          autoSync: true,
          syncInBackground: true,
        })) as UserInfo;
        setUserInfo(data);
      } catch (error) {
        console.log('Error loading user info', error);
      }
      setIsLoading(false);
    };
    fetchUserInfo();
  }, []);
  console.log("USER INFO IS: ")
  console.log(userInfo);
  return (
    <NavigationContainer>
      <Header />
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color={globalStyles.yellow.color} />
        </View>
      ) : userInfo?.refugeeName ? (
        <RefugeeScreens />
      ) : (
        <CaseManagerScreen onCompleteSignup={setUserInfo} />
      )}
    </NavigationContainer>
  );
};

export default App;
