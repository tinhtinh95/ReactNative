import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,SliderIOS, Slider
} from 'react-native';
import PropTypes from 'prop-types';

export default class App extends React.Component {

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
      <Slider
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