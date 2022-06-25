import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
export const styles = StyleSheet.create({
  radioButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  textStyle: {
    fontSize: 18,
    color: Colors.black,
    marginRight: 10,
  },
  view1: {
    flexDirection: 'row',
  },
  radioButtonV1: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  radioButtonV2: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: Colors.black,
  },
});
