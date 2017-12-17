import React from 'react';
import {
  View, Switch,
} from 'react-native';

export default SwitchEx=(props)=>{

  return (
    <View>
   <Switch 
     onValueChange={props.toggleSwitch1}
     value={props.value2}
   />
   <Switch 
     onValueChange={props.toggleSwitch1}
     value={props.value1}
   />
 </View>
  );
}
