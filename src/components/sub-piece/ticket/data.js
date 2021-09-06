import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {dashboard} from '../../../assets/js-styles';

const UserData = () => {
  return (
    <View style={dashboard.expand_details}>
      <Text style={dashboard.detail_title}>User Info</Text>
      <Text style={dashboard.data}>Name: John Carter</Text>
      <Text style={dashboard.data}>UPN: VZ120Rx413</Text>
      <Text style={dashboard.data}>Phone: 9876543210</Text>
    </View>
  );
};

const VehicleData = () => {
  return (
    <View style={dashboard.expand_details}>
      <Text style={dashboard.detail_title}>Vehicle Info</Text>
      <Text style={dashboard.data}>Type: Four-wheeler</Text>
      <Text style={dashboard.data}>No.: GJ10BK1234</Text>
      <Text style={dashboard.data}>Status: Pending</Text>
    </View>
  );
};

const BookingData = () => {
  return (
    <>
      <View style={dashboard.expand_details}>
        <Text style={dashboard.detail_title}>Booking Info</Text>
        <Text style={dashboard.data}>Date: 03/05/2021</Text>
        <Text style={dashboard.data}>Time: 03.00 p.m.</Text>
      </View>
      <View style={dashboard.expand_details}>
        <Text style={dashboard.detail_title}></Text>
        <Text style={dashboard.data}>Time Slot: 4 Hours</Text>
        <Text style={dashboard.data}>Slot No.: 3</Text>
      </View>
    </>
  );
};

const GroupLeft = () => {
  return (
    <>
      <Button
        style={dashboard.buttons}
        labelStyle={dashboard.buttons}
        mode="outlined">
        Tracking
      </Button>
      <Button
        style={dashboard.buttons}
        labelStyle={dashboard.buttons}
        mode="outlined">
        E-Receipt
      </Button>
    </>
  );
};

const GroupRight = props => {
  const handleChange = () => {
    props.setState(true);
  };

  return (
    <>
      <Button
        style={dashboard.buttons}
        labelStyle={dashboard.buttons}
        mode="outlined">
        Cancellation
      </Button>
      <Button onPress={handleChange} style={dashboard.buttons} mode="outlined">
        Hide Details
      </Button>
    </>
  );
};

export {UserData, VehicleData, BookingData};
export {GroupLeft, GroupRight};
