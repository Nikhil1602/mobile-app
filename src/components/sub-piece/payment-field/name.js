import React from 'react';
import {TextInput} from 'react-native-paper';
import {form} from '../../../assets/js-styles';
import {PRIMARY} from '../../../assets/theme';

const HolderName = props => {
  const handleChange = data => {
    props.setState({...props.state, card: {...props.state.card, name: data}});
  };

  return (
    <TextInput
      mode="outlined"
      label="Name on Card"
      value={props.state.card.name}
      style={form.input}
      outlineColor={PRIMARY}
      onChangeText={event => handleChange(event)}
    />
  );
};

export default HolderName;
