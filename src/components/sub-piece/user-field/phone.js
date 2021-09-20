import React from 'react';
import {TextInput} from 'react-native-paper';
import {form} from '../../../assets/js-styles';
import {PRIMARY} from '../../../assets/theme';

const UserNumber = props => {
  const handleChange = text => {
    props.setState({...props.state, user: {...props.state.user, number: text}});
  };

  return (
    <TextInput
      mode="outlined"
      label="Phone Number"
      value={props.state.user.number}
      maxLength={10}
      keyboardType={'numeric'}
      style={form.input}
      outlineColor={PRIMARY}
      onChangeText={text => handleChange(text)}
    />
  );
};

export default UserNumber;
