import React from "react";
import { StyleSheet, View } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import FAIcon from "react-native-vector-icons/FontAwesome5";
import IonIcon from "react-native-vector-icons/Ionicons";
import { color as palette } from "../../theme";

const Icon = (props) => {
  const { name } = props;
  switch (name) {
    case "pets":
    case "luggage":
    case "group":
      return <MaterialIcon {...props} />;
    case "smoking":
    case "comments":
      return <FAIcon {...props} />;
    case "musical-notes":
      return <IonIcon {...props} />;
    default:
      return null;
  }
};
const Index = (props) => {
  const {
    name = "pets",
    size = 16,
    color = palette.white,
    onClick = () => null,
    interdit,
  } = props;

  const wrapperSize = Math.sqrt(size ** 2 * 2)

  return (
    <View style={{...styles.container,width :wrapperSize,height : wrapperSize }}>
      <Icon name={name} size={size} color={color} onPress={onClick} />

      {interdit && (
        <MaterialIcon
          style={{ position: "absolute" }}
          name="do-not-disturb-alt"
          size={wrapperSize}
          color={"#ED7676cc"}
          onPress={onClick}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Index;
