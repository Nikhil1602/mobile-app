import React from 'react';
import {View} from 'react-native';
import {Caption} from 'react-native-paper';
import {form} from '../../assets/js-styles';
import DateField from '../sub-piece/booking-field/date-field';
import DurationField from '../sub-piece/booking-field/duration';
import Location from '../sub-piece/booking-field/location';
import SlotField from '../sub-piece/booking-field/slot';
import TimeField from '../sub-piece/booking-field/time-field';

const BookingField = props => {
  return (
    <View style={form.section}>
      <View>
        <Caption style={form.caption}>Select Location</Caption>
        <Location state={props.state} setState={props.setState} />
        <DateField state={props.state} setState={props.setState} />
        <TimeField state={props.state} setState={props.setState} />
        <DurationField state={props.state} setState={props.setState} />
        <SlotField state={props.state} setState={props.setState} />
      </View>
    </View>
  );
};

export default BookingField;
