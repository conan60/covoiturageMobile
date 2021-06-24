import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import Slider from "../../components/slider";
import BottomMenu from "../../components/bottom-menu";
import { color } from "../../theme";

const Index = (props) => {
  const { navigation, route } = props;
  const { setAuth } = route.params;

  const [press, setPress] = useState({});

  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <Slider />
      </View>

      <View style={styles.cov}></View>

      <View style={styles.menu}>
        <BottomMenu addHandler={() => navigation.push("SearchCovFirst")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: color.gray,
    alignItems: "center",
    justifyContent: "space-between",
  },
  slider: {
    flex: 3,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 10,
  },
  cov: {
    width: "90%",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  menu: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: color.gray,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default Index;
