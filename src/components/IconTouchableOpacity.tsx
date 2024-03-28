import React from 'react';
import {StyleProp, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  defaultStyles: {
    width: 150,
    height: 150,
    backgroundColor: '#b2e8f7',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: 'orange',
  },
  communityClinic: {
    height: 100,
    width: 100,
    resizeMode: 'center',
  },
});

type IconTouchableOpacityProps = {
  title: string;
  onPress: () => void;
  icon: string;
  style?: StyleProp<any>;
};

export const IconTouchableOpacity = ({
  title,
  onPress,
  icon,
  style,
}: IconTouchableOpacityProps) => {
  return (
    <TouchableOpacity
      style={{...styles.defaultStyles, ...style}}
      onPress={onPress}>
      {icon === 'community-clinic' ? (
        <Image
          source={require('../assets/img/cclogo.png')}
          style={styles.communityClinic}
        />
      ) : (
        <>
          <MaterialCommunityIcons name={icon} color={'#ffa347'} size={50} />
          <Text>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};
