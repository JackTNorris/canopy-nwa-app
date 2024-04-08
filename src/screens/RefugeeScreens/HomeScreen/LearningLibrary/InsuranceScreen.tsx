import globalStyles from '@src/global.styles';
import React from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export const InsuranceScreen = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{padding: 10, borderBottomWidth: 2}}>
        <Text style={{fontSize: 24, fontWeight: 'bold', textAlign: 'center'}}>
          How to use my insurance card:
        </Text>
      </View>
      <View>
        <Text style={{fontSize: 24, fontWeight: 'bold', textAlign: 'center'}}>
          What does my insurance cover?:
        </Text>
        <View id="ambulance" style={{paddingVertical: 20}}>
          <View
            style={{
              padding: 20,
              margin: 20,
              borderRadius: 10,
              backgroundColor: globalStyles.blue.color,
            }}>
            <Text
              style={{fontSize: 24, fontWeight: 'bold', textAlign: 'center'}}>
              Ambulance Service
            </Text>
          </View>
          <Text style={{fontSize: 15, padding: 10, textAlign: 'center'}}>
            Medicaid and ARKids First will pay for ambulance service only in
            certain cases, and only when you need it to stay alive or to prevent
            serious damage to your health.
          </Text>
        </View>
        <View id="surgery" style={{paddingVertical: 20}}>
          <View
            style={{
              padding: 20,
              margin: 20,
              borderRadius: 10,
              backgroundColor: globalStyles.blue.color,
            }}>
            <Text
              style={{fontSize: 24, fontWeight: 'bold', textAlign: 'center'}}>
              Ambulatory Surgical Center
            </Text>
          </View>
          <Text style={{fontSize: 15, padding: 10, textAlign: 'center'}}>
            Ambulatory surgical centers provide surgeries that do not require an
            overnight hospital stay. Medicaid and ARKids First pay for covered
            surgeries in these centers. A referral from your PCP is usually
            required. If you have ARKids First-B (CHIP Title XXI funded), you
            will have to pay a co-payment.
          </Text>
        </View>
        <View id="child-health-management" style={{paddingVertical: 20}}>
          <View
            style={{
              padding: 20,
              margin: 20,
              borderRadius: 10,
              backgroundColor: globalStyles.blue.color,
            }}>
            <Text
              style={{fontSize: 24, fontWeight: 'bold', textAlign: 'center'}}>
              Child Health Management Services
            </Text>
          </View>
          <Text style={{fontSize: 15, padding: 10, textAlign: 'center'}}>
            Medicaid or ARKids First-A (Medicaid Title XIX funded): If a child
            under 21 is has a health problem or is not developing normally,
            Medicaid or ARKids First-A will pay for many different services
            like: medical, psychological, speech and language pathology,
            occupational therapy, physical therapy, behavioral therapy, and
            audiology. To receive these services, you will need to get your
            primary care doctor’s okay, called a “referral.”
          </Text>
          <Text style={{fontSize: 15, padding: 10, textAlign: 'center'}}>
            Medicaid or ARKids First-A (Medicaid Title XIX funded): If a child
            under 21 is has a health problem or is not developing normally,
            Medicaid or ARKids First-A will pay for many different services
            like: medical, psychological, speech and language pathology,
            occupational therapy, physical therapy, behavioral therapy, and
            audiology. To receive these services, you will need to get your
            primary care doctor’s okay, called a “referral.” ARKids First-B
            (CHIP Title XXI funded) does not offer the CHMS program, but some of
            the same services are covered if needed. A PCP referral is required.{' '}
          </Text>
        </View>
        <View id="chiropractor" style={{paddingVertical: 20}}>
          <View
            style={{
              padding: 20,
              margin: 20,
              borderRadius: 10,
              backgroundColor: globalStyles.blue.color,
            }}>
            <Text
              style={{fontSize: 24, fontWeight: 'bold', textAlign: 'center'}}>
              Chiropractor
            </Text>
          </View>
          <Text style={{fontSize: 15, padding: 10, textAlign: 'center'}}>
            A chiropractor is a doctor who can make adjustments in your spine to
            treat back pain and other problems. Medicaid and ARKids First cover
            chiropractic care. You will need a referral from your PCP. There is
            a limit to the number of visits Medicaid will pay for if you are 21
            or older. If you have ARKids First-B (CHIP Title XXI funded), you
            will have to pay a co-payment for each visit.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
