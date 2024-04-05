import * as React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('screen').height * 0.15,
    maxHeight: 100,
    shadowOpacity: 0.5,
    borderColor: 'black',
    borderBottomWidth: 0.2,
  },
  headerImage: {
    resizeMode: 'center',
    height: '75%',
  },
});

export const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/img/canopy-logo.png')}
        style={styles.headerImage}
      />
    </View>
  );
};
