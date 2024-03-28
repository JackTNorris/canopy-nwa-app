//TODO: fix never conversion
import {IconTouchableOpacity} from '../../components/IconTouchableOpacity';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Linking} from 'react-native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const styles = StyleSheet.create({
  homeMenuButtonRowContainerTop: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  homeMenuButtonRowContainerBottom: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  emergencyButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    backgroundColor: 'red',
    borderRadius: 10,
    width: '90%',
    elevation: 10,
    shadowColor: 'orange',
  },
});

export const HomeMenuScreen = () => {
  const navigation = useNavigation();

  const MenuOptions = [
    {
      title: 'Pain Guide',
      onPress: () => {
        navigation.navigate('PainGuideScreen' as never);
      },
      icon: 'bandage',
    },
    {
      title: 'Medical Need',
      onPress: () => {
        navigation.navigate('MedicalNeedScreen' as never);
      },
      icon: 'medical-bag',
    },
    {
      title: 'Learning Library',
      onPress: () => {
        navigation.navigate('LearningLibraryScreen' as never);
      },
      icon: 'bookshelf',
    },
  ];
  return (
    <View style={{flex: 1, flexDirection: 'column', gap: 20}}>
      <View style={styles.homeMenuButtonRowContainerTop}>
        <IconTouchableOpacity {...MenuOptions[0]} />
      </View>
      <View style={styles.homeMenuButtonRowContainerBottom}>
        <IconTouchableOpacity {...MenuOptions[1]} />
        <IconTouchableOpacity {...MenuOptions[2]} />
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.emergencyButton}
          onPress={() => {
            Linking.openURL('tel:911');
          }}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
            Emergency
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
