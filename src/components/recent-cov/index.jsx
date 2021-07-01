import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import TextFont from "../text";
import FromTo from "../from-to";
import { color, size } from "../../theme";

const Index = (props) => {
  const {
    size = 24,
    price = 15,
    from = "Msaken",
    to = "Tunis",
    onClick = () => null,
  } = props;

  return (
    <TouchableOpacity
      style={{ ...styles.container }}
      activeOpacity={0.7}
      onPress={onClick}
    >
      <FromTo from={from} to={to} size={size} />

      <TextFont
        weight="bold"
        style={{ fontSize: size }}
      >{`${price} DT`}</TextFont>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: size.defaultRadius,
    backgroundColor: color.white,
    padding: 10,
  },
});

export default Index;
