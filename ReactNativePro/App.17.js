import React from 'react';
import { TextInput,MaskedViewIOS, View, Text, TouchableOpacity,AccessibilityChangeEventName,AccessibilityInfo, Alert} from 'react-native';

export default class App1 extends React.Component {
  clearText = () => {
    this._textInput.setNativeProps({text: ''});
  }

  render() {
    return (
      <View style={{flex: 1,height: 20}}>
        <TextInput
          ref={component => this._textInput = component}
          style={{height: 20,  marginTop: 100, borderWidth: 1, borderColor: '#ccc'}}
        />
        <TouchableOpacity onPress={this.clearText}>
          <Text style={{color:'yellowgreen'}}>Clear text</Text>
        </TouchableOpacity>
      </View>
    );
  }
}