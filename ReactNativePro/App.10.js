import React from 'react';
import { StyleSheet,Image,ActivityIndicator,ListView,Text,ScrollView, View, FlatList, SectionList, Platform, ImageBackground } from 'react-native';

export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     img: {require(./fb.png')
  //     }
  //   }
  // }
  render(){
    return(
      <ImageBackground  style={{flex:1, justifyContent:'center'}}>
        <Image source={require( './fb.png')} style={{width:200, height:50,justifyContent:'center',alignItems: 'center',
        resizeMode: Image.resizeMode.contain,borderTopLeftRadius:10}} />
        <Image
  source={{
    uri: 'https://facebook.github.io/react/logo-og.png',
    method: 'POST',
    headers: {
      Pragma: 'no-cache',
    },
    body: 'Your Body goes here',
  }}
  style={{width: 400, height: 400,justifyContent:'center',resizeMode: Image.resizeMode.contain}}
/>
      </ImageBackground>

    );
  }

}

