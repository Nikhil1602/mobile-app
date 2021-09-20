import React from 'react';
import firestore from '@react-native-firebase/firestore';

const Database = data => {
  firestore()
    .collection('User-Database')
    .doc('user-data')
    .set(data)
    .then(() => {
      console.log('Document successfully written!');
    })
    .catch(error => {
      console.error('Error writing document: ', error);
    });
};

export default Database;
