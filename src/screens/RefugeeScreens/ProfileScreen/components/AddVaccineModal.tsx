/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomTextInput} from '@src/components/CustomTextInput';
import {launchImageLibrary} from 'react-native-image-picker';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '80%',
    height: '60%',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  dateTimeButton: {
    elevation: 2,
    borderRadius: 10,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  vaccinePicUpload: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    width: '100%',
    flex: 1,
  },
  vaccinePicDisplay: {
    width: '100%',
    height: '100%',
  },
});

export type AddVaccineModalProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
};

export const AddVaccineModal = ({
  modalVisible,
  setModalVisible,
}: AddVaccineModalProps) => {
  const [showDate, setShowDate] = React.useState(false);
  const [date, setDate] = React.useState<undefined | number>(undefined);
  const [vaccineName, setVaccineName] = React.useState('');
  const [vaccinePic, setVaccinePic] = React.useState<string | null>(null);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setShowDate(false);
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Add Vaccine
          </Text>
          {showDate && (
            <DateTimePicker
              value={new Date()}
              mode="date"
              onChange={(e, d) => {
                setShowDate(false);
                if (d) {
                  setDate(d.getTime());
                }
              }}
            />
          )}
          <View
            style={{
              flex: 1,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <CustomTextInput
              placeholder="Vaccine Name"
              onChange={setVaccineName}
              style={{width: '100%'}}
            />
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>
                {date ? new Date(date).toDateString() : 'Vaccination Date'}
              </Text>
              <TouchableOpacity
                style={[styles.dateTimeButton, styles.buttonClose]}
                onPress={() => setShowDate(!showDate)}>
                <MaterialCommunityIcons
                  name={'calendar'}
                  color={'white'}
                  size={20}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.vaccinePicUpload}
              onPress={() =>
                launchImageLibrary(
                  {selectionLimit: 1, mediaType: 'photo'},
                  result => {
                    console.log(result);
                    try {
                      result.assets?.forEach(asset => {
                        setVaccinePic(asset.uri as string);
                      });
                    } catch (error) {
                      console.log('Error updating vaccine picture', error);
                    }
                  },
                )
              }>
              <Text>
                {vaccinePic ? (
                  <Image
                    style={styles.vaccinePicDisplay}
                    source={{uri: vaccinePic}}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="upload"
                    color={'black'}
                    size={50}
                  />
                )}{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
