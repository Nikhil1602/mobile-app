import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {tabs} from '../utils/container';
import DrawerContent from '../components/piece/drawer-content';

const Navigation = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      {tabs.map((tab, ind) => {
        return (
          <Drawer.Screen name={tab.name} key={ind} component={tab.screen} />
        );
      })}
    </Drawer.Navigator>
  );
};

export default Navigation;
