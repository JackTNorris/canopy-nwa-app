import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';

export const CustomTextInput = () => {
  const [text, setText] = useState('');

  const handleChangeText = (inputText: string) => {
    setText(inputText);
  };

  return (
    <TextInput
      style={styles.input}
      onChangeText={handleChangeText}
      value={text}
      placeholder="Enter text..."
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
