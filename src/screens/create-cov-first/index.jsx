import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Button from "../../components/button";
import Slide from "../../components/button-slide";
import DateTime from "../../components/date";
import TextInput from "../../components/input-icon";
import TextFont from "../../components/text";
import { color } from "../../theme";

export default function App({navigation}) {
  const [state, setState] = useState(0);
  const [state1, setState1] = useState(0);
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Depart"
        onChange={(e) => console.log(e)}
        icon={() => (
          <Icon name="md-location-outline" size={16} color={color.black} />
        )}
        bgColor={color.white}
        placeholderColor={color.black}
      />
      <TextInput
        placeholder="Déstination"
        onChange={(e) => console.log(e)}
        icon={() => <Icon name="md-locate" size={16} color={color.black} />}
        bgColor={color.white}
        placeholderColor={color.black}
      />
      <View style={{ flexDirection: "row" }}>
        <DateTime min mode="date" />
        <DateTime min mode="time" />
      </View>
      <View style={styles.w100}>
      <View style={styles.w100}>
        <TextFont>Nombre des places :{state}</TextFont>
        <View style={{ width: "100%" }}>
          <Slide min={0} max={8} onChange={(nbr) => setState(nbr)} />
        </View>
      </View>
      <View style={styles.w100}>
        <TextFont>Prix:{state1}DT</TextFont>
        <View style={{ width: "100%" }}>
          <Slide min={0} max={30} onChange={(nbr) => setState1(nbr)} />
          
        </View>
      </View>
      </View>
      <Button
            text="Envoyer la demande"
            onClick={() => navigation.push("CreateCovSecond")}
          />
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
    padding : 20
  },
  w100 : {
    width : "100%",
    padding :10
  }
});
