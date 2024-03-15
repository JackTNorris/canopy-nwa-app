//TODO: fix never conversion

import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Linking, StyleProp} from 'react-native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  homeMenuButton: {
    width: 150,
    height: 150,
    backgroundColor: '#b2e8f7',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: 'orange',
  },
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

type HomeMenuButtonProps = {
  title: string;
  onPress: () => void;
  icon: string;
  style?: StyleProp<any>;
};

export const HomeMenuButton = ({
  title,
  onPress,
  icon,
  style,
}: HomeMenuButtonProps) => {
  return (
    <TouchableOpacity
      style={{...styles.homeMenuButton, ...style}}
      onPress={onPress}>
      <MaterialCommunityIcons name={icon} color={'#ffa347'} size={50} />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

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
      title: 'Resources',
      onPress: () => {
        navigation.navigate('ResourcesScreen' as never);
      },
      icon: 'file-document-multiple',
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
        <HomeMenuButton {...MenuOptions[0]} />
        <HomeMenuButton {...MenuOptions[1]} />
      </View>
      <View style={styles.homeMenuButtonRowContainerBottom}>
        <HomeMenuButton {...MenuOptions[2]} />
        <HomeMenuButton {...MenuOptions[3]} />
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
