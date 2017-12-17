import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView, RefreshControl,ScrollView
} from 'react-native';
import PropTypes from 'prop-types';

export default class App extends React.Component {
state={
  data:[
    {
      id: 1, name:'A',
    },
    {
      id: 2, name:'b',
    },
    {
      id: 3, name:'c',
    },
    {
      id: 4, name:'d',
    },
    {
      id: 5, name:'e',
    },
    {
      id: 6, name:'f',
    },
    {
      id: 7, name:'g',
    },
    {
      id: 8, name:'h',
    },
    
  ]
}
render() {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>

      {this.state.data.map((person,i)=> <View style={styles.item}><Text key={person.i} person={person}> {person.name}</Text></View>)}
    </ScrollView>
  );
}
}
const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20
  },
  item: {
  
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 50,
    margin: 2,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: '#d2f7f1'
 }
});