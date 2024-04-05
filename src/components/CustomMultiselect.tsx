import React, {useState} from 'react';
import {View, StyleSheet } from 'react-native';
import { MultiSelect} from 'react-native-element-dropdown';
import {CustomDropdownProps} from './CustomDropdown';

const styles = StyleSheet.create({
  container: {padding: 16, flex: 1, flexDirection: 'column'},
  dropdown: {
    height: 50,
    backgroundColor: 'transparent',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  selectedStyle: {
    borderRadius: 12,
  },
});

export type CustomMultiselectProps = Omit<CustomDropdownProps, 'onChange'> & {
  onChange: (values: string[]) => void;
};

export const CustomMultiselect = ({
  placeholder,
  options,
  onChange,
}: CustomMultiselectProps) => {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <View style={styles.container}>
      <MultiSelect
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        search
        data={options}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        searchPlaceholder="Search..."
        value={selected}
        onChange={item => {
          setSelected(item);
          onChange(item);
        }}
        selectedStyle={styles.selectedStyle}
      />
    </View>
  );
};
