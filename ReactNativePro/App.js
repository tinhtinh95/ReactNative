import React from 'react';
import StackNavigator from 'react-navigation';
import {
  StyleSheet,
  Text,
  View,
  ListView,SliderIOS, Navigator, StatusBar, StatusBarIOS, NavigatorIOS, Switch, Alert, TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, Image, KeyboardAvoidingView, Dimensions
} from 'react-native';

var width = Dimensions.get('window').width;

// export default class App extends React.Component {
  
//   render(){
//     return(
//       <KeyboardAvoidingView behavior='padding' style={sty.container}>
//          <View style={sty.view1}>
//           <Image style={sty.image} source={require('./fb.png')} />
//         </View>
//         <View style={sty.view2}>
//            <TextInput returnKeyLabel='next' style={sty.text} placeholder='Enter you name' /> 
//            <TextInput returnKeyLabel='Go' style={sty.text} placeholder='Enter you password' secureTextEntry />
//            <TouchableOpacity style={sty.login}><Text>Login</Text></TouchableOpacity>
//          </View>
//       </KeyboardAvoidingView>
//     )
//   }

// }
// const sty=StyleSheet.create({
//   container:{
//     flex:1,
//     padding:10,
//     justifyContent:'center', 
//     alignItems:'center',
//     backgroundColor:'rgb(60, 85, 152)',
// //behavior:'padding'
//   },
//   view1:{
//     flex:1,
//     justifyContent:'center',
    
//   },
//   image:{
//     width:300,
//     height:120,
//     marginBottom:30,
//     borderRadius:8
//   },
//   button:{
//     alignItems:'center',
//     backgroundColor:'red',
//     padding:10,
//     borderRadius:5
//   },
//   view2:{
//     flex:1,
//     flexDirection:'column',
//     width:width* .8,
//     //marginBottom:20
//   },

//   text:{
//     color:'#34495e',
//     padding:10,
//     height:40,
//     backgroundColor:'#ecf0f1',
//     marginBottom:5,
//     fontWeight:'bold',
    
//   },
//   login:{
//     backgroundColor:'#d35400',
//     paddingVertical:10,
//     alignItems:'center'
//   }
  
// })

const HomeScreen = ({navi}) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button
      onPress={() => navi.navigate('Details')}
      title="Go to details"
    />
  </View>
);

const DetailScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
   
  </View>
);
const RootNavigator=StackNavigator({
  Home: {
  screen: HomeScreen,
  navigationOptions:{
    headerTitle:'Home',
},
},
  Details:{
    screen:DetailScreen,
    navigationOptions:{
      headerTitle:'Details',
    },
    },
});
export default RootNavigator;
