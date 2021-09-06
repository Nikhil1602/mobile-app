import React from 'react';
import {View} from 'react-native';
import {dashboard} from '../../../assets/js-styles';
import {BookingData, UserData, VehicleData} from './data';
import {GroupLeft, GroupRight} from './data';

const ExpandTicket = props => {
  return (
    <View style={dashboard.expand_container}>
      <View style={dashboard.expand}>
        <UserData />
        <VehicleData />
      </View>
      <View style={dashboard.expand}>
        <BookingData />
      </View>
      <View style={dashboard.expand}>
        <View style={dashboard.group_left}>
          <GroupLeft />
        </View>
        <View style={dashboard.group_right}>
          <GroupRight setState={props.setState} />
        </View>
      </View>
    </View>
  );
};

export default ExpandTicket;
