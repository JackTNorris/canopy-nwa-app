import React, {useState} from 'react';
import {TextInput, StyleSheet, StyleProp} from 'react-native';

export type CustomTextInputProps = {
  placeholder: string;
  onChange: (text: string) => void;
  style?: StyleProp<any>;
};

export const CustomTextInput = ({
  placeholder,
  onChange,
  style
}: CustomTextInputProps) => {
  const [text, setText] = useState('');

  const handleChangeText = (inputText: string) => {
    setText(inputText);
    onChange(inputText);
  };

  return (
    <TextInput
      style={{...styles.input, ...style}}
      onChangeText={handleChangeText}
      value={text}
      placeholder={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    margin: 10,
    borderRadius: 5,
  },
});
