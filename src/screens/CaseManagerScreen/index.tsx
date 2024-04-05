import {CustomTextInput} from '@src/components/CustomTextInput';
import React from 'react';
import {View, Text, ScrollView, Button, ActivityIndicator} from 'react-native';
import {HeightPicker} from './components/HeightPicker';
import {BloodTypePicker} from './components/BloodTypePicker';
import {AllergyPicker} from './components/AllergyPicker';
import {WeightPicker} from './components/WeightPicker';
import storage from '@src/loaders/storage';
import {USER_INFO_KEY, UserInfo} from '@src/consts';
import globalStyles from '@src/global.styles';

export type CaseManagerScreenProps = {
  onCompleteSignup(userInfo: UserInfo): void;
};

const CaseManagerScreen = ({onCompleteSignup}: CaseManagerScreenProps) => {
  const [allergy, setAllergy] = React.useState<string[]>([]);
  const [heightFeet, setHeightFeet] = React.useState('');
  const [heightInches, setHeightInches] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [bloodType, setBloodType] = React.useState('');
  const [refugeeName, setRefugeeName] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const uploadAsyncStorage = async () => {
    setIsLoading(true);
    await storage.save({
      key: USER_INFO_KEY, // Note: Do not use underscore("_") in key!
      data: {
        allergy,
        heightFeet,
        heightInches,
        weight,
        bloodType,
        refugeeName,
      },
      expires: null,
    });
    setIsLoading(false);
    onCompleteSignup({
      allergy,
      heightFeet,
      heightInches,
      weight,
      bloodType,
      refugeeName,
    });
  };

  const validateInput = () => {
    if (!refugeeName || !heightFeet || !heightInches || !weight || !bloodType) {
      return false;
    }
    return true;
  };

  return !isLoading ? (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 25, fontWeight: 'bold', padding: 20}}>
            Refugee Profile
          </Text>
        </View>
        <CustomTextInput placeholder="Refugee Name" onChange={setRefugeeName} />
        <AllergyPicker onChange={setAllergy} />
        <HeightPicker
          onFeetChange={setHeightFeet}
          onInchesChange={setHeightInches}
        />
        <WeightPicker onChange={setWeight} />
        <BloodTypePicker onChange={setBloodType} />
      </ScrollView>
      <Button
        title="Submit"
        color={'orange'}
        disabled={!validateInput()}
        onPress={() => {
          uploadAsyncStorage();
        }}
      />
    </View>
  ) : (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color={globalStyles.yellow.color} />
    </View>
  );
};
export default CaseManagerScreen;
