//TODO: get rid of inline styles
import * as React from 'react';
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useEffect} from 'react';
import storage from '@src/loaders/storage';
import {
  USER_INFO_KEY,
  USER_PROFILE_PIC_KEY,
  UserInfo,
  VaccineInfo,
} from '@src/consts';
import {CustomTable} from '@src/components/CustomTable';
import { AddVaccineModal } from '../components/AddVaccineModal';

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
  addVaccineButton: {
    backgroundColor: 'orange',
    margin: 10,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export const VaccineScreen = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [vaccineInfo, setVaccineInfo] = React.useState<VaccineInfo | null>(
    null,
  );
  const [profilePic, setProfilePic] = React.useState<string | null>(null);
  const [modalVisible, setModalVisible] = React.useState(false);

  const updateVaccines = async (uri: string) => {
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
        //setUserInfo(data);
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

  return (
    /*!isLoading && vaccineInfo ?*/
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        height: Dimensions.get('screen').height,
      }}>
      <AddVaccineModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          width: Dimensions.get('screen').width,
          padding: 10,
        }}>
        <Text
          style={{
            fontSize: 25,
            padding: 10,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Vaccine Information
        </Text>
        <CustomTable
          headers={['Vaccine Name', 'Date']}
          onClickRow={index => {
            console.log(index);
          }}
          data={[
            ['a', 'b'],
            ['a', 'b'],
            ['a', 'b'],
          ]}
        />
      </View>
      <TouchableOpacity
        style={[styles.button, styles.addVaccineButton]}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}>
        <Text style={styles.textStyle}>Add Vaccine</Text>
      </TouchableOpacity>
    </View>
  ); /*: (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color={globalStyles.yellow.color} />
    </View>
  );*/
};
