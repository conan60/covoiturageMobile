
import React from 'react';
import { StyleSheet,TouchableOpacity } from 'react-native';
import Text from '../../components/text'
import {color,size} from '../../theme'


const Index = (props)=> {
  const {text,onClick} = props
  return (
    <TouchableOpacity onPress={onClick} style={styles.button}>
      <Text weight="bold" style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  button: {
    flexDirection : "row",
    height : size.button,
    borderRadius : size.button/2,
    backgroundColor: color.yellow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    flex : 1,
    color : color.black,
    fontSize : 16,
    textAlign : "center"
  },
});

export default Index
