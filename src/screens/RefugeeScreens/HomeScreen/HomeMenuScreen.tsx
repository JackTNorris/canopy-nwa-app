//TODO: fix never conversion
import {EmergencyButton} from '@src/components/EmergencyButton';
import {IconTouchableOpacity} from '../../../components/IconTouchableOpacity';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {translations} from '@src/consts';

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
export type HomeMenuScreenProps = {
  isSpanish: boolean;
};
export const HomeMenuScreen = ({isSpanish}: HomeMenuScreenProps) => {
  const navigation = useNavigation();

  const MenuOptions = [
    {
      title: isSpanish ? translations['Pain Guide'] : 'Pain Guide',
      onPress: () => {
        navigation.navigate('PainGuideScreen' as never);
      },
      icon: 'bandage',
    },
    {
      title: isSpanish
        ? translations['Medical Resources']
        : 'Medical Resources',
      onPress: () => {
        navigation.navigate('MedicalResourcesScreen' as never);
      },
      icon: 'medical-bag',
    },
    {
      title: isSpanish ? translations['Learning Library'] : 'Learning Library',
      onPress: () => {
        navigation.navigate('LearningLibraryScreen' as never);
      },
      icon: 'bookshelf',
    },
    {
      title: isSpanish ? translations['Inbox'] : 'Inbox',
      onPress: () => {
        navigation.navigate('InboxScreen' as never);
      },
      icon: 'inbox',
    },
  ];
  return (
    <View style={{flex: 1, flexDirection: 'column', gap: 20}}>
      <View style={styles.homeMenuButtonRowContainerTop}>
        <IconTouchableOpacity {...MenuOptions[0]} />
        <IconTouchableOpacity {...MenuOptions[1]} variant="yellow" />
      </View>
      <View style={styles.homeMenuButtonRowContainerBottom}>
        <IconTouchableOpacity {...MenuOptions[2]} variant="yellow" />
        <IconTouchableOpacity {...MenuOptions[3]} />
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <EmergencyButton isSpanish={isSpanish} />
      </View>
    </View>
  );
};
