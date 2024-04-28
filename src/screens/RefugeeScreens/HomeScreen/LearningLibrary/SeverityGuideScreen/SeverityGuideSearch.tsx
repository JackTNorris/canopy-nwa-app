//TODO: refactor functionality to be more modular, too much functionality just in this componenent
// TODO: need a config file that lists key words to search through for each item, not just "swollen foot"
import {IconTouchableOpacity} from '@src/components/IconTouchableOpacity';
import globalStyles from '@src/global.styles';
import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SeverityCategorySelector} from './SeverityCategorySelector';
import {conditionSymptomPairing, symptomGroup} from '@src/consts';
import {useNavigation} from '@react-navigation/native';

export const SeverityGuideSearch = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [currentSymptomGroup, setCurrentSymptomGroup] = useState<string>('');

  const getSearchOutputs = () => {
    if (currentSymptomGroup.length > 0 && searchInput.length > 0) {
      return symptomGroup[currentSymptomGroup].filter(item => {
        return (
          item.toLowerCase().includes(searchInput.toLowerCase()) ||
          (searchInput.toLowerCase().includes('swollen foot') &&
            item === 'Sprains or strains')
        );
      });
    } else if (currentSymptomGroup.length > 0) {
      return symptomGroup[currentSymptomGroup];
    } else if (searchInput.length > 0) {
      const returnList: string[] = [];
      Object.keys(symptomGroup).forEach(item => {
        symptomGroup[item].forEach(word => {
          if (
            word.toLowerCase().includes(searchInput.toLowerCase()) ||
            (searchInput.toLowerCase().includes('swollen foot') &&
              word === 'Sprains or strains')
          ) {
            returnList.push(word);
          }
        });
      });
      return returnList;
    }
    return [];
  };
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, padding: 10}}>
      {currentSymptomGroup.length > 0 && (
        <Text
          style={{
            textAlign: 'center',
            padding: 5,
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          {currentSymptomGroup}
        </Text>
      )}
      <ScrollView>
        <View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              borderColor: 'black',
              borderWidth: 2,
              borderRadius: 20,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 10,
            }}>
            <MaterialCommunityIcons name={'magnify'} color={'grey'} size={40} />

            <TextInput
              style={{
                flex: 1,
                fontSize: 15,
                height: 50,
              }}
              onChangeText={setSearchInput}
              placeholder="Search Symptom"
              value={searchInput}
            />
            {(searchInput.length > 0 || currentSymptomGroup.length > 0) && (
              <MaterialCommunityIcons
                name={'cancel'}
                color={'grey'}
                size={20}
                onPress={() => {
                  setSearchInput('');
                  setCurrentSymptomGroup('');
                }}
              />
            )}
          </View>
          {currentSymptomGroup.length > 0 || searchInput.length > 0 ? (
            getSearchOutputs().map(item => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    (navigation.navigate as any)('SymptomInfo', {
                      symptom: item,
                      asset: require('@src/assets/img/head.png'),
                    });
                  }}
                  style={{
                    flex: 1,
                    backgroundColor: globalStyles.blue.color,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    minHeight: 50,
                    margin: 20,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      fontSize: 23,
                    }}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })
          ) : (
            <SeverityCategorySelector
              setCurrentSymptomGroup={setCurrentSymptomGroup}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};
