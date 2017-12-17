import React from 'react';
import { StyleSheet,MaskedViewIOS, View, Text, TouchableOpacity,AccessibilityChangeEventName,AccessibilityInfo, Alert} from 'react-native';

export default class App1 extends React.Component {
  render() {
    return (
        <TouchableOpacity 
        style={{flex:1,marginTop:200,justifyContent:'center'}} onPress={this.didpress}>
            <MyButton label="ahihi" /> 
        </TouchableOpacity>
      
      
    )
  }
}
class MyButton extends React.Component{
  setNativeProps = (nativeProps) => {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    return (
      <View ref={component => this._root = component} {...this.props}>
        <Text>{this.props.label}</Text>
      </View>
    )
  }
}
