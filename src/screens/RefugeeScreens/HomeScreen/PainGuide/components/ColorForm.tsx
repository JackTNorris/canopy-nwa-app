import React, {useState} from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  colorButton: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'white',
  },
});

export const ColorForm = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const gradient = [
    '#00FF00',
    '#1CE200',
    '#38C600',
    '#55AA00',
    '#718D00',
    '#8D7100',
    '#AA5500',
    '#C63800',
    '#E21C00',
    '#FF0000',
  ];
  return (
    <View style={styles.container}>
      {gradient.map((color, index) => (
        <TouchableOpacity
          key={index}
          style={{
            ...styles.colorButton,
            backgroundColor: color,
            borderWidth: 4,
            borderColor: index === selectedIndex ? 'black' : 'white',
          }}
          onPress={() => {
            setSelectedIndex(index);
          }}
        />
      ))}
    </View>
  );
};
