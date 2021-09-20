import React from 'react';
import {View} from 'react-native';
import {form} from '../../assets/js-styles';
import AmountField from '../sub-piece/payment-field/amount';
import CvvField from '../sub-piece/payment-field/cvv';
import HolderName from '../sub-piece/payment-field/name';
import NumberField from '../sub-piece/payment-field/number';
import ValidationField from '../sub-piece/payment-field/valid';

const PaymentField = props => {
  return (
    <View style={form.section}>
      <View>
        <HolderName state={props.state} setState={props.setState} />
        <NumberField state={props.state} setState={props.setState} />
        <View style={form.row}>
          <CvvField state={props.state} setState={props.setState} />
          <ValidationField state={props.state} setState={props.setState} />
        </View>
        <AmountField state={props.state} setState={props.setState} />
      </View>
    </View>
  );
};

export default PaymentField;
