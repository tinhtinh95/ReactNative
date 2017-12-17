import React from 'react';
import { StyleSheet,Image,Text,ScrollView, View, FlatList, SectionList } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text>{section.title}</Text>}
          keyExtractor={(item, i) => i}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 100,
   
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    fontSize:30,
  },
})

