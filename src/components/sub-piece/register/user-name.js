import React from 'react';
import {TextInput} from 'react-native-paper';
import {account} from '../../../assets/js-styles';
import {PRIMARY} from '../../../assets/theme';
import {user_icon} from '../../../utils/container';

const UserName = props => {
  const handleChange = text => {
    props.setState({...props.state, user: text});
  };

  return (
    <TextInput
      label="Username"
      mode="outlined"
      style={account.field}
      value={props.state.user}
      onChangeText={text => handleChange(text)}
      left={user_icon}
      outlineColor={PRIMARY}
    />
  );
};

export default UserName;
