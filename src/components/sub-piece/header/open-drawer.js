import React from 'react';
import {Appbar} from 'react-native-paper';

const OpenDrawer = props => {
  const open_drawer = () => {
    props.navigation.openDrawer();
  };

  return <Appbar.Action color={'#fff'} icon="menu" onPress={open_drawer} />;
};

export default OpenDrawer;
