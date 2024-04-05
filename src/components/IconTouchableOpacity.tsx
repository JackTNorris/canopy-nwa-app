import React from 'react';
import {StyleProp, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import globalStyles from '@src/global.styles';

const styles = StyleSheet.create({
  defaultStyles: {
    width: 150,
    height: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
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
  variant?: 'blue' | 'yellow';
};

export const IconTouchableOpacity = ({
  title,
  onPress,
  icon,
  style,
  variant = 'blue',
}: IconTouchableOpacityProps) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.defaultStyles,
        ...style,
        backgroundColor:
          variant === 'blue'
            ? globalStyles.blue.color
            : globalStyles.yellow.color,
      }}
      onPress={onPress}>
      {icon === 'community-clinic' ? (
        <Image
          source={require('../assets/img/cclogo.png')}
          style={styles.communityClinic}
        />
      ) : (
        <>
          <MaterialCommunityIcons name={icon} color={'black'} size={50} />
          <Text>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};
