import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native';
import {Caption, ToggleButton} from 'react-native-paper';
import {form} from '../../../assets/js-styles';
import {AreaCol, AreaRow, SlotCol, SlotRow} from '../../../utils/container';
import {generateName} from '../../../utils/functions';

const SlotField = props => {
  let i = 1;

  const getData = (e, ind) => {
    let value = e._dispatchInstances.memoizedProps.children;
    props.setBooking({...props.booking, slot: value});
  };

  return (
    <>
      <Caption style={form.caption}>Available Parking slot</Caption>
      <ScrollView horizontal style={form.scroll}>
        <ScrollView>
          {AreaRow.map((val, ind1) => {
            return (
              <View key={ind1} style={form.row}>
                {AreaCol.map((val, ind2) => {
                  return (
                    <View key={ind2} style={form.area_column}>
                      {SlotCol.map((val, ind3) => {
                        return (
                          <View key={ind3} style={form.slot_column}>
                            {SlotRow.map((val, ind4) => {
                              return (
                                <TouchableOpacity
                                  key={ind4}
                                  style={form.slot_row}>
                                  <Text
                                    style={form.slot}
                                    onPress={event => getData(event, ind4)}>
                                    {generateName(i++)}
                                  </Text>
                                </TouchableOpacity>
                              );
                            })}
                          </View>
                        );
                      })}
                    </View>
                  );
                })}
              </View>
            );
          })}
        </ScrollView>
      </ScrollView>
    </>
  );
};

export default SlotField;
