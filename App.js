import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation';
import {Provider as PaperProvider} from 'react-native-paper';
import theme from './src/assets/theme';
import auth from '@react-native-firebase/auth';
import Registration from './src/screens/registration';

const App = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user && user.emailVerified) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, [show]);

  return (
    <>
      {show ? (
        <NavigationContainer>
          <PaperProvider theme={theme}>
            <Navigation />
          </PaperProvider>
        </NavigationContainer>
      ) : (
        <PaperProvider theme={theme}>
          <Registration />
        </PaperProvider>
      )}
    </>
  );
};

export default App;
