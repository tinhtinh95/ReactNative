import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,SliderIOS, Navigator, StatusBar, StatusBarIOS, NavigatorIOS, Switch, Alert, TextInput
} from 'react-native';
import SwitchEx from './SwitchEx';

export default class App extends React.Component {

  constructor(){
    super();
    this.state={
      text:  "Ahihi",
    }
  }
  
  render(){
    return(
      <View style={{alignContent:'center' , margin:100}}>
        <TextInput value={this.state.text} style={{borderColor:'red', borderWidth:5}} onChangeText={(text) =>this.setState({text})}/>
        
      </View>
    )
  }

}

