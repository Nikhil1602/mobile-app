import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import {form} from '../../../assets/js-styles';
import {PRIMARY} from '../../../assets/theme';
import {formatDate} from '../../../utils/functions';
import {DatePicker} from './picker';

const DateField = props => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const handleDate = () => {
    formatDate(date);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <>
      <TouchableOpacity onPress={showDatepicker}>
        <TextInput
          mode="flat"
          label={'Date'}
          value={formatDate(date)}
          style={form.input}
          outlineColor={'#fff'}
          right={
            <TextInput.Icon
              onPress={showDatepicker}
              color={PRIMARY}
              name={'calendar'}
            />
          }
          onChange={handleDate}
          disabled
        />
      </TouchableOpacity>
      <DatePicker
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

export default DateField;
