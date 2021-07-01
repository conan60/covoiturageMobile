import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { color, size as defaultSize } from "../../theme";

const Index = (props) => {
  const { icon, onClick, size = defaultSize.roundedButton } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onClick}
      style={{
        ...styles.button,
        height: size,
        width: size,
        borderRadius: size / 2,
      }}
    >
      {icon()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    backgroundColor: color.yellow,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Index;
