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
import {launchImageLibrary} from 'react-native-image-picker';
import {VaccineModal} from '@src/screens/RefugeeScreens/ProfileScreen/components/VaccineModal';
import {useNavigation} from '@react-navigation/native';

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
  attributeTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    borderBottomWidth: 1,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: 'orange',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export const ProfileScreen = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState<UserInfo | null>(null);
  const [profilePic, setProfilePic] = React.useState<string | null>(null);
  const [modalVisible, setModalVisible] = React.useState(false);
  const navigation = useNavigation();

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
      <VaccineModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <Text style={{fontSize: 25, padding: 10, fontWeight: 'bold'}}>
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
          padding: 10,
        }}>
        <View style={{gap: 20}}>
          <Text style={styles.attributeTitle}>
            Blood Type:{' '}
            <Text
              style={{
                fontWeight: 'normal',
              }}>{`\n${userInfo.bloodType}`}</Text>{' '}
          </Text>
          <Text style={styles.attributeTitle}>
            Weight:{' '}
            <Text style={{fontWeight: 'normal'}}>{`\n${userInfo.weight}`}</Text>{' '}
          </Text>
          <Text style={styles.attributeTitle}>
            Height:{' '}
            <Text
              style={{
                fontWeight: 'normal',
              }}>{`\n${userInfo.heightFeet}'${userInfo.heightInches}"`}</Text>{' '}
          </Text>
          <Text style={styles.attributeTitle}>
            Allergies:{' '}
            <Text style={{fontWeight: 'normal'}}>{`\n${
              userInfo.allergy.join(', ') || 'None'
            }`}</Text>
          </Text>
          <TouchableOpacity
            style={[styles.button, styles.buttonOpen]}
            onPress={() => navigation.navigate('VaccineScreen' as never)}>
            <Text style={styles.textStyle}>My Vaccines</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ) : (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color={globalStyles.yellow.color} />
    </View>
  );
};
