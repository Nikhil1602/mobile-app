import React from 'react';
import {Appbar} from 'react-native-paper';
import {header} from '../../assets/js-styles';
import OpenDrawer from '../sub-piece/header/open-drawer';

const Header = props => {
  return (
    <Appbar.Header>
      <OpenDrawer navigation={props.navigation} />
      <Appbar.Content
        color={'#fff'}
        titleStyle={header.text}
        title={props.title}
      />
    </Appbar.Header>
  );
};

export default Header;
