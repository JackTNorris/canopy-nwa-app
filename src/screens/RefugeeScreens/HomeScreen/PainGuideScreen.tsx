import React from 'react';
import {View, Image} from 'react-native';

export const PainGuideScreen = () => {
  return (
    <View
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      onTouchStart={e => {
        console.log('touchMove', e.nativeEvent);
      }}>
      <Image
        style={{
          height: 550,
          aspectRatio: 0.5,
        }}
        source={require('../../../assets/img/human-body.png')}
      />
    </View>
  );
};
