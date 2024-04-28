import React from 'react';
import {useRoute} from '@react-navigation/native';
import {View, Text, Image, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import {ColorForm} from './components/ColorForm';
import globalStyles from '@src/global.styles';
import {ScrollView} from 'react-native-gesture-handler';
import { EmergencyButton } from '@src/components/EmergencyButton';

export const SeverityGuideSymptomInfo = () => {
  const route = useRoute();
  const symptoms =
    "- Pain or tenderness\n- Swelling\n- Redness or bruising\n- Limited ability to move the affected joint\n- Hearing or feeling a 'pop' in your joint at the time of injury\n- Muscle spasms\n- Muscle weakness";

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <ScrollView>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 30,
            padding: 30,
            backgroundColor: globalStyles.blue.color,
            marginVertical: 20,
            borderWidth: 2,
          }}>
          {(route.params as any).symptom}
        </Text>
        {(route.params as any).symptom === 'Sprains or strains' && (
          <View style={{gap: 20}}>
            <Text>This is what sprains and strains might look like</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Image
                style={{width: 120, height: 100}}
                source={require('@src/assets/img/symptoms/strained.jpeg')}
              />
              <Image
                style={{width: 120, height: 100}}
                source={require('@src/assets/img/symptoms/swollen.jpeg')}
              />
            </View>
            <View
              style={{
                padding: 10,
                backgroundColor: globalStyles.yellow.color,
                borderWidth: 2,
              }}>
              <Text style={{fontWeight: 'bold', borderBottomWidth: 2}}>
                This is what you might feel:
              </Text>
              <Text>{symptoms}</Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://maps.app.goo.gl/NSnDcZ7pgNz5hppm6')
              }
              style={{
                flex: 1,
                backgroundColor: 'red',
                height: 50,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', textAlign: 'center'}}>
                Help me find an urgent care
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
};
