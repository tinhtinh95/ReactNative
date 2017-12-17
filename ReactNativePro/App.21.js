import React from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,  
} from 'react-native'

export default class App extends React.Component {
  state={
    names:[{
      id:1,
      name:"Tinh"
    },
    {
      id:2,
      name:"Ti"
    }]
  }
  // _onPress=(item)=>{
  //   Alert.alert(item.id +" "+item.name
  //   )
  // }
  render(){
    return(
      <View>
        {this.state.names.map((person,item)=>
        <ListItem key={item} person={person}/>
        )}

        </View>
    )
  }
}
class ListItem extends React.Component{
  _onPress=(item)=>{
    alert(item.id +" "+item.name
    )
  }
  render(){
    return(
      <View>
      <TouchableOpacity style={styles.container} >
      <Text onPress={this._onPress(this.props.person)} style = {styles.text}>
                       {this.props.person.name}
                    </Text>
      </TouchableOpacity></View>
    )
  }
}
const styles = StyleSheet.create ({
  container: {
     paddingTop:50,
     marginTop: 3,
     backgroundColor: '#d9f9b1',
     alignItems: 'center',
  },
  text: {
     color: '#4f603c'
  }
})