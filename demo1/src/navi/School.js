import React, { Component } from 'react';
// import { StackNavigator } from 'react-navigation';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';


export default class SchoolScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `School of ${navigation.state.params.user}`,
    titleStyle:{
      color:'#f0f'
    },
    headerRight: <Button onPress={()=>{}} title="Info" />,
    headerLeft:
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={{ height: 20, width: 20 }} source={require('./menu.png')} />
      </TouchableOpacity>
  });
  render() {
    const { goBack } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (
      <View>
        <View>
          <Text>djdid</Text>
          <Text>djdid</Text>
        </View>
        <Text>Hi, This is School of {params.user}!</Text>
        {/* <Button onPress={()=>goBack()} title="Back to home"/> */}
        <TouchableOpacity onPress={()=>goBack()}>
          <Text>ddd</Text>
        </TouchableOpacity>
      </View>

    )
  }
}
