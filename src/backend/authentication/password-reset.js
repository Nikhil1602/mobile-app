import React from 'react';
import auth from '@react-native-firebase/auth';
import {handleLoginErrors} from '../../utils/functions';

const PasswordReset = (email, setShow) => {
  auth
    .sendPasswordResetEmail(email)
    .then(() => {
      setShow({alert: false, message: 'Mail sent successfully!'});
    })
    .catch(error => {
      handleLoginErrors(error, setShow);
    });
};

export default PasswordReset;
