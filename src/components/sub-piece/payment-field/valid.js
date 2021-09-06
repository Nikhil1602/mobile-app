import React from 'react';
import {TextInput} from 'react-native-paper';
import {PRIMARY} from '../../../assets/theme';
import {form} from '../../../assets/js-styles';

const ValidationField = props => {
  const handleChange = data => {
    // data.length == 2
    //   ? props.setPayment({...props.payment, validation: data + '/'})
    //   : props.setPayment({...props.payment, validation: data});
    data = data.length == 2 ? `${data}/` : data;
    props.setPayment({...props.payment, validation: data});
  };

  return (
    <TextInput
      mode="outlined"
      label="Valid Through"
      keyboardType={'numeric'}
      value={props.payment.validation}
      style={form.valid}
      maxLength={5}
      outlineColor={PRIMARY}
      onChangeText={event => handleChange(event)}
    />
  );
};

export default ValidationField;
