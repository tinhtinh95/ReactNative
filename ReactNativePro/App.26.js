import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  NavigatorIOS,  TouchableHighlight, Picker, ProgressViewIOS
} from 'react-native';
import PropTypes from 'prop-types';

export default class App extends React.Component {
render(){
  return(
    <View style={{justifyContent:'center',paddingTop:50}}>
      <ProgressViewIOS style={{height:10}} progress="0.5" progressTintColor="red"></ProgressViewIOS>
    </View>
  )
}
}