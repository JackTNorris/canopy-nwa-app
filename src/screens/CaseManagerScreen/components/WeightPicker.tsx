import React from 'react';
import {CustomDropdown} from '../../../components/CustomDropdown';
import _ from 'lodash';
import {View} from 'react-native';

export type WeightPickerProps = {
  onChange: (value: string) => void;
};
export const WeightPicker = ({onChange}: WeightPickerProps) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <CustomDropdown
        placeholder="Weight (lb)"
        options={_.range(70, 350).map(value => ({
          label: `${value}lb`,
          value: `${value}lb`,
        }))}
        onChange={onChange}
      />
    </View>
  );
};
