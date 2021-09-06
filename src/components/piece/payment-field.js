import React, {useState} from 'react';
import {View} from 'react-native';
import {form} from '../../assets/js-styles';
import {form_details} from '../../utils/container';
import AmountField from '../sub-piece/payment-field/amount';
import CvvField from '../sub-piece/payment-field/cvv';
import HolderName from '../sub-piece/payment-field/name';
import NumberField from '../sub-piece/payment-field/number';
import ValidationField from '../sub-piece/payment-field/valid';

const PaymentField = () => {
  const [payment, setPayment] = useState(form_details.card);

  return (
    <View style={form.section}>
      <View>
        <HolderName payment={payment} setPayment={setPayment} />
        <NumberField payment={payment} setPayment={setPayment} />
        <View style={form.row}>
          <CvvField payment={payment} setPayment={setPayment} />
          <ValidationField payment={payment} setPayment={setPayment} />
        </View>
        <AmountField payment={payment} setPayment={setPayment} />
      </View>
    </View>
  );
};

export default PaymentField;
