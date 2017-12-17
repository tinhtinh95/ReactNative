import React from 'react';
import { StyleSheet,Image,ActivityIndicator,ListView,Text,ScrollView, View, FlatList, SectionList, Platform } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.movies),
        }, function() {
          // do something with new state
        });
      }) 
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{flex: 1, paddingTop: 20,justifyContent:'center'}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
        />
        <Text style={styles.container}>Tinh</Text>
      </View>
    );
  }
}
const styles=StyleSheet.create({
  container:{
    color: Platform.OS === 'ios' ? 'red' : 'blue',
    paddingBottom: 30
  }
});
