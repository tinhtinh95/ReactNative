import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView, RefreshControl
} from 'react-native';
import PropTypes from 'prop-types';

export default class App extends React.Component {
constructor(props) {
  super(props);
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  this.state = {
    refreshing: false,
    dataSource: ds.cloneWithRows(['row 1', 'row 2','roww 3']),
  };
  

}

_onRefresh() {
  this.setState({refreshing: true});
  fetchData().then(() => {
    this.setState({refreshing: false});
  });
}

render() {
  return (
    <ListView
      refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh.bind(this)}
        />
        
      }
      style={{padding:50}}
      dataSource={this.state.dataSource}
      renderRow={(rowData) => <Text>{rowData}</Text>}
    >
    </ListView>
  );
}
}