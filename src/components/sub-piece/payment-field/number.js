import React from 'react';
import {TextInput} from 'react-native-paper';
import {form} from '../../../assets/js-styles';
import {PRIMARY} from '../../../assets/theme';

const NumberField = props => {
  const handleChange = data => {
    props.setPayment({...props.payment, number: data});
  };

  return (
    <TextInput
      mode="outlined"
      label="Card Number"
      keyboardType={'numeric'}
      value={props.payment.number}
      maxLength={12}
      style={form.input}
      outlineColor={PRIMARY}
      onChangeText={event => handleChange(event)}
    />
  );
};

export default NumberField;
