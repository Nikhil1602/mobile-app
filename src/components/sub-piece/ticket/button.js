import React from 'react';
import {dashboard} from '../../../assets/js-styles';
import {Button} from 'react-native-paper';

const DetailButton = props => {
  const expand = () => {
    props.setState(false);
  };

  return (
    <>
      {props.state ? (
        <Button
          mode="outlined"
          onPress={expand}
          labelStyle={dashboard.show_detail}
          style={dashboard.show_detail}>
          View Details
        </Button>
      ) : null}
    </>
  );
};

export default DetailButton;
