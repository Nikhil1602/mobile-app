import React from 'react';
import {View} from 'react-native';
import {Caption} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import {form} from '../../../assets/js-styles';

const DurationField = props => {
  const passValue = value => {
    props.setState({
      ...props.state,
      booking: {...props.state.booking, duration: value},
    });
  };

  return (
    <View>
      <Caption style={form.caption}>Choose Duration</Caption>
      <View style={form.picker_container}>
        <Picker
          selectedValue={props.state.booking.duration}
          style={form.picker}
          onValueChange={(item, index) => passValue(item)}>
          <Picker.Item label="half-an-hour" value="0.5" />
          <Picker.Item label="1-hour" value="1" />
          <Picker.Item label="2-hour" value="2" />
          <Picker.Item label="3-hour" value="3" />
          <Picker.Item label="4-hour" value="4" />
          <Picker.Item label="5-hour" value="5" />
          <Picker.Item label="6-hour" value="6" />
          <Picker.Item label="7-hour" value="7" />
          <Picker.Item label="8-hour" value="8" />
          <Picker.Item label="9-hour" value="9" />
          <Picker.Item label="10-hour" value="10" />
          <Picker.Item label="11-hour" value="11" />
          <Picker.Item label="12-hour" value="12" />
        </Picker>
      </View>
    </View>
  );
};

export default DurationField;
