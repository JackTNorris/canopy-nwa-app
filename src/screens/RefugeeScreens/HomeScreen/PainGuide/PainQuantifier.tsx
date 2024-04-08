import React from 'react';
import {useRoute} from '@react-navigation/native';
import {View, Text, Image, StyleSheet} from 'react-native';
import {ColorForm} from './components/ColorForm';

const styles = StyleSheet.create({
  labels: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export const PainQuantifier = () => {

  const [pain, setPain] = React.useState(0);
  const [tingling, setTingling] = React.useState(0);
  const [swelling, setSwelling] = React.useState(0);

  const route = useRoute();
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 30}}>
        {(route.params as any).bodyPart.toUpperCase()}
      </Text>
      <Image
        style={{height: 200, resizeMode: 'center'}}
        source={(route.params as any).asset}
      />
      <Text style={styles.labels}>Pain?</Text>
      <ColorForm setSelectedIndex={setPain} selectedIndex={pain} />
      <Text style={styles.labels}>Tingling?</Text>
      <ColorForm setSelectedIndex={setTingling} selectedIndex={tingling} />
      <Text style={styles.labels}>Swelling?</Text>
      <ColorForm setSelectedIndex={setSwelling} selectedIndex={setSwelling} />
      {/*<Text style={{...styles.labels, padding: 20}}>Swelling?</Text>J*/}
    </View>
  );
};
