import React from 'react';
import { StyleSheet, Text,TextInput, View,Button,
  Alert, TouchableHighlight, TouchableOpacity, 
  TouchableNativeFeedback, TouchableWithoutFeedback, Platform } from 'react-native';

export default class App extends React.Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  _onLongPressButton(){
    Alert.alert('You long-pressed the button');
  }
  render() {
    return (
      <View style={styles.container}>
      <TouchableHighlight onPress={this._onPressButton} underlayColor="red">
        <Text>TouchableHighlight</Text>
      </TouchableHighlight>
      <TouchableOpacity onLongPress={this._onLongPressButton} underlayColor='green'>
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>
      <TouchableNativeFeedback onPress={this._onPressButton} background={Platform.OS=== 'android'?
      TouchableNativeFeedback.SelectableBackground(): ''}>
        <Text> TouchableNativeFeedback</Text>
      </TouchableNativeFeedback>
        
      <TouchableWithoutFeedback onLongPress={this._onLongPressButton}>

        <View><Text>TouchableWithoutFeedback</Text></View>        
      </TouchableWithoutFeedback>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
   },
   buttonContainer: {
     margin: 20
   },
   alternativeLayoutButtonContainer: {
     margin: 20,
     flexDirection: 'row',
     justifyContent: 'space-between'
   }
});
