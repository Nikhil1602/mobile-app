import React from 'react';
import {View} from 'react-native';
import Stars from 'react-native-stars';
import {feedback} from '../../../assets/js-styles';
import {star_empty, star_full, star_half} from '../../../utils/container';

const Ratings = props => {
  const handleChange = value => {
    props.setState({...props.state, rate: value});
  };

  return (
    <View style={feedback.ratings}>
      <Stars
        rating={props.state.rate}
        update={value => handleChange(value)}
        count={5}
        half={true}
        starSize={50}
        fullStar={star_full}
        emptyStar={star_empty}
        halfStar={star_half}
      />
    </View>
  );
};

export default Ratings;
