
import React from 'react';
import { StyleSheet, View,TouchableOpacity } from 'react-native';
import Text from '../../components/text'
import {color,size} from '../../theme'


const Index = (props)=> {
  const {text,icon,onClick} = props
  return (
    <TouchableOpacity onPress={onClick} style={styles.button}>
      <View style={styles.icon}>{icon()}</View>
      <Text weight="bold" style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  button: {
    flexDirection : "row",
    height : size.signupButton,
    borderRadius : size.signupButton/2,
    backgroundColor: color.yellow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    flex : 1,
    color : color.black,
    fontSize : 30,
    textAlign : "center",
    right : 10,
  },
  icon:{
    margin : 2,
    height : size.signupButton-4,
    borderRadius : size.signupButton-2,
    backgroundColor : color.white,
    width : size.signupButton-4,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Index
