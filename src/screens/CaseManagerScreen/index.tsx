import {CustomTextInput} from '@src/components/CustomTextInput';
import React from 'react';
import {View, Text, ScrollView} from 'react-native';

const CaseManagerScreen = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <CustomTextInput />
      </ScrollView>
    </View>
  );
};
export default CaseManagerScreen;
