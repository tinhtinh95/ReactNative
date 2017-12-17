import React from 'react';
import { TextInput,MaskedViewIOS, View, Text, TouchableOpacity,AccessibilityChangeEventName,AccessibilityInfo, Alert} from 'react-native';

export default class App1 extends React.Component {
  clearText = () => {
    this._textInput.setNativeProps({text: ''});
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <TextInput
          ref={component => this._textInput = component}
          style={{height: 20, flex: 1, marginHorizontal: 10, borderWidth: 1, borderColor: '#ccc'}}
        />
        <TouchableOpacity onPress={this.clearText}>
          <Text>Clear text</Text>
        </TouchableOpacity>
      </View>
    );
  }
}