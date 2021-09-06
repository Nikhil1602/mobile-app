import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import Header from '../components/piece/header';
import {feedback} from '../assets/js-styles';
import FeedbackSection from '../components/piece/feedback-section';
import ButtonGroup from '../components/piece/button-group';

const Feedback = ({navigation}) => {
  const [state, setState] = React.useState({
    text: '',
    rate: 3.5,
  });

  return (
    <>
      <Header title="Feedback" navigation={navigation} />
      <ScrollView>
        <View style={feedback.container}>
          <Text style={feedback.title}>Share your feedback</Text>
          <FeedbackSection state={state} setState={setState} />
          <ButtonGroup state={state} setState={setState} />
        </View>
      </ScrollView>
    </>
  );
};

export default Feedback;
