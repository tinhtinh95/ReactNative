import React from 'react';
import { StyleSheet,MaskedViewIOS, View, Text, TouchableOpacity,AccessibilityChangeEventName,AccessibilityInfo} from 'react-native';

export default class App1 extends React.Component {
  render() {
    return (
      <MaskedViewIOS
      style={{ flex: 1 }}
      maskElement={
        <View style={{ flex: 1,justifyContent:'center',backgroundColor: 'blue' }}>
          <Text style={{ flex: 1,justifyContent:'center' }}>
            Basic Mask
          </Text>
        </View>
      }
    >
      <View style={{ flex: 1,justifyContent:'center',backgroundColor: 'blue' }} />
    </MaskedViewIOS>
    )
  }
}
