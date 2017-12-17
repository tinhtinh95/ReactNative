import React from 'react';
import { StyleSheet,MaskedViewIOS, View, Text, TouchableOpacity,AccessibilityChangeEventName,AccessibilityInfo, Alert} from 'react-native';

console.log('VeryExpensive component');
export default class App1 extends React.Component {
 constructor(props){
   super(props);
   this.state={
     data:1
   };
  //  this.setState(()=>({ 
  //    data:0.5
  //  }));
 }

  render() {
    return (
      
        <TouchableOpacity 
        onPress={()=>this.setState({data:1})}
        onPressOut={()=>this.setState({data:1})}
        style={{flex:1,marginTop:200,justifyContent:'center'}} onPress={this.didpress}>
            <View style={{opacity:this.state.data}}>
            <Text>You touch me!</Text>
            </View>
        </TouchableOpacity>
      
      
    )
  }
}
