import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';

export type CustomTextInputProps = {
  placeholder: string;
  onChange: (text: string) => void;
};

export const CustomTextInput = ({
  placeholder,
  onChange,
}: CustomTextInputProps) => {
  const [text, setText] = useState('');

  const handleChangeText = (inputText: string) => {
    setText(inputText);
    onChange(inputText);
  };

  return (
    <TextInput
      style={styles.input}
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
