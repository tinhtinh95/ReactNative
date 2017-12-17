import React,{Component} from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';

export default class Header extends Component{
 
    render(){
        return(
           
                <View style={styles.header}>
                    <Text>My Words</Text>
                    <TouchableOpacity>
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>

              
        )
    }
}

const styles=StyleSheet.create({
    header:{
        flex:1,backgroundColor: '#D9D9D9',
         alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
    }
})

