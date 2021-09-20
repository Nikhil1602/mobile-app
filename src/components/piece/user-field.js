import React from 'react';
import {View} from 'react-native';
import {form} from '../../assets/js-styles';
import UserMail from '../sub-piece/user-field/mail';
import UserNumber from '../sub-piece/user-field/phone';

const UserField = props => {
  return (
    <View style={form.section}>
      <UserMail state={props.state} setState={props.setState} />
      <UserNumber state={props.state} setState={props.setState} />
    </View>
  );
};

export default UserField;
