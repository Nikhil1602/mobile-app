import React from 'react';
import {TextInput} from 'react-native-paper';
import {form} from '../../../assets/js-styles';
import {PRIMARY} from '../../../assets/theme';

const HolderName = props => {
  const handleChange = data => {
    props.setPayment({...props.payment, name: data});
  };

  return (
    <TextInput
      mode="outlined"
      label="Name on Card"
      value={props.payment.name}
      style={form.input}
      outlineColor={PRIMARY}
      onChangeText={event => handleChange(event)}
    />
  );
};

export default HolderName;
