import React, {useState} from 'react';
import {View} from 'react-native';
import {Caption} from 'react-native-paper';
import {form} from '../../assets/js-styles';
import {form_details} from '../../utils/container';
import DateField from '../sub-piece/booking-field/date-field';
import DurationField from '../sub-piece/booking-field/duration';
import Location from '../sub-piece/booking-field/location';
import SlotField from '../sub-piece/booking-field/slot';
import TimeField from '../sub-piece/booking-field/time-field';

const BookingField = () => {
  const [booking, setBooking] = useState(form_details.booking);

  return (
    <View style={form.section}>
      <View>
        <Caption style={form.caption}>Select Location</Caption>
        <Location booking={booking} setBooking={setBooking} />
        <DateField booking={booking} setBooking={setBooking} />
        <TimeField booking={booking} setBooking={setBooking} />
        <DurationField booking={booking} setBooking={setBooking} />
        <SlotField booking={booking} setBooking={setBooking} />
      </View>
    </View>
  );
};

export default BookingField;
