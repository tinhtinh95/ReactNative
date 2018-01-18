/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View, Text,
  FlatList,
} from 'react-native';
import ListItem from '../ListItem/ListItem';

export default class PlaceList extends Component{

  render() {
    return (
        <FlatList style = {styles.listContainer} 
            data = {this.props.places}
            renderItem = { (info) => (
                <ListItem
                    placeName = {info.item.name}
                    placeImage = {info.item.image}
                    onItemPressed = { 
                      () => {this.props.onItemSelected(info.item.key)}
                    }
                />
            )}
        />
    );
  }
}
const styles = StyleSheet.create({
  listContainer : {
    width : "100%",
  }
});
