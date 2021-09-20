import React from 'react';
import {Caption} from 'react-native-paper';
import {account} from '../../../assets/js-styles';
import {account_details} from '../../../utils/container';

const ForgotLink = props => {
  const handleChange = () => {
    props.setChanges(account_details.forgotPassword);
  };

  return (
    <>
      {props.changes.showMail ? null : (
        <Caption
          style={[account.link, account.forgot_link]}
          // onPress={() => Linking.openURL('http://google.com')}
          onPress={handleChange}>
          Forgot Password?
        </Caption>
      )}
    </>
  );
};

export default ForgotLink;
