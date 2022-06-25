import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/colors';

const Header = props => {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.textStyle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: Colors.grey,
  },
  textStyle: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: 'bold',
  },
});

export default Header;
