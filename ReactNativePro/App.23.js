import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  MaskedViewIOS,  
} from 'react-native'

export default class App extends React.Component {

  render() {
    return (
      <MaskedViewIOS
      style={{ flex: 1}}
      maskElement={
        <View >
          <Text>
            Basic Mask
          </Text>
        </View>
      }
    >
      <View style={{ flex: 1, backgroundColor: 'blue' }} />
    </MaskedViewIOS>
    );
  }
}