import React from 'react';

import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  homeMenuButton: {
    width: 150,
    height: 150,
    backgroundColor: '#b2e8f7',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: 'orange',
  },
  homeMenuButtonRowContainerTop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
  },
  homeMenuButtonRowContainerBottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
});

const MenuOptions = [
  {
    title: 'Pain Guide',
    onPress: () => console.log('Menu 1 pressed'),
    icon: 'bandage',
  },
  {
    title: 'Medical Need',
    onPress: () => console.log('Menu 1 pressed'),
    icon: 'medical-bag',
  },
  {
    title: 'Resources',
    onPress: () => console.log('Menu 1 pressed'),
    icon: 'file-document-multiple',
  },
  {
    title: 'Learning Library',
    onPress: () => console.log('Menu 1 pressed'),
    icon: 'bookshelf',
  },
];

type HomeMenuButtonProps = {
  title: string;
  onPress: () => void;
  icon: string;
};

const HomeMenuButton = ({title, onPress, icon}: HomeMenuButtonProps) => {
  return (
    <TouchableOpacity style={styles.homeMenuButton} onPress={onPress}>
      <MaterialCommunityIcons name={icon} color={'#ffa347'} size={50} />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export const HomeScreen = () => {
  return (
    <View style={{flex: 1, flexDirection: 'column', gap: 20}}>
      <View style={styles.homeMenuButtonRowContainerTop}>
        <HomeMenuButton {...MenuOptions[0]} />
        <HomeMenuButton {...MenuOptions[1]} />
      </View>
      <View style={styles.homeMenuButtonRowContainerBottom}>
        <HomeMenuButton {...MenuOptions[2]} />
        <HomeMenuButton {...MenuOptions[3]} />
      </View>
    </View>
  );
};
