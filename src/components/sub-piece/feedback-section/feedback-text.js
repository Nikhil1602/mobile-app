import React from 'react';
import {TextInput} from 'react-native-paper';
import {feedback} from '../../../assets/js-styles';
import {PRIMARY, DEFAULT_COLOR} from '../../../assets/theme';
import {feedback_affix} from '../../../utils/container';

const FeedbackText = props => {
  const handleChange = data => {
    props.setState({...props.state, text: data});
  };

  return (
    <TextInput
      mode="outlined"
      numberOfLines={15}
      value={props.state.text}
      multiline
      style={feedback.textarea}
      outlineColor={PRIMARY}
      label="Share Your Feedback"
      placeholder="Type here..."
      placeholderTextColor={DEFAULT_COLOR}
      onChangeText={data => handleChange(data)}
      right={feedback_affix}
    />
  );
};

export default FeedbackText;
