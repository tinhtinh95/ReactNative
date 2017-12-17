import React from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
} from 'react-native'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data:"This is button"
    }

  }
  _onPress(){
    //this.setState(()=>({data:"This is button"}))
    Alert.alert(this.state.data)
  }
  render() {
    return ( 
      <View style={[styles.container, styles.horizontal]}>
        <Button onPress={this._onPress} title="Click me"  accessibilityLabel="click" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 100
  }
})