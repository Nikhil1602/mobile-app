import React from 'react';
import {TextInput} from 'react-native-paper';
import {PRIMARY} from '../../../assets/theme';
import {form} from '../../../assets/js-styles';

const VehicleNumber = props => {
  const handleChange = value => {
    props.setVehicle({...props.vehicle, number: value});
  };

  return (
    <TextInput
      mode="outlined"
      label="Vehicle Number"
      value={props.vehicle.number}
      maxLength={10}
      style={form.input}
      outlineColor={PRIMARY}
      onChangeText={value => handleChange(value)}
    />
  );
};

export default VehicleNumber;
