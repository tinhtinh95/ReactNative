import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  NavigatorIOS,  TouchableHighlight, Picker
} from 'react-native';
import PropTypes from 'prop-types';

export default class App extends React.Component {
//   render() {
//     return (
//       <NavigatorIOS
//         initialRoute={{
//           component: MyScene,
//           title: 'My Initial Scene',
//         }}
//         style={{flex: 1}}
//       />
//     );
//   }
// }

// class MyScene extends React.Component {
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     navigator: PropTypes.object.isRequired,
//   }

//   _onForward = () => {
//     this.props.navigator.push({
//       title: 'Scene ' + nextIndex,
//     });
//   }

//   render() {
//     return (
//       <View>
//         <Text>Tap me</Text>
//         <Text>Current Scene: { this.props.title }</Text>
//         <TouchableHighlight onPress={this._onForward}>
//           <Text>Tap me to load the next scene</Text>
//         </TouchableHighlight>
//       </View>
//     )
//   }
state={
  language: ''
};
render(){
  
  return(
    <View>
        <Picker
    selectedValue={this.state.language}
    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
    <Picker.Item label="Java" value="java" />
    <Picker.Item label="JavaScript" value="js" />
  </Picker>
  <Text style={{justifyContent:'center',color:'#f0f',textAlign:'center'}}>{this.state.language}</Text>
    </View>
  )
}
}