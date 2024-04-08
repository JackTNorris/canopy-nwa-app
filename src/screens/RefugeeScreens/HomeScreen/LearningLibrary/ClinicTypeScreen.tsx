import {CustomTable} from '@src/components/CustomTable';
import React from 'react';
import {Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export const ClinicTypeScreen = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <View id="clinic-type">
        <Text style={{fontSize: 24, fontWeight: 'bold', textAlign: 'center'}}>
          Types of Clinics
        </Text>
        <CustomTable
          style={{margin: 2}}
          data={[
            ['General Practice', 'Mon-Fri', '1.2Mi (fix)'],
            ['Urgent Care', 'Mon-Sun', '1.2Mi (fix)'],
            ['Emergency Room', 'Mon-Sun', '0.7Mi (fix)'],
          ]}
          headers={['Clinic Type', 'Hours of Operation', 'Nearest']}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 24,
            padding: 20,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Differences between Emergency Room & Urgent Care
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: 18,
                padding: 10,
                fontWeight: 'bold',
                textAlign: 'center',
                borderWidth: 2,
              }}>
              Emergency Room
            </Text>
            <Text style={{fontSize: 15, padding: 5, textAlign: 'center'}}>
              Life threatening emergencies such as: strokes, heart attack, serious trauma, excessive bleeding
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: 18,
                padding: 10,
                fontWeight: 'bold',
                textAlign: 'center',
                borderWidth: 2,
              }}>
              Urgent Care
            </Text>
            <Text style={{fontSize: 15, padding: 5, textAlign: 'center'}}>
              Minor illness and Injuries: fever, cold, sore throat, ear ache, skin irritation
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
