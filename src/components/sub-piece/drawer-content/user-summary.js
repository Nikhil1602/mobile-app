import React from 'react';
import {View} from 'react-native';
import {Title, Caption} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {drawer} from '../../../assets/js-styles';

const UserSummary = () => {
  return (
    <View style={drawer.user_container}>
      <View style={drawer.user_detail}>
        <Icon name="account-circle" style={drawer.user_icon} size={40} />
        <View style={drawer.user_info}>
          <Title style={drawer.user_name}>John Carter</Title>
          <Caption style={drawer.user_mail}>john123@gmail.com</Caption>
        </View>
      </View>
    </View>
  );
};

export default UserSummary;
