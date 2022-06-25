import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../utils/colors';
const SCREEN_WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  mainView: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  productDetailVIew: {
    flexDirection: 'row',
    flex: 1,
  },
  imageView: {
    alignItems: 'center',
    marginRight: 15,
  },
  detailsView: {
    flex: 1,
  },
  imageStyle: {width: 100, height: 100, borderRadius: 50},
  regularFontStyle: {
    fontSize: 16,
    color: Colors.black,
  },
  regularFontStyleWithFlex1: {
    fontSize: 16,
    color: Colors.black,
    flex: 1,
  },
  boldFontStyle: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: 'bold',
  },
  colorView: {
    marginTop: 15,
  },
  deviderStyle: {
    height: 1,
    backgroundColor: Colors.grey,
  },
});
