import { translations } from '@src/consts';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Linking, Alert} from 'react-native';

const styles = StyleSheet.create({
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

export type EmergencyButtonProps = {
  isSpanish?: boolean;
};

export const EmergencyButton = ({isSpanish}: EmergencyButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.emergencyButton}
      onPress={() => {
        Alert.alert(
          'Emergency Call',
          'Please note that you should only call this number in these cases: bleeding out, head trauma, extreme pain, struggling to breathe, a fever over 103 degrees, or chest pain',
          [
            {
              text: 'Call 911',
              onPress: () => Linking.openURL('tel: 911'),
            },
            {
              text: 'Cancel',
              onPress: () => {},
              style: 'cancel',
            },
          ],
        );
      }}>
      <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
        {isSpanish ? translations['Emergency'] : 'Emergency'}
      </Text>
    </TouchableOpacity>
  );
};
