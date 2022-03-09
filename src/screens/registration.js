import React from 'react';
import {ScrollView} from 'react-native';
import BottomArea from '../components/piece/bottom-area';
import Logo from '../components/piece/logo';
import Register from '../components/piece/register';
import AlertBox from '../components/sub-piece/register/alert-box';
import {account_details} from '../utils/container';

const Registration = () => {
  const [state, setState] = React.useState({
    user: '',
    email: '',
    password: '',
  });

  const [changes, setChanges] = React.useState(account_details.login);
  const [show, setShow] = React.useState({
    alert: true,
    message: '',
  });

  return (
    <>
      {show.alert ? (
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
          <BottomArea
            state={state}
            setState={setState}
            changes={changes}
            setChanges={setChanges}
            show={show}
            setShow={setShow}
          />
        </>
      ) : (
        <AlertBox setShow={setShow} show={show} />
      )}
    </>
  );
};

export default Registration;
