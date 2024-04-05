import React from 'react';
import {useRoute} from '@react-navigation/native';
import {View, Text} from 'react-native';

export const PainQuantifier = () => {
  const route = useRoute();
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <Text>{(route.params as any).bodyPart}</Text>
    </View>
  );
};
