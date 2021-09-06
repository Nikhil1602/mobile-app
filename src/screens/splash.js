import React from 'react';
import {View, Text} from 'react-native';
import {splash} from '../assets/js-styles';

const SplashScreen = () => {
  return (
    <>
      <View style={splash.container}>
        <View style={splash.triangle_top}></View>
        <View style={splash.circle}>
          <Text style={splash.text}>P</Text>
        </View>
      </View>
      <View style={splash.triangle_bottom}></View>
    </>
  );
};

export default SplashScreen;
