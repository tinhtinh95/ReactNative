import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,SliderIOS, Navigator, StatusBar, StatusBarIOS, NavigatorIOS, Switch, Alert
} from 'react-native';
import SwitchEx from './SwitchEx';

export default class App extends React.Component {

  constructor(){
    super();
    this.state={
      value1:  false,
      value2:true,
    }
  }
  toggletSwitch1=(value)=> {
    this.setState({value1: value})
    alert('Switch 1 is: '+value)
  }
  toggletSwitch2=(value)=>{
    this.setState({value2:value})
    console.log('Switch 2 is: '+ value)
  }
  render(){
    return(
      <View style={{alignContent:'center' , margin:100}}>
        <SwitchEx  
        toggleSwitch1 = {this.toggleSwitch1}
        toggleSwitch2 = {this.toggleSwitch2}
        value1 = {this.state.value1}
        value2 = {this.state.value2}
        />
        
      </View>
    )
  }

}

