import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {formatDate, formatTime} from '../../../utils/functions';

const DatePicker = props => {
  const handleChange = (event, selectedDate) => {
    const currentDate = selectedDate || props.date;
    props.setShow(false);
    props.setDate(currentDate);
    props.setBooking({...props.booking, date: formatDate(currentDate)});
  };

  return (
    <>
      {props.show && (
        <DateTimePicker
          minimumDate={new Date()}
          value={props.date}
          onChange={handleChange}
          mode="date"
        />
      )}
    </>
  );
};

const TimePicker = props => {
  const handleChange = (event, selectedDate) => {
    const currentDate = selectedDate || props.date;
    props.setShow(false);
    props.setDate(currentDate);
    props.setBooking({...props.booking, time: formatTime(currentDate)});
  };

  return (
    <>
      {props.show && (
        <DateTimePicker
          value={props.date}
          onChange={handleChange}
          mode="time"
        />
      )}
    </>
  );
};

export {DatePicker, TimePicker};
