//TODO: fix never conversion
//TODO: change find a hospital links
import {IconTouchableOpacity} from '../../components/IconTouchableOpacity';
import React from 'react';
import {Linking} from 'react-native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

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

export const MedicalNeedScreen = () => {
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
        Linking.openURL('https://maps.app.goo.gl/WZ1yMwKeoJDQukdn8');
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
  ];
  return (
    <View style={{flex: 1, flexDirection: 'column', gap: 20}}>
      <View style={styles.homeMenuButtonRowContainerTop}>
        <IconTouchableOpacity {...MenuOptions[0]} />
      </View>
      <View style={styles.homeMenuButtonRowContainerBottom}>
        <IconTouchableOpacity {...MenuOptions[1]} />
        <IconTouchableOpacity {...MenuOptions[2]} />
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.emergencyButton}
          onPress={() => {
            Linking.openURL('tel:911');
          }}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
            Emergency
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
