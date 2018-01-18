/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Modal,
  Text,
  Button,
} from 'react-native';

export default class PlaceDetail extends Component{
  render() {
    let modelContent = null ;
    if(this.props.selectedPlace) {
        modelContent = (
            <View style = {styles.placeContainer}>
                <Image 
                    source = {this.props.selectedPlace.image}
                    style = {styles.placeImg}
                    resizeMode = "contain"
                />
                <Text style = {styles.placeText}>{this.props.selectedPlace.name}</Text>
            </View>
        );
    }
    return (
        <Modal 
            onRequestClose = {this.props.onModalClosed}
            visible = {this.props.selectedPlace !== null} 
            animationType = "slide"
        >
            <View style = {styles.modalContainer}>
                {modelContent}
                <View style = {styles.buttonContainer}>
                    <Button 
                        color="#f57c00" title = "Delete"
                        onPress = {this.props.onItemDeleted}
                    />
                    <Button
                        color = "#7cb342" title = "Close"
                        onPress = {this.props.onModalClosed}
                    />
                </View>
            </View>
        </Modal>
    );
  }
}
const styles = StyleSheet.create({
    modalContainer : {
        margin : 22,
    },
    buttonContainer : {
        flexDirection : "row",
        justifyContent : 'space-between',
    },
    placeImg : {
        width : 60,
        height : 60,
    },
    placeContainer : {
        flexDirection : "row",
        justifyContent : 'center',
        marginHorizontal : 20 ,
        marginBottom : 25,
    },
    placeText : {
        fontSize : 20,
        fontWeight : "bold",
        textAlign : 'center',
    }
});
