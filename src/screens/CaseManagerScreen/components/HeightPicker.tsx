import React from 'react';
import {CustomDropdown} from '../../../components/CustomDropdown';
import _ from 'lodash';
import {View} from 'react-native';

export type HeightPickerProps = {
  onFeetChange: (value: string) => void;
  onInchesChange: (value: string) => void;
};
export const HeightPicker = ({
  onFeetChange,
  onInchesChange,
}: HeightPickerProps) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <CustomDropdown
        placeholder="Feet"
        options={_.range(4, 8).map(value => ({
          label: value.toString(),
          value: value.toString(),
        }))}
        onChange={onFeetChange}
      />
      <CustomDropdown
        placeholder="Inches"
        options={_.range(0, 12).map(value => ({
          label: value.toString(),
          value: value.toString(),
        }))}
        onChange={onInchesChange}
      />
    </View>
  );
};
