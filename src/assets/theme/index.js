import {DefaultTheme} from 'react-native-paper';

const PRIMARY = '#00ff34';
const SECONDARY = '#DDFDE5';
const DEFAULT_COLOR = '#888888';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00ff34',
  },
};

export default theme;
export {PRIMARY, SECONDARY, DEFAULT_COLOR};
