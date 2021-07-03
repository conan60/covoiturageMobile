import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import TextInput from "../../components/input-icon";
import Feature from "../../components/feature-addition";
import TextFont from "../../components/text";
import Button from '../../components/button'
import { color } from "../../theme";

const Index = (props) =>{
  const {navigation} = props
  const [press, setPress] = useState({});
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Modèle de voiture"
        onChange={(e) => console.log(e)}
        icon={() => <Icon name="car" size={16} color={color.black} />}
        bgColor={color.white}
        placeholderColor={color.black}
      />
      <View style={styles.feature}>
      
        <TextFont weight="bold" style={{fontSize : 24}}>Préférences :</TextFont>
        <View style={{ height: 10 }} />
        <Feature text="Animaux" onClick={() => null} name="pets" />
        <View style={{ height: 10 }} />
        <Feature text="Baguage" onClick={() => null} name="luggage" />
        <View style={{ height: 10 }} />
        <Feature text="Deux max à l'arrière" onClick={() => null} name="group" />
        <View style={{ height: 10 }} />
        <Feature text="Fumer" onClick={() => null} name="smoking" />
        <View style={{ height: 10 }} />
        <Feature text="Conversation" onClick={() => null} name="comments" />
        <View style={{ height: 10 }} />
        <Feature text="Musique" onClick={() => null} name="musical-notes" />
      </View>
      <Button text="Créer covoiturage" onClick={()=>navigation.navigate('Home', { screen: 'Covoiturages' })}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    flexDirection: "column",
    backgroundColor: color.gray,
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
    overflow : "scroll"
  },
  feature : {
    width : "100%", 
    alignItems : "center"
  }
});

export default Index
