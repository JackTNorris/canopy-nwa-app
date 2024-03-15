//TODO: move link to some sort of assets file
import React from 'react';
import {Linking, View} from 'react-native';
//import {ScrollView} from 'react-native-gesture-handler';
import {IconTouchableOpacity} from '../../components/IconTouchableOpacity';

export const MedicalNeedScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/*<ScrollView style={{flex: 1}}>*/}
      <IconTouchableOpacity
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
