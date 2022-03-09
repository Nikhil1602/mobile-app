import React, {useState} from 'react';
import {Text, ScrollView, View} from 'react-native';
import {form} from '../assets/js-styles';
import {Button} from 'react-native-paper';
import Header from '../components/piece/header';
import UserField from '../components/piece/user-field';
import VehicleField from '../components/piece/vehicle-field';
import BookingField from '../components/piece/booking-field';
import PaymentField from '../components/piece/payment-field';
import AlertBox from '../components/sub-piece/register/alert-box';
import {form_details} from '../utils/container';
import Database from '../backend/database';
import {handleForm, isFull} from '../utils/functions';

const AddBooking = ({navigation}) => {
  const [state, setState] = useState(form_details);
  const [show, setShow] = useState({
    alert: true,
    message: '',
  });

  const submitForm = () => {
    if (isFull(state)) {
      Database(state);
      handleForm(setShow, 1);
      setState(form_details);
    } else {
      handleForm(setShow, 0);
    }
  };

  const resetForm = () => {
    setState(form_details);
  };

  return (
    <>
      {show.alert ? (
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
                  onPress={resetForm}
                  mode="contained">
                  Reset
                </Button>
              </View>
            </View>
          </ScrollView>
        </>
      ) : (
        <AlertBox setShow={setShow} show={show} />
      )}
    </>
  );
};

export default AddBooking;
