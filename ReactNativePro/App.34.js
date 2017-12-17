import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,SliderIOS, Navigator, StatusBar, StatusBarIOS, NavigatorIOS, Switch, Alert, TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback
} from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      count: 1
    }
    
  }
  _onPress=()=>{
    this.setState({
        count:this.state.count+1
    })
  }
  
  render(){
    return(
      <View style={{justifyContent:'center' , margin:100,flex:1,paddingHorizontal:10}}>
        <TouchableOpacity style={sty.button} 
        onPress={this._onPress}> 
          <Text>Touch me</Text>
        </TouchableOpacity>
        <View><Text style={{ alignItems:'center'}}>{this.state.count}</Text></View>
      </View>
    )
  }

}
const sty=StyleSheet.create({
  button:{
    alignItems:'center',
    backgroundColor:'red',
    padding:10,
    borderRadius:5
  }
})

