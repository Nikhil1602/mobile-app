import React from 'react';
import {TextInput} from 'react-native-paper';
import {account} from '../../../assets/js-styles';
import {PRIMARY} from '../../../assets/theme';
import {mail_icon} from '../../../utils/container';

const UserMail = props => {
  const handleChange = text => {
    props.setState({...props.state, email: text});
  };

  return (
    <TextInput
      label="Email"
      mode="outlined"
      style={account.field}
      value={props.state.email}
      onChangeText={text => handleChange(text)}
      left={mail_icon}
      outlineColor={PRIMARY}
    />
  );
};

export default UserMail;
