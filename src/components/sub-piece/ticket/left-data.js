import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ticket} from '../../../assets/js-styles';
import {refund_text} from '../../../utils/container';

const LeftData = props => {
  return (
    <>
      <Icon name="check-circle" style={ticket.check} size={25} />
      <View style={ticket.place_detail}>
        <Text style={ticket.place_name}>Crystal Mall</Text>
        <Text style={ticket.place_address}>JAM, GU - 361005</Text>
        {props.state ? refund_text : null}
      </View>
    </>
  );
};

export default LeftData;
