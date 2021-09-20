import React from 'react';
import auth from '@react-native-firebase/auth';

const PasswordReset = email => {
  auth
    .sendPasswordResetEmail(email)
    .then(() => {
      console.log('Mail sent successfully!');
    })
    .catch(error => {
      console.log(error);
    });
};

export default PasswordReset;
