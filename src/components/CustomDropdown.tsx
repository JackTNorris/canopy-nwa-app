import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const CustomDropdown = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const dropdownItems = [
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
  ];

  const handleDropdownChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <View style={styles.container}>
      <Dropdown
        labelField="label"
        value={selectedValue}
        data={dropdownItems}
        onChangeText={handleDropdownChange}
        valueField={'label'}
        onChange={function (item: {label: string; value: string}): void {
          throw new Error('Function not implemented.');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomDropdown;
