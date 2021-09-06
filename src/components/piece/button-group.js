import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import {feedback} from '../../assets/js-styles';

const ButtonGroup = props => {
  return (
    <View style={feedback.button_group}>
      <Button
        labelStyle={feedback.button_text}
        style={feedback.button}
        mode="contained">
        Submit
      </Button>
      <Button
        labelStyle={feedback.button_text}
        style={feedback.button}
        mode="contained">
        Reset
      </Button>
    </View>
  );
};

export default ButtonGroup;
