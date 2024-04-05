import React from 'react';
import {CustomDropdown} from '../../../components/CustomDropdown';
import {View} from 'react-native';

export type BloodTypePickerProps = {
  onChange: (value: string) => void;
};
export const BloodTypePicker = ({onChange}: BloodTypePickerProps) => {
  const options = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  return (
    <View style={{flexDirection: 'row'}}>
      <CustomDropdown
        placeholder="Blood Type"
        options={options.map(value => ({label: value, value}))}
        onChange={onChange}
      />
    </View>
  );
};
