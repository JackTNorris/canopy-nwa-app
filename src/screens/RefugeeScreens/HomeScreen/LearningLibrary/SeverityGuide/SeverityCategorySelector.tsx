import {SymptomGroup, symptomGroup} from '@src/consts';
import globalStyles from '@src/global.styles';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export type SeverityCategorySelectorProps = {
  setCurrentSymptomGroup: (group: string) => void;
};

export const SeverityCategorySelector = ({
  setCurrentSymptomGroup,
}: SeverityCategorySelectorProps) => {
  return (
    <View style={{flex: 1, padding: 10}}>
      <ScrollView>
        <View>
          {Object.keys(symptomGroup).map((group, index) => {
            return (
              <>
                <TouchableOpacity
                  onPress={() => setCurrentSymptomGroup(group)}
                  style={{
                    padding: 20,
                    margin: 20,
                    borderRadius: 10,
                    backgroundColor:
                      index % 2 == 0
                        ? globalStyles.yellow.color
                        : globalStyles.blue.color,
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    {group}
                  </Text>
                </TouchableOpacity>
              </>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
