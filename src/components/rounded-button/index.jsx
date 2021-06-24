
import React from 'react';
import { StyleSheet,TouchableOpacity } from 'react-native';
import {color,size} from '../../theme'


const Index = (props)=> {
  const {icon,onClick} = props
  return (
    <TouchableOpacity onPress={onClick} style={styles.button}>
      {icon()}
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  button: {
    flexDirection : "row",
    height : size.roundedButton,
    width : size.roundedButton,
    borderRadius : size.roundedButton/2,
    backgroundColor: color.yellow,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Index
