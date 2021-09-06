import React from 'react';
import {TextInput} from 'react-native-paper';
import {account} from '../../../assets/js-styles';
import {PRIMARY} from '../../../assets/theme';
import {lock_icon} from '../../../utils/container';

const UserPassword = props => {
  const [password, setPassword] = React.useState({
    icon: 'eye-off',
    show: true,
  });

  const change_icon = () => {
    if (password.show) {
      setPassword({
        icon: 'eye',
        show: false,
      });
    } else {
      setPassword({
        icon: 'eye-off',
        show: true,
      });
    }
  };

  const handleChange = lock => {
    props.setState({...props.state, password: lock});
  };

  return (
    <TextInput
      label="Password"
      mode="outlined"
      style={account.field}
      value={props.state.password}
      secureTextEntry={password.show}
      onChangeText={lock => handleChange(lock)}
      left={lock_icon}
      right={
        <TextInput.Icon
          color={PRIMARY}
          onPress={change_icon}
          name={password.icon}
        />
      }
      outlineColor={PRIMARY}
    />
  );
};

export default UserPassword;
