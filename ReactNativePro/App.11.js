import React from 'react';
import { StyleSheet,Animated,Image,ActivityIndicator,ListView,Text,ScrollView, View, FlatList, SectionList, Platform, ImageBackground, Easing } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
          <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
        </FadeInView>
      </View>
    )
  }

}
class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() { // after render run 
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        easing: Easing.back(), 
        duration: 4000,              // Make it take a while
        // easing: Easing.back(), 
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
