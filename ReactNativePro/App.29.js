import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView, RefreshControl,ScrollView,SegmentedControlIOS
} from 'react-native';
import PropTypes from 'prop-types';

export default class App extends React.Component {
  state={
    selectedIndex:0
  }
render() {
  
  return (
    <SegmentedControlIOS style={{marginTop:200}}
  values={['One', 'Two']}
  selectedIndex={this.state.selectedIndex}
  onChange={(event) => {
    this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
  }}
/>
  );
}
}
