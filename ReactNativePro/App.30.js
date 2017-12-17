import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView, Slider,SliderIOS
} from 'react-native';
import PropTypes from 'prop-types';

export default class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { age: 18 }
//    } 
//    getVal(val){
//    console.warn(val);
//    }     
//    render() {    
 
//      return (
//        <View style={styles.container}>
//          <Slider
//           style={{ width: 300 }}
//           step={1}
//           minimumValue={18}
//           maximumValue={71}
//           value={this.state.age}
//           onValueChange={val => this.setState({ age: val })}
//           onSlidingComplete={ val => this.getVal(val)}
//          />
//          <Text style={styles.welcome}>
//            {this.state.age}
//          </Text>            
//          <Text style={styles.instructions}>
//            Double tap R on your keyboard to reload,{'\n'}
//            Shake or press menu button for dev menu
//          </Text>
//        </View>
//      );
//    }
//  }
 
//  const styles = StyleSheet.create({
//    container: {
//      flex: 1,
//      justifyContent: 'center',
//      alignItems: 'center',
//      backgroundColor: '#F5FCFF',
//    },
//    welcome: {
//      fontSize: 20,
//      textAlign: 'center',
//      margin: 10,
//    },
//    instructions: {
//      textAlign: 'center',
//      color: '#333333',
//      marginBottom: 5,
//    },
//  });
constructor(props){
  super(props);

  this.state = {
    age: 0,
  }

}

render() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Age: {this.state.age}
      </Text>
      <SliderIOS
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        step={1}
        onValueChange={(age) => this.setState({age: age})} />
    </View>
  );
}
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'green',
},
text: {
  color: 'white',
  fontSize: 24,
},
slider: {
  width: 300,
}
});