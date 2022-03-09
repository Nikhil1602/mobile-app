import React from 'react';
import auth from '@react-native-firebase/auth';
import {handleLoginErrors} from '../../utils/functions';

const Login = (email, password, setShow) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(userInfo => {
      if (userInfo.user.emailVerified) {
        console.log('Verified');
      } else {
        setShow({
          alert: false,
          message: 'You are not verfied. Please check your mail !',
        });
      }
    })
    .catch(error => {
      handleLoginErrors(error, setShow);
    });
};

export default Login;
