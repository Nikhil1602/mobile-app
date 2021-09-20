import React from 'react';
import auth from '@react-native-firebase/auth';

const updateName = (user, userName) => {
  user.updateProfile({
    displayName: userName,
  });
};

const sendVerification = user => {
  user
    .sendEmailVerification()
    .then(() => {
      console.log('Verification sent successfully!');
    })
    .catch(() => {
      console.log('Unable to send verification!');
    });
};

const createAccount = props => {
  auth()
    .createUserWithEmailAndPassword(props.email, props.password)
    .then(userInfo => {
      updateName(userInfo.user, props.user);
      sendVerification(userInfo.user);
      auth().signOut();
    })
    .catch(error => {
      console.log(error);
    });
};

export default createAccount;
