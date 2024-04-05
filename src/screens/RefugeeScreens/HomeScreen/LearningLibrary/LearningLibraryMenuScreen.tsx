//TODO: fix never casting
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {IconTouchableOpacity} from '../../../../components/IconTouchableOpacity';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

const style = StyleSheet.create({
  menuOptionsList: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
  },
});

export const LearningLibraryMenuScreen = () => {
  const navigation = useNavigation();
  const MenuOptions = [
    {
      title: 'Insurance',
      onPress: () => {
        navigation.navigate('InsuranceScreen' as never);
      },
      icon: 'smart-card',
    },
    {
      title: 'Severity Guide',
      onPress: () => {
        navigation.navigate('SeverityGuideScreen' as never);
      },
      icon: 'lungs',
    },
    {
      title: 'Clinic Type',
      onPress: () => {
        navigation.navigate('ClinicTypeScreen' as never);
      },
      icon: 'hospital-building',
    },
  ];
  return (
    <View style={style.menuOptionsList}>
      {MenuOptions.map((option, index) => (
        <IconTouchableOpacity
          key={index}
          {...option}
          style={{width: Dimensions.get('screen').width * 0.8}}
        />
      ))}
    </View>
  );
};
