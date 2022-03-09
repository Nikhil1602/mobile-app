import React from 'react';
import {Button} from 'react-native-paper';
import MapView from 'react-native-maps';
import {form} from '../../../assets/js-styles';

const Location = props => {
  const [show, setShow] = React.useState(true);
  const handleShow = () => {
    setShow(false);
  };
  return (
    <>
      {show ? (
        <Button
          style={form.locate}
          labelStyle={form.button_font}
          onPress={handleShow}
          mode="contained">
          Locate Now
        </Button>
      ) : (
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      )}
    </>
  );
};

export default Location;
