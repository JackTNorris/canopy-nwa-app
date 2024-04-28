import React from 'react';
import {useRoute} from '@react-navigation/native';
import {View, Text, Image, StyleSheet} from 'react-native';
import {ColorForm} from './components/ColorForm';

export const SeverityGuideSymptomInfo = () => {
  const route = useRoute();
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 30}}>
        {(route.params as any).symptom.toUpperCase()}
      </Text>
      {
        /*
      <Image
        style={{height: 200, resizeMode: 'center'}}
        source={(route.params as any).asset}
      />
      */}
    </View>
  );
};
