import * as React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useEffect} from 'react';
import storage from '@src/loaders/storage';
import {USER_INFO_KEY, USER_PROFILE_PIC_KEY, UserInfo} from '@src/consts';
import globalStyles from '@src/global.styles';
import { launchImageLibrary} from 'react-native-image-picker';

const styles = StyleSheet.create({
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: '#f0f0ff',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  communityClinic: {
    height: 100,
    width: 100,
    resizeMode: 'center',
  },
});

export const ProfileScreen = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState<UserInfo | null>(null);
  const [profilePic, setProfilePic] = React.useState<string | null>(null);

  const updateProfilePicture = async (uri: string) => {
    setIsLoading(true);
    await storage.save({
      key: USER_PROFILE_PIC_KEY, // Note: Do not use underscore("_") in key!
      data: {
        pp: uri,
      },
      expires: null,
    });
    setIsLoading(false);
    setProfilePic(uri);
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      // load
      setIsLoading(true);
      try {
        const data = (await storage.load({
          key: USER_INFO_KEY,
          autoSync: true,
          syncInBackground: true,
        })) as UserInfo;
        setUserInfo(data);
        const pp = await storage.load({
          key: USER_PROFILE_PIC_KEY,
        });
        setProfilePic(pp.pp);
      } catch (error) {
        console.log('Error loading user info', error);
      }
      setIsLoading(false);
    };
    fetchUserInfo();
  }, []);

  return !isLoading && userInfo ? (
    <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
      <Text style={{fontSize: 25, padding: 20, fontWeight: 'bold'}}>
        Hi {userInfo.refugeeName.split(' ')[0]}!
      </Text>
      <TouchableOpacity
        style={styles.profilePic}
        onPress={() =>
          launchImageLibrary(
            {selectionLimit: 1, mediaType: 'photo'},
            result => {
              console.log(result);
              try {
                result.assets?.forEach(asset => {
                  updateProfilePicture(asset.uri as string);
                });
              } catch (error) {
                console.log('Error updating profile picture', error);
              }
            },
          )
        }>
        <Text>
          {profilePic ? (
            <Image style={styles.profilePic} source={{uri: profilePic}} />
          ) : (
            <MaterialCommunityIcons name="account" color={'black'} size={50} />
          )}{' '}
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flex: 5,
          flexDirection: 'column',
          width: Dimensions.get('screen').width,
        }}>
        {Object.keys(userInfo).map((key: string) => {
          return (
            <Text key={key}>
              {key.toUpperCase()}: {userInfo[key] as string}
            </Text>
          );
        })}
      </View>
    </View>
  ) : (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color={globalStyles.yellow.color} />
    </View>
  );
};
