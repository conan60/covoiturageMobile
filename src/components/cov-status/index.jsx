
import React from 'react'
import { StyleSheet,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {color} from '../../theme'


// ellipsis-horizontal, close, checkmark

const Index = (props)=> {
  const {onClick,status,size} = props


  let Button
  const opacity = onClick? 0.7 : 1
  const sizeIcon = (size/3)*2

  const styles = StyleSheet.create({
    button: {
      flexDirection : "row",
      height : size,
      width : size,
      borderRadius : size/2,
      backgroundColor: color.yellow,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });
  switch(status){
    case 'waiting': Button=(<TouchableOpacity activeOpacity={opacity} onPress={onClick} style={{...styles.button,backgroundColor : color.white}}>
      <Icon name="ellipsis-horizontal" size={sizeIcon} color={color.black}/>
    </TouchableOpacity>);break;
    case 'accepted': Button=(<TouchableOpacity activeOpacity={opacity} onPress={onClick} style={styles.button}>
      <Icon name="checkmark" size={sizeIcon} color={color.black}/>
    </TouchableOpacity>);break;
    case 'refused': Button=(<TouchableOpacity activeOpacity={opacity} onPress={onClick} style={{...styles.button,backgroundColor : color.black}}>
      <Icon name="close" size={sizeIcon} color={color.white}/>
    </TouchableOpacity>);break;
  }
  return Button
}




export default Index
