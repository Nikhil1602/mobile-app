import React from 'react';
import {View} from 'react-native';
import {Drawer} from 'react-native-paper';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {drawer} from '../../assets/js-styles';
import UserSummary from '../sub-piece/drawer-content/user-summary';
import DrawerTabs from '../sub-piece/drawer-content/drawer-tabs';
import Animated, {interpolateNode} from 'react-native-reanimated';

const DrawerContent = ({progress, ...props}) => {
  const translateX = interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  const get_style = {
    transform: [{translateX}],
  };

  return (
    <View style={drawer.content}>
      <DrawerContentScrollView {...props}>
        <Animated.View style={get_style}>
          <View style={drawer.content}>
            <UserSummary />
            <Drawer.Section style={drawer.section}>
              <DrawerTabs navigation={props.navigation} />
            </Drawer.Section>
          </View>
        </Animated.View>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;
