import React, {useState} from 'react';
import {View} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {tabs} from '../../../utils/container';
import {is_active, navigate} from '../../../utils/functions';
import {SECONDARY} from '../../../assets/theme';

const DrawerTabs = props => {
  const [focus, setFocus] = useState(0);
  const change_state = (ind, tab) => {
    navigate(props.navigation, tab);
    setFocus(ind);
  };

  return (
    <>
      {tabs.map((tab, ind) => {
        if (ind < 6) {
          return (
            <View key={ind}>
              <DrawerItem
                style={is_active(focus, ind, 'tab')}
                icon={() => (
                  <Icon name={tab.icon} style={is_active(focus, ind, 'icon')} />
                )}
                label={tab.name}
                pressColor={SECONDARY}
                labelStyle={is_active(focus, ind, 'name')}
                onPress={() => change_state(ind, tab)}
              />
            </View>
          );
        }
      })}
    </>
  );
};

export default DrawerTabs;
