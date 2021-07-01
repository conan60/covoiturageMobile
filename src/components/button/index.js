
import React from 'react';
import { StyleSheet,TouchableOpacity } from 'react-native';
import Text from '../../components/text'
import {color,size} from '../../theme'


const Index = (props)=> {
  const {
    text,
    onClick,
    bgColor = color.yellow, 
    textColor = color.black
  } = props
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onClick} style={{...styles.button,backgroundColor : bgColor}}>
      <Text weight="bold" style={{...styles.text, color : textColor}}>{text}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  button: {
    paddingHorizontal : 10,
    flexDirection : "row",
    height : size.button,
    borderRadius : size.button/2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    fontSize : 16,
    textAlign : "center"
  },
});

export default Index
