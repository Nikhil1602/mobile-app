import React from 'react';
import {Text, View} from 'react-native';
import ForgotLink from '../sub-piece/register/forgot-password';
import UserMail from '../sub-piece/register/user-mail';
import UserName from '../sub-piece/register/user-name';
import UserPassword from '../sub-piece/register/user-password';
import {account} from '../../assets/js-styles';

const Register = props => {
  return (
    <View>
      <Text style={account.greeting}>{props.changes.head}</Text>
      <Text style={account.sub_head}>{props.changes.subHead}</Text>
      <UserName
        state={props.state}
        changes={props.changes}
        setState={props.setState}
      />
      <UserMail state={props.state} setState={props.setState} />
      <UserPassword state={props.state} setState={props.setState} />
      {props.changes.button == 'Sign in' ? (
        <ForgotLink
          state={props.state}
          changes={props.changes}
          setChanges={props.setChanges}
          setState={props.setState}
        />
      ) : null}
    </View>
  );
};

export default Register;
