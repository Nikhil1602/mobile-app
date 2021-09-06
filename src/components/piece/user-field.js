import React, {useState} from 'react';
import {form_details} from '../../utils/container';
import {View} from 'react-native';
import {form} from '../../assets/js-styles';
import UserMail from '../sub-piece/user-field/mail';
import UserNumber from '../sub-piece/user-field/phone';

const UserField = () => {
  const [user, setUser] = useState(form_details.user);
  return (
    <View style={form.section}>
      <UserMail user={user} setUser={setUser} />
      <UserNumber user={user} setUser={setUser} />
    </View>
  );
};

export default UserField;
