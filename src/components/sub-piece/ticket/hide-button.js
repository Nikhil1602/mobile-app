import React from 'react';
import {Caption} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {refund} from '../../../assets/js-styles';

const HideData = () => {
  return (
    <>
      <Icon name="car" style={refund.car_icon} size={25} />
      <Caption style={refund.amount}>₹150</Caption>
    </>
  );
};

export default HideData;
