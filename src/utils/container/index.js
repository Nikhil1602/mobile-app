import React from 'react';
import MyBookings from '../../screens/my-bookings';
import AddBooking from '../../screens/add-booking';
import Refunds from '../../screens/refunds';
import History from '../../screens/history';
import Feedback from '../../screens/feedback';
import Registration from '../../screens/registration';
import {Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import {account, feedback, refund} from '../../assets/js-styles';
import {DEFAULT_COLOR} from '../../assets/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

let [AreaRow, AreaCol, SlotCol, SlotRow] = [
  Array(2).fill(1),
  Array(2).fill(1),
  Array(2).fill(1),
  Array(2).fill(1),
];
// let AreaRow = Array(2).fill(1);
// let AreaCol = Array(2).fill(1);
// let SlotCol = Array(2).fill(1);
// let SlotRow = Array(2).fill(1);

const tabs = [
  {
    name: 'My Bookings',
    icon: 'dashboard',
    screen: MyBookings,
  },
  {
    name: 'Add Booking',
    icon: 'add-circle',
    screen: AddBooking,
  },
  {
    name: 'Refunds',
    icon: 'monetization-on',
    screen: Refunds,
  },
  {
    name: 'History',
    icon: 'low-priority',
    screen: History,
  },
  {
    name: 'Feedback',
    icon: 'assistant',
    screen: Feedback,
  },
  {
    name: 'Log Out',
    icon: 'exit-to-app',
    screen: Registration,
  },
];

const form_details = {
  user: {
    email: '',
    number: '',
  },

  vehicle: {
    type: 'two',
    number: '',
  },

  booking: {
    location: '',
    date: '',
    time: '',
    duration: '0.5',
    slot: '',
  },

  card: {
    name: '',
    number: '',
    cvv: '',
    validation: '',
    amount: '120.00',
  },
};

const account_details = {
  login: {
    subHead: 'Sign in to continue',
    showMail: false,
    button: 'Sign in',
    text: 'New User? ',
    link: 'Sign Up',
  },

  createAccount: {
    subHead: 'Create an account',
    showMail: true,
    button: 'Sign up',
    text: 'Have an account? ',
    link: 'Sign in',
  },
};

const user_icon = (
  <TextInput.Icon style={account.icon} color={DEFAULT_COLOR} name="account" />
);

const feedback_affix = (
  <TextInput.Affix textStyle={feedback.textarea_font} text="/500" />
);

const lock_icon = (
  <TextInput.Icon style={account.icon} color={DEFAULT_COLOR} name="lock" />
);

const mail_icon = (
  <TextInput.Icon style={account.icon} color={DEFAULT_COLOR} name="email" />
);

const star_empty = (
  <Icon name={'star-outline'} size={40} style={feedback.icon} />
);

const star_half = (
  <Icon name={'star-half-full'} size={40} style={feedback.icon} />
);

const star_full = <Icon name={'star'} size={40} style={feedback.icon} />;

const refund_text = <Text style={refund.status}>Refunded</Text>;

export {tabs, account_details, user_icon, form_details};
export {feedback_affix, lock_icon, mail_icon};
export {star_empty, star_half, star_full, refund_text};
export {AreaCol, AreaRow, SlotCol, SlotRow};
