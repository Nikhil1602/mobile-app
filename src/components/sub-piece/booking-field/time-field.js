import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import {form} from '../../../assets/js-styles';
import {PRIMARY} from '../../../assets/theme';
import {formatTime} from '../../../utils/functions';
import {TimePicker} from './picker';

const TimeField = props => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const handleChange = () => {
    formatTime(date);
  };

  const showTimepicker = () => {
    setShow(true);
  };

  return (
    <>
      <TouchableOpacity onPress={showTimepicker}>
        <TextInput
          mode="flat"
          label={'Time'}
          value={formatTime(date)}
          style={form.input}
          outlineColor={'#fff'}
          right={
            <TextInput.Icon
              onPress={showTimepicker}
              color={PRIMARY}
              name={'clock'}
            />
          }
          onChange={handleChange}
          disabled
        />
      </TouchableOpacity>
      <TimePicker
        show={show}
        setShow={setShow}
        state={props.state}
        setState={props.setState}
        date={date}
        setDate={setDate}
      />
    </>
  );
};

export default TimeField;
