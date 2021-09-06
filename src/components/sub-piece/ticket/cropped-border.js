import React from 'react';
import {View} from 'react-native';
import DashedLine from 'react-native-dashed-line';
import {dashboard} from '../../../assets/js-styles';
import {DEFAULT_COLOR} from '../../../assets/theme';

const CroppedBorder = () => {
  return (
    <>
      <View style={dashboard.circle_left}></View>
      <DashedLine
        style={dashboard.dash}
        dashLength={10}
        dashGap={5}
        dashColor={DEFAULT_COLOR}
        dashThickness={1}
      />
      <View style={dashboard.circle_right}></View>
    </>
  );
};

export default CroppedBorder;
