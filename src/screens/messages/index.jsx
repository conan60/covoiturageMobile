import React, { useState } from "react";
import { StyleSheet, ScrollView,View } from "react-native";
import  Icon  from "react-native-vector-icons/Ionicons";
import Messages from "../../components/messages";
import Input from "../../components/input-icon";
import { color } from "../../theme";

const Index = (props) =>{
  const {navigation} = props
  const [press, setPress] = useState({});
  return (
    <ScrollView style={styles.container}>
      <Input
      placeholder="Recherche"
      onChange={e => console.log(e)}
      icon={() => <Icon name="search" size={16} color={color.black} />}
      bgColor={color.white}
      placeholderColor={color.black}
      />
      <View style={{height : 10}}/>
      <Messages
        name="Malek Gorchene"
        image=""
        lastMessage="Hello !!"
        time="6 min"
        onClick={() => navigation.push('MessageSingleUser')}
      />
      <Messages
        name="Mouhamed Bahloul"
        image=""
        lastMessage="Beh metfahmin"
        time="17:02"
        onClick={() => navigation.push('MessageSingleUser')}
      />
      <Messages
        name="Haroun Gorchene"
        image=""
        lastMessage="Winek taw"
        time="15:20"
        onClick={() => navigation.push('MessageSingleUser')}
      />
      <Messages
        name="Oussema Khmis"
        image=""
        lastMessage="Ba7tha sbitar l militaire"
        time="10:01"
        onClick={() => navigation.push('MessageSingleUser')}
      />
      <Messages
        name="Saleh Sfar"
        image=""
        lastMessage="Salem encore dispo"
        time="06:27"
        onClick={() => navigation.push('MessageSingleUser')}
      />
      <Messages
        name="Zina Boulaaress"
        image=""
        lastMessage="Winek ya tfol"
        time="12/02"
        onClick={() => navigation.push('MessageSingleUser')}
      />
      <Messages
        name="Soula Souma"
        image=""
        lastMessage="Haya la7dha !"
        time="10/02"
        onClick={() => navigation.push('MessageSingleUser')}
      />
      <Messages
        name="Tawfik Fhima"
        image=""
        lastMessage="Yo bro"
        time="01/02"
        onClick={() => navigation.push('MessageSingleUser')}
      />
      <Messages
        name="Salem Gorchene"
        image=""
        lastMessage="Heyy you !"
        time="15/01"
        onClick={() => navigation.push('MessageSingleUser')}
      />
      <View style={{height : 20}}/>
    </ScrollView>
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
