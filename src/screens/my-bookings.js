import React from 'react';
import {ScrollView} from 'react-native';
import Header from '../components/piece/header';
import Ticket from '../components/piece/ticket';
import SubText from '../components/sub-piece/ticket/sub-text';

const MyBookings = ({navigation}) => {
  return (
    <>
      <Header title="My Bookings" navigation={navigation} />
      <ScrollView>
        <SubText text="2 bookings found!" />
        <Ticket />
        <Ticket />
      </ScrollView>
    </>
  );
};

export default MyBookings;
