import React from 'react';
import {feedback} from '../../assets/js-styles';
import {View} from 'react-native';
import {Caption} from 'react-native-paper';
import Ratings from '../sub-piece/feedback-section/ratings';
import FeedbackText from '../sub-piece/feedback-section/feedback-text';

const FeedbackSection = props => {
  return (
    <View style={feedback.section}>
      <Caption style={feedback.text}>How did you like our app?</Caption>
      <Ratings state={props.state} setState={props.setState} />
      <FeedbackText state={props.state} setState={props.setState} />
    </View>
  );
};

export default FeedbackSection;
