import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import FastImage from 'react-native-fast-image';
import RadioButton from '../../components/RadioButton';

const ProductData = require('../../utils/ProductsList.json');

const ProductListing = props => {
  const MyTextComponent = props => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.boldFontStyle}>{props.title + ': '}</Text>
        <Text style={styles.regularFontStyleWithFlex1}>
          {props.description}
        </Text>
      </View>
    );
  };

  const renderItem = ({item}) => {
    let brands =
      item.brands &&
      item.brands.length > 0 &&
      item.brands.map(item => {
        return item.name;
      });

    return (
      <View style={styles.mainView}>
        <View style={styles.productDetailVIew}>
          <View style={styles.imageView}>
            <FastImage
              style={styles.imageStyle}
              source={{
                uri: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
              }}
              //source={{
              //   uri: item.picture,
              // }}
              resizeMode="cover"
            />
          </View>
          <View style={styles.detailsView}>
            <Text style={[styles.regularFontStyle, {marginBottom: 8}]}>
              {item.productName ? item.productName : ''}
            </Text>

            <MyTextComponent
              title="Price"
              description={item.productName ? item.productName : ''}
            />
            <MyTextComponent
              title="Brands"
              description={brands && brands.length > 0 ? brands.join(', ') : ''}
            />
          </View>
        </View>
        <View style={styles.colorView}>
          <Text style={styles.boldFontStyle}>Colors</Text>
          <RadioButton
            colors={item.colors && item.colors.length > 0 ? item.colors : []}
          />
        </View>
      </View>
    );
  };

  const renderItemSeparotor = () => {
    return <View style={styles.deviderStyle} />;
  };

  return (
    <View style={styles.containerStyle}>
      <Header title="Products" />
      <FlatList
        data={ProductData}
        renderItem={renderItem}
        ItemSeparatorComponent={renderItemSeparotor}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ProductListing;
