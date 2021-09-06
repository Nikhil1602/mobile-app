import React, {useState} from 'react';
import {View} from 'react-native';
import {Caption} from 'react-native-paper';
import {form_details} from '../../utils/container';
import {form} from '../../assets/js-styles';
import VehicleType from '../sub-piece/vehicle-field/type';
import VehicleNumber from '../sub-piece/vehicle-field/number';

const VehicleField = () => {
  const [vehicle, setVehicle] = useState(form_details.vehicle);

  return (
    <View style={form.section}>
      <Caption style={form.caption}>Choose Type</Caption>
      <VehicleType vehicle={vehicle} setVehicle={setVehicle} />
      <VehicleNumber vehicle={vehicle} setVehicle={setVehicle} />
    </View>
  );
};

export default VehicleField;
