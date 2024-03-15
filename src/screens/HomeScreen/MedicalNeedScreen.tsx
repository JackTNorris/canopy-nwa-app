import React from 'react';
import {Linking, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {HomeMenuButton} from './HomeMenuScreen';

export const MedicalNeedScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/*<ScrollView style={{flex: 1}}>*/}
      <HomeMenuButton
        icon="calendar"
        title="Schedule Appointment"
        onPress={() => {
          Linking.openURL(
            'https://patient.lumahealth.io/survey?patientFormTemplate=64946c2143203a001c31969e&user=606f4ed31cbf2100129cafde&gtmId=GTM-5SZQPMF',
          );
        }}
      />
      {/*</ScrollView>*/}
    </View>
  );
};
