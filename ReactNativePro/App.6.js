import React from 'react';
import { StyleSheet,Image,Text,ScrollView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView >
       <Text style={{fontSize:96}}>Scroll me plz</Text>
           <Image source={require('./fb.png')}/>
          <Text style={{fontSize:96}}>If you like</Text>
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Text style={{fontSize:96}}>What's the best</Text>
          <Text style={{fontSize:96}}>Framework around?</Text>
          <Text style={{fontSize:80}}>React Native</Text>
      </ScrollView>
    );
  }
}


