import * as React from 'react';
import {Dimensions, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const ProfileScreen = () => {
  const userProfile = {
    name: 'John Doe',
    age: 25,
    bloodType: 'O+',
    weight: 70,
    height: 180,
    allergies: 'None',
  };

  return (
    <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
      <Text style={{fontSize: 25}}>My Profile</Text>
      <View
        style={{
          width: 100,
          height: 100,
          borderRadius: 100 / 2,
          backgroundColor: '#f0f0ff',
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>
          <MaterialCommunityIcons name="account" color={'black'} size={50} />{' '}
        </Text>
      </View>
      <View
        style={{
          flex: 5,
          flexDirection: 'column',
          width: Dimensions.get('screen').width,
        }}>
        {Object.keys(userProfile).map((key: string) => {
          return (
            <Text key={key}>
              {key.toUpperCase()}: {userProfile[key] as string}
            </Text>
          );
        })}
      </View>
    </View>
  );
};
