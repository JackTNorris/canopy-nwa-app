import React from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  circle: {
    position: 'absolute',
    width: 25,
    height: 25,
    borderRadius: 100 / 2,
    backgroundColor: 'white',
    borderColor: 'red',
    borderWidth: 2,
  },
});

export const WhereItHurts = () => {
  return (
    <View
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      onTouchStart={e => {
        console.log('touchMove', e.nativeEvent);
      }}>
      <Image
        style={{
          height: Dimensions.get('window').height * 0.8,
          aspectRatio: 0.4,
        }}
        source={require('@src/assets/img/human-body.png')}
      />
      <TouchableOpacity style={{...styles.circle, top: 10}} />
      <TouchableOpacity
        style={{
          ...styles.circle,
          top: 120,
          left: Dimensions.get('screen').width / 2 - 40,
        }}
      />
      <TouchableOpacity
        style={{
          ...styles.circle,
          top: 200,
          right: Dimensions.get('screen').width / 2 - 40,
        }}
      />
    </View>
  );
};
