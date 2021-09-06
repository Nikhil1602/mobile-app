import React from 'react';
import {TextInput} from 'react-native-paper';
import {PRIMARY} from '../../../assets/theme';
import {form} from '../../../assets/js-styles';

const AmountField = props => {
  const handleChange = data => {
    props.setPayment({...props.payment, amount: data});
  };

  return (
    <TextInput
      mode="outlined"
      label="Amount (₹)"
      keyboardType={'numeric'}
      value={props.payment.amount}
      disabled
      style={form.input}
      outlineColor={PRIMARY}
      onChangeText={event => handleChange(event)}
    />
  );
};

export default AmountField;
