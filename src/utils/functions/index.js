import React from 'react';
import {active, drawer} from '../../assets/js-styles';
import HideData from '../../components/sub-piece/ticket/hide-button';
import DetailButton from '../../components/sub-piece/ticket/button';

const navigate = (navigation, tab) => {
  return navigation.navigate(tab.name);
};

const is_active = (value, index, string) => {
  if (string === 'tab') {
    if (value === index) {
      return active.tab;
    }
    return drawer.tab;
  } else if (string === 'icon') {
    if (value === index) {
      return active.tab_icon;
    }
    return drawer.tab_icon;
  } else if (string === 'name') {
    if (value === index) {
      return active.tab_name;
    }
    return drawer.tab_name;
  }
};

const show_unshow = (show, state, setState) => {
  if (show) {
    return <HideData />;
  }
  return <DetailButton state={state} setState={setState} />;
};

const generateName = n => {
  let x = n < 10 ? `S0${n++}` : `S${n++}`;
  return x;
};

const formatDate = date => {
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  let yyyy = date.getFullYear();
  let temp = '';

  temp += dd < 10 ? `0${dd}` : dd;
  temp += '/';
  temp += mm < 10 ? `0${mm}` : mm;
  temp += '/' + yyyy;

  return temp;
};

const formatTime = time => {
  let hour = time.getHours();
  let min = time.getMinutes();
  let temp = '';

  temp += hour > 12 ? hour - 12 : hour;
  if (hour == 0) temp = '12';
  temp += (min < 10 ? ':0' : ':') + min;
  temp += hour >= 12 ? ' pm' : ' am';

  return temp;
};

const isFull = data => {
  if (
    data.user.email != '' &&
    data.user.password != '' &&
    data.vehicle.number != '' &&
    data.booking.date != '' &&
    data.booking.time != '' &&
    data.booking.slot != '' &&
    data.card.name != '' &&
    data.card.number != '' &&
    data.card.cvv != '' &&
    data.card.validation != ''
  ) {
    return true;
  }
  return false;
};

const handleLoginErrors = (error, setShow) => {
  if (error.code == 'auth/wrong-password') {
    setShow({alert: false, message: 'Wrong password try again !!'});
  } else if (error.code == 'auth/network-request-failed') {
    setShow({alert: false, message: 'Your are offline !!'});
  } else if (error.code == 'auth/invalid-email') {
    setShow({alert: false, message: 'Email is not valid !!'});
  } else if (error.code == 'auth/user-not-found') {
    setShow({alert: false, message: 'User does not exists !!'});
  } else if (error.code == 'auth/email-already-in-use') {
    setShow({alert: false, message: 'User already exists !!'});
  } else {
    setShow({alert: false, message: 'Something went wrong !!'});
    console.log(error);
  }
};

const handleForm = (setShow, value) => {
  if (value) {
    setShow({alert: false, message: 'Booking done !!'});
  } else {
    setShow({alert: false, message: 'Something missing in the form !!'});
  }
};

export {navigate, is_active, show_unshow, isFull};
export {generateName, formatDate, formatTime};
export {handleLoginErrors, handleForm};
