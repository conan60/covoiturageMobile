
import React, {useState} from 'react';
import { StyleSheet, View,TouchableOpacity } from 'react-native';
import Text from '../../components/text'
import Feature from '../../components/preference'
import {color,size} from '../../theme'


const Index = (props)=> {

  const {text = "Animaux",onClick = ()=>null,name = "pets"} = props
  const [interdit, setInterdit] = useState(false)

  const toggleFeature = ()=>{
    setInterdit(!interdit);
    onClick()
  }
  
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={toggleFeature} style={styles.button}>
      <View style={styles.icon}>
        <Feature name={name} interdit={interdit} color={color.black} size={24}/>
        </View>
      <Text weight="bold" style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  button: {
    flexDirection : "row",
    height : size.featureButton,
    borderRadius : size.featureButton/2,
    backgroundColor: color.yellow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    flex : 1,
    color : color.black,
    fontSize : 20,
    textAlign : "center",
    right : 10,
  },
  icon:{
    margin : 2,
    height : size.featureButton-4,
    borderRadius : size.featureButton-2,
    backgroundColor : color.white,
    width : size.featureButton-4,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Index
