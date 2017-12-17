import React, { Component } from 'react';
import { Text } from 'react-native';
// ... import some very expensive modules

// You may want to log at the file level to verify when this is happening
console.log('VeryExpensive component loaded');

export default class aA extends Component {
  // lots and lots of code
  render() {
    return <Text>Very Expensive Component</Text>;
  }
}