import React from 'react';
import {TextInput} from 'react-native-paper';
import {form} from '../../../assets/js-styles';
import {PRIMARY} from '../../../assets/theme';

const UserMail = props => {
  const handleChange = text => {
    props.setState({...props.state, user: {...props.state.user, email: text}});
  };

  return (
    <TextInput
      mode="outlined"
      label="Email address"
      value={props.state.user.email}
      outlineColor={PRIMARY}
      style={form.input}
      onChangeText={text => handleChange(text)}
    />
  );
};

export default UserMail;
