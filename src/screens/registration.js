import React from 'react';
import {ScrollView} from 'react-native';
import BottomArea from '../components/piece/bottom-area';
import Logo from '../components/piece/logo';
import Register from '../components/piece/register';
import {account_details} from '../utils/container';

const Registration = () => {
  const [state, setState] = React.useState({
    user: '',
    email: '',
    password: '',
  });

  const [changes, setChanges] = React.useState(account_details.login);

  return (
    <>
      <ScrollView>
        <Logo />
        <Register
          changes={changes}
          setChanges={setChanges}
          state={state}
          setState={setState}
        />
      </ScrollView>
      <BottomArea changes={changes} setChanges={setChanges} />
    </>
  );
};

export default Registration;
