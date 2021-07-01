import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import TextFont from "../../components/text";
import Avatar from "../../components/avatar";
import FromTo from "../../components/from-to";
import Rating from "../../components/rating";
import Pref from "../../components/preference";
import Slide from "../../components/button-slide";
import Button from "../../components/button";
import { color } from "../../theme";

export default function App({navigation}) {
  const [state, setState] = useState(0);
  return (
    <View style={styles.container}>
      <Avatar
        onPress={()=>navigation.push('Profil')}
        size="xlarge"
        title={"MG"}
        image={
          "https://cdna.artstation.com/p/assets/images/images/024/643/222/20200301115242/micro_square/haroun-gorchene-24022020.jpg?1583085162"
        }
      />
      <TextFont weight="bold" style={{fontSize : 30}}>Malek Gorchene</TextFont>
      <View style={{ flexDirection: "row" }}>
        <Rating isDisabled value={5} size={16} />
        <TextFont style={{fontSize : 16}}>202 votes</TextFont>
      </View>
      <View style={{ flexDirection: "row",justifyContent : 'space-evenly', width:'100%' }}>
        <FromTo from="Msaken" to="Nabeul" size={20} /> 
        <TextFont  style={{fontSize : 20}}>10 DT</TextFont>
      </View>
      <View style={{ flexDirection: "row",justifyContent : 'space-evenly', width:'60%' }}>
        <TextFont weight="bold" style={{fontSize : 20}}>02/10</TextFont> 
        <TextFont weight="bold" style={{fontSize : 20}}>17:30</TextFont>
      </View>
      <TextFont>4 places disponible</TextFont>
      <View style={{ flexDirection: "row" }}>
        {Object.entries({
          pets: false,
          smoking: true,
          "musical-notes": true,
        }).map(([pref, value]) => (
          <Pref size={32} name={pref} interdit={value} color={color.black} />
        ))}
      </View>
      <View style={styles.w100}>
        <TextFont>Filtre par nombre des places :{state}</TextFont>
        <View style={{ width: "100%" }}>
          <Slide min={0} max={4} onChange={(nbr) => setState(nbr)} />
          <Button text="Envoyer la demande" onClick={()=>navigation.push('Home')}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: color.gray,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  w100: {
    width: "100%",
    padding: 10,
    flex: -1,
  },
});
