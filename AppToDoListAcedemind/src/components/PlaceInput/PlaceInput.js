/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image
} from 'react-native';

export default class PlaceInput extends Component{
  render() {
    return (
        <View style = {styles.inputContainer}>
            <TextInput style = {styles.placeInput}
              placeholder = "Make sth awsome"
              underlineColorAndroid = 'rgba(0,0,0,0)'
              onChangeText= {(text)=>{this.props.onPlaceAdded(text)}}
            />
            <Button title = 'Add' style = {styles.placeButton}
              onPress = {this.props.onSubmit}
            />
        </View>
    );
  }
}
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center',
    width : '100%',
    padding : 10,
  },
  placeInput : {
    width : '70%',
    borderColor : '#00695c',
    borderRadius : 12,
    borderWidth : 1,
    marginHorizontal : 16,
  },
  placeButton : {
    width : '30%',
  },
});
