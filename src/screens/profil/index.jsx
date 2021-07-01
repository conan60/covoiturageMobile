import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import TextFont from "../../components/text";
import Avatar from "../../components/avatar";
import Rating from "../../components/rating";

import { color } from "../../theme";

export default function App({navigation}) {
  const [state, setState] = useState(0);
  return (
    <View style={styles.container}>
      <Avatar
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
