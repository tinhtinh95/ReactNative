import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
  } from 'react-native';

export class listItem extends Component {
    render() {
      return (
        <TouchableOpacity 
            onPress = {this.props.onItemPressed}
        >
            <View style = {styles.listItem}>
                <Image resizeMode = "contain" source = {this.props.placeImage} style = {styles.placeImg}/>
                <Text style = {styles.textInput}>{this.props.placeName}</Text>
            </View>
        </TouchableOpacity>
      );
    }
  }

const styles = StyleSheet.create({
    listItem : {
        alignItems : 'center',
        justifyContent : 'center',
        width : "80%",
        padding : 10,
        marginBottom : 5,
        marginHorizontal : 35,
        backgroundColor : 'rgba(255,69,0,0.3)',
        flexDirection : 'row',
    },
    placeImg : {
        marginRight : 8,
        width : 30,
        height : 30,
    },
    textInput : {
        color : '#5d4037',
        fontSize : 16,
        fontWeight : 'bold',
    }
})

export default listItem;
