import React,{Component} from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import {toggleIsAdding} from '../redux/actionCreators';


class Header extends Component{
 
    render(){
        return(
           
                <View style={styles.header}>
                    <Text>My Words</Text>
                    <TouchableOpacity
                    onPress={()=>this.props.toggleIsAdding()}
                    >
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>

              
        )
    }
}

export default connect(null, {toggleIsAdding})(Header);
// export default connect()(Header);


const styles=StyleSheet.create({
    header:{
        flex:1,backgroundColor: '#D9D9D9',
         alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
    }
})

