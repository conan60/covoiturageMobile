import React, { useState } from "react";
import { StyleSheet, ScrollView,View } from "react-native";
import Message from "../../components/message";
import InputMessage from "../../components/send-message";
import { color } from "../../theme";


const mockMessage=[
  { text : 'Salem' , type : 'sent' },
  { text : 'Ahla' , type : 'received' },
  { text : 'Winek ca va ?' , type : 'sent' },
  { text : 'We hamdoullah' , type : 'received' },
  { text : 'Wenti' , type : 'received' },
  { text : '??' , type : 'received' },
  { text : 'Hawna labess' , type : 'sent' },
  { text : 'Win nastannek' , type : 'sent' },
  { text : 'Win t7eb enti' , type : 'received' },
  { text : 'Kiosque Agile' , type : 'sent' },
  { text : '??' , type : 'sent' },
  { text : 'We ca va ' , type : 'received' },
  { text : 'Drayaj nkoun a7thek' , type : 'received' },
  { text : 'Ok' , type : 'sent' },
  

]

const Index = (props) =>{
  const {navigation} = props
  const [press, setPress] = useState({});
  return (
    <View style={styles.container}>
    <ScrollView>
      
      <View style={{height : 10}}/>
      {mockMessage.map((el,index)=><Message
        name="Malek Gorchene"
        key={index}
        {...el}
      />)}
      <View style={{height : 20}}/>
    </ScrollView>
    <View style={{height : 10}}/>
    <InputMessage
      placeholder="Recherche"
      onChange={e => console.log(e)}
      bgColor={color.white}
      placeholderColor={color.black}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: color.gray,
    padding: 10,
  },
});


export default Index
