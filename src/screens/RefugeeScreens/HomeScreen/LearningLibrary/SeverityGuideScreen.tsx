import globalStyles from '@src/global.styles';
import React from 'react';

import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export const SeverityGuideScreen = () => {
  return (
    <View style={{flex: 1, padding: 10}}>
      <ScrollView>
        <View>
          <View
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
          </View>
          <View
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
          </View>
          <View
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
          </View>
          <View
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
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
