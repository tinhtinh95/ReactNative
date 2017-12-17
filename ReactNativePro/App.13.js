import React from 'react';
import { StyleSheet,MaskedViewIOS, View, Text, TouchableOpacity,AccessibilityChangeEventName,AccessibilityInfo, Alert} from 'react-native';

console.log('VeryExpensive component');
let aA=null;

export default class App1 extends React.Component {
 state={b:false};
 didpress=()=>{
   if(aA==null){
     aA=require('./aA').default;
   }
   this.setState(()=> ({
     b:true,
   }));
 };
  render() {
    return (
      <View style={{marginTop:100}}>
        <TouchableOpacity style={{flex:1,margin:50,justifyContent:'center'}} onPress={this.didpress}>
            <Text>You touch me!</Text>
        </TouchableOpacity>
      {this.state.b?<aA/> :null}
      </View>
    )
  }
}
