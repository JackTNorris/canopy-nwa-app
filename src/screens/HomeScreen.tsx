import React from 'react';
import {Dimensions, Text, View} from 'react-native';

export const HomeScreen = () => {
  const width = 150;
  const height = 150;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        height: Dimensions.get('screen').height,
      }}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: width,
              height: height,
              backgroundColor: '#b2e8f7',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: 'green',
            }}>
            <Text>Pain Guide</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: width,
              height: height,
              backgroundColor: 'gray',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Pain Guide</Text>
          </View>
        </View>
        <View />
      </View>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: width,
              height: height,
              backgroundColor: 'gray',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Pain Guide</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: width,
              height: height,
              backgroundColor: '#b2e8f7',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Pain Guide</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
