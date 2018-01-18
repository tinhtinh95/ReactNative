/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image
} from 'react-native';

import {connect} from 'react-redux';

import ListItem from './src/components/ListItem/ListItem';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import placeImage from './src/imgs/pin.png';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import { selectPlace } from './src/store/actions/places';
import {addPlace, deletePlace, selectPlaces, deselectPlace,updateTextInput} from './src/store/actions/index';

class App extends Component{

  placeNameHandler = (val) => {
      // this.setState({
      //   placeName:val,
      // });
      this.props.onUpdateTextInput(val);
  };

  placeSubmitHandler = () => {
    // if(this.state.placeName === "") {
    //   return ;
    // }
    // this.setState(preState => {
    //   return {
    //     places : preState.places.concat({
    //         key : Math.random() , 
    //         name : preState.placeName, 
    //         image : placeImage,
    //     })
    //   }
    // })
    this.props.onAddPlace();
  }

  placeSelectedHandler = (key) => {
    this.props.onSelectPlace(key);
  }

  placeItemDelected = () => {
    this.props.onDeletePlace();
  }

  modalClosedHandler = () => {
    this.props.onDeSelectPlace();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.backgroundContainer}>
          <Image style = {styles.img}
            source={require('./src/imgs/fox-logo-1.jpg')}
          />
        </View>
        <PlaceDetail 
          selectedPlace = {this.props.selectedPlace} 
          onItemDeleted = {this.placeItemDelected}
          onModalClosed = {this.modalClosedHandler}
        />
        <PlaceInput 
            onPlaceAdded = {this.placeNameHandler} 
            onSubmit = {this.placeSubmitHandler}
        />
        <PlaceList 
            places = {this.props.places} 
            onItemSelected = {this.placeSelectedHandler}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  backgroundContainer : {
    flex : 1 ,
    width : '100%',
    height: '100%',
    position : 'absolute',
  },
  img : {
    flex :1,
    width: null,
    height: null,
  },
});

const mapStateToProps = state => {
  return {
    places : state.places.places,
    selectedPlace : state.places.selectedPlace,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace : () => dispatch(addPlace()),
    onDeletePlace : () => dispatch(deletePlace()),
    onSelectPlace : (key)  => dispatch(selectPlaces(key)),
    onDeSelectPlace : () => dispatch(deselectPlace()),
    onUpdateTextInput : (val) => dispatch(updateTextInput(val)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);