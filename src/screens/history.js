import React from 'react';
import {ScrollView} from 'react-native';
import Header from '../components/piece/header';
import SubText from '../components/sub-piece/ticket/sub-text';
import Ticket from '../components/piece/ticket';

const History = ({navigation}) => {
  return (
    <>
      <Header title="History" navigation={navigation} />
      <ScrollView>
        <SubText text="1 Week ago" />
        <Ticket />
      </ScrollView>
    </>
  );
};

export default History;
