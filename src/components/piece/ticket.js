import React, {useState} from 'react';
import {View} from 'react-native';
import {dashboard, ticket} from '../../assets/js-styles';
import LeftData from '../sub-piece/ticket/left-data';
import RightData from '../sub-piece/ticket/right-data';
import CroppedBorder from '../sub-piece/ticket/cropped-border';
import ExpandTicket from '../sub-piece/ticket/expand-ticket';

const Ticket = () => {
  const [state, setState] = useState(true);

  return (
    <View style={ticket.container}>
      <View style={ticket.border}>
        {state ? null : <CroppedBorder />}
        <View style={ticket.data}>
          <LeftData state={false} />
          <RightData state={state} setState={setState} show={false} />
        </View>
        {state ? null : <ExpandTicket state={state} setState={setState} />}
      </View>
    </View>
  );
};

export default Ticket;
