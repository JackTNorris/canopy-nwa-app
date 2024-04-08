//TODO: fix never conversion
//TODO: change find a hospital links
import {EmergencyButton} from '@src/components/EmergencyButton';
import {IconTouchableOpacity} from '../../../components/IconTouchableOpacity';
import React from 'react';
import {Alert, Linking} from 'react-native';
import {StyleSheet, View} from 'react-native';

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

export const MedicalResourcesScreen = () => {
  const MenuOptions = [
    {
      title: 'Schedule an Appointment',
      onPress: () => {
        Linking.openURL(
          'https://patient.lumahealth.io/survey?patientFormTemplate=64946c2143203a001c31969e&user=606f4ed31cbf2100129cafde&gtmId=GTM-5SZQPMF',
        );
      },
      icon: 'calendar',
    },
    {
      title: 'Find a Hospital',
      onPress: () => {
        Linking.openURL('https://maps.app.goo.gl/NSnDcZ7pgNz5hppm6');
      },
      icon: 'google-maps',
    },
    {
      title: 'Community Clinic',
      onPress: () => {
        Linking.openURL('https://www.communityclinicnwa.org/');
      },
      icon: 'community-clinic',
    },
    {
      title: 'Medical Transport',
      onPress: () => {
        Alert.alert(
          'Medical Transport',
          'Call or email Community Clinic 1 day in advance before your appointment',
          [
            {
              text: 'Email',
              onPress: () =>
                Linking.openURL('mailto:info@communityclinicnwa.org'),
            },
            {
              text: 'Call',
              onPress: () => Linking.openURL('tel: 8554382280'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => {}},
          ],
        );
      },
      icon: 'ambulance',
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
        <EmergencyButton />
      </View>
    </View>
  );
};
