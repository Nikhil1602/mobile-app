import React, {useState} from 'react';
import {Text, ScrollView, View} from 'react-native';
import {form} from '../assets/js-styles';
import {Button} from 'react-native-paper';
import Header from '../components/piece/header';
import UserField from '../components/piece/user-field';
import VehicleField from '../components/piece/vehicle-field';
import BookingField from '../components/piece/booking-field';
import PaymentField from '../components/piece/payment-field';
import {form_details} from '../utils/container';
import Database from '../backend/database';
import {isFull} from '../utils/functions';

const AddBooking = ({navigation}) => {
  const [state, setState] = useState(form_details);

  const submitForm = () => {
    if (isFull(state)) {
      Database(state);
    }
  };

  return (
    <>
      <Header title="Add Booking" navigation={navigation} />
      <ScrollView>
        <View style={form.container}>
          <Text style={form.title}>User Details</Text>
          <UserField state={state} setState={setState} />
          <Text style={form.title}>Vehicle Details</Text>
          <VehicleField state={state} setState={setState} />
          <Text style={form.title}>Booking Details</Text>
          <BookingField state={state} setState={setState} />
          <Text style={form.title}>Payment Details</Text>
          <PaymentField state={state} setState={setState} />
          <View style={form.button_group}>
            <Button
              style={form.button}
              labelStyle={form.button_font}
              onPress={submitForm}
              mode="contained">
              Submit
            </Button>
            <Button
              style={form.button}
              labelStyle={form.button_font}
              mode="contained">
              Reset
            </Button>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default AddBooking;
