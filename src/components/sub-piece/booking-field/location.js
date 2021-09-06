import React from 'react';
import {Button} from 'react-native-paper';
import {form} from '../../../assets/js-styles';

const Location = props => {
  return (
    <Button style={form.locate} labelStyle={form.button_font} mode="contained">
      Locate Now
    </Button>
  );
};

export default Location;
