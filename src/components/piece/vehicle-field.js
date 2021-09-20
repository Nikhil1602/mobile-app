import React from 'react';
import {View} from 'react-native';
import {Caption} from 'react-native-paper';
import {form} from '../../assets/js-styles';
import VehicleType from '../sub-piece/vehicle-field/type';
import VehicleNumber from '../sub-piece/vehicle-field/number';

const VehicleField = props => {
  return (
    <View style={form.section}>
      <Caption style={form.caption}>Choose Type</Caption>
      <VehicleType state={props.state} setState={props.setState} />
      <VehicleNumber state={props.state} setState={props.setState} />
    </View>
  );
};

export default VehicleField;
