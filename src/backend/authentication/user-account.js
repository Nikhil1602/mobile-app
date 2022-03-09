import React from 'react';
import auth from '@react-native-firebase/auth';
import {handleLoginErrors} from '../../utils/functions';

const updateName = (user, userName) => {
  user.updateProfile({
    displayName: userName,
  });
};

const sendVerification = (user, setState) => {
  user
    .sendEmailVerification()
    .then(() => {
      setState({alert: false, message: 'Verification mail sent successfully!'});
    })
    .catch(() => {
      setState({alert: false, message: 'Unable to send verification mail!'});
    });
};

const createAccount = (state, setShow) => {
  auth()
    .createUserWithEmailAndPassword(state.email, state.password)
    .then(userInfo => {
      updateName(userInfo.user, state.user);
      sendVerification(userInfo.user, setShow);
      // auth().signOut();
    })
    .catch(error => {
      handleLoginErrors(error, setShow);
    });
};

export default createAccount;
