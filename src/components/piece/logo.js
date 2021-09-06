import React from 'react';
import {View, Text} from 'react-native';
import {account} from '../../assets/js-styles';

const Logo = () => {
  return (
    <View style={account.logo} elevation={20}>
      <View style={account.circle}>
        <Text style={account.name}>P</Text>
      </View>
    </View>
  );
};

export default Logo;
