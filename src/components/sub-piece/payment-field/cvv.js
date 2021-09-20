import React from 'react';
import {TextInput} from 'react-native-paper';
import {PRIMARY} from '../../../assets/theme';
import {form} from '../../../assets/js-styles';

const CvvField = props => {
  const handleChange = data => {
    props.setState({...props.state, card: {...props.state.card, cvv: data}});
  };

  return (
    <TextInput
      mode="outlined"
      keyboardType={'numeric'}
      label="CVV"
      value={props.state.card.cvv}
      maxLength={3}
      style={form.cvv}
      outlineColor={PRIMARY}
      onChangeText={event => handleChange(event)}
    />
  );
};

export default CvvField;
