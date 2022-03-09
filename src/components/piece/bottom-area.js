import React from 'react';
import {View} from 'react-native';
import {Button, Caption} from 'react-native-paper';
import {account} from '../../assets/js-styles';
import createAccount from '../../backend/authentication/user-account';
import Login from '../../backend/authentication/user-login';
import PasswordReset from '../../backend/authentication/password-reset';
import {account_details} from '../../utils/container';

const BottomArea = props => {
  const handleChange = () => {
    if (props.changes.showMail) {
      props.setChanges(account_details.login);
    } else {
      props.setChanges(account_details.createAccount);
    }
  };

  const submitForm = () => {
    if (props.state.email != '' && props.state.password != '') {
      if (props.changes.button == 'Sign in') {
        Login(props.state.email, props.state.password, props.setShow);
      } else if (props.changes.button == 'Sign up') {
        props.state.user != ''
          ? createAccount(props.state, props.setShow)
          : null;
      } else {
        PasswordReset(props.state.email, props.setShow);
      }
    } else {
      props.setShow({alert: false, message: 'Please fill the details !!'});
    }
  };

  return (
    <View>
      <Button
        style={account.submit_button}
        labelStyle={account.button_font}
        onPress={submitForm}
        mode="contained">
        {props.changes.button}
      </Button>
      <Caption style={account.text}>
        {props.changes.text}
        <Caption
          style={account.link}
          // onPress={() => Linking.openURL('http://google.com')}
          onPress={handleChange}>
          {props.changes.link}
        </Caption>
      </Caption>
    </View>
  );
};

export default BottomArea;
