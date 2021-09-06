import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation';
import {Provider as PaperProvider} from 'react-native-paper';
import theme from './src/assets/theme';

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Navigation />
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
