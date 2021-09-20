import React from 'react';
import auth from '@react-native-firebase/auth';

const Login = props => {
  auth()
    .signInWithEmailAndPassword(props.email, props.password)
    .then(userInfo => {
      if (userInfo.user.emailVerified) {
        console.log('Verified');
      } else {
        console.log("You're not verfied!");
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export default Login;
