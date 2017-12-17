import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1,flexDirection:'row'}}>
        <View style={{flex: 1,backgroundColor: 'red'}}/>
        <View style={{flex: 2,backgroundColor: 'blue'}}/>
        <View style={{flex: 3,backgroundColor: 'green'}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#11058e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
