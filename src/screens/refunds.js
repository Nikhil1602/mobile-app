import React from 'react';
import {View, ScrollView} from 'react-native';
import {ticket} from '../assets/js-styles';
import Header from '../components/piece/header';
import LeftData from '../components/sub-piece/ticket/left-data';
import RightData from '../components/sub-piece/ticket/right-data';
import SubText from '../components/sub-piece/ticket/sub-text';

const Refunds = ({navigation}) => {
  return (
    <>
      <Header title="Refunds" navigation={navigation} />
      <ScrollView>
        <SubText text="1 Week ago" />
        <View style={ticket.container}>
          <View style={ticket.border}>
            <View style={ticket.data}>
              <LeftData state={true} />
              <RightData show={true} />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Refunds;
