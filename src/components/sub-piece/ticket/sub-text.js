import React from 'react';
import {ticket} from '../../../assets/js-styles';
import {Text} from 'react-native';

const SubText = props => {
  return <Text style={ticket.text}>{props.text}</Text>;
};

export default SubText;
