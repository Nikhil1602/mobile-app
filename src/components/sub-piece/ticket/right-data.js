import React from 'react';
import {ticket} from '../../../assets/js-styles';
import {View, Text} from 'react-native';
import {show_unshow} from '../../../utils/functions';

const RightData = props => {
  return (
    <View style={ticket.right_data}>
      <Text style={ticket.right_text}>23rd April, 2021</Text>
      <Text style={ticket.right_text}>10.15 a.m</Text>
      {show_unshow(props.show, props.state, props.setState)}
    </View>
  );
};

export default RightData;
