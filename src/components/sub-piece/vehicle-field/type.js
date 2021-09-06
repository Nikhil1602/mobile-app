import React from 'react';
import {RadioButton} from 'react-native-paper';
import {form} from '../../../assets/js-styles';
import {PRIMARY} from '../../../assets/theme';

const VehicleType = props => {
  const handleChange = value => {
    props.setVehicle({...props.vehicle, type: value});
  };

  return (
    <RadioButton.Group
      onValueChange={value => handleChange(value)}
      value={props.vehicle.type}>
      <RadioButton.Item
        color={PRIMARY}
        labelStyle={form.type_font}
        label="Two-Wheeler"
        value="two"
      />
      <RadioButton.Item
        color={PRIMARY}
        labelStyle={form.type_font}
        label="Three-Wheeler"
        value="three"
      />
      <RadioButton.Item
        color={PRIMARY}
        labelStyle={form.type_font}
        label="Four-Wheeler"
        value="four"
      />
    </RadioButton.Group>
  );
};

export default VehicleType;
