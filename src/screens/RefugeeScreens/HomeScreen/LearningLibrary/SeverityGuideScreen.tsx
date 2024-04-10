import globalStyles from '@src/global.styles';
import React from 'react';

import {Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export const SeverityGuideScreen = () => {
  return (
    <View style={{flex: 1, padding: 10}}>
      <ScrollView>
        <View>
          <TouchableOpacity
            style={{
              padding: 20,
              margin: 20,
              borderRadius: 10,
              backgroundColor: globalStyles.yellow.color,
            }}>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', textAlign: 'center'}}>
              Emergency room
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 20,
              margin: 20,
              borderRadius: 10,
              backgroundColor: globalStyles.blue.color,
            }}>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', textAlign: 'center'}}>
              Urgent Care (walk-in)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 20,
              margin: 20,
              borderRadius: 10,
              backgroundColor: globalStyles.yellow.color,
            }}>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', textAlign: 'center'}}>
              Scheduled primary care appointment
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 20,
              margin: 20,
              borderRadius: 10,
              backgroundColor: globalStyles.blue.color,
            }}>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', textAlign: 'center'}}>
              Stay home / OTC
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
