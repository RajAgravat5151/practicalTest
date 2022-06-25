import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/colors';
import {styles} from './styles';

const RadioButton = props => {
  let myColors = ['Red', 'Blue', 'Green'];
  let availableColor = props.colors;
  return (
    <View style={styles.radioButtonView}>
      {myColors.map((item, index) => {
        return (
          <View style={styles.view1} key={index + ''}>
            <View style={styles.radioButtonV1}>
              {availableColor.includes(item) && (
                <View style={styles.radioButtonV2} />
              )}
            </View>
            <Text style={styles.textStyle}>{item}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default RadioButton;
