import React from "react";
import { StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
import { color } from "../../theme";

const Index = (props) => {
  const {
    size = "medium",
    title = "/",
    image = null,
    onPress =  null} = props;
    const other = image ? {source : {uri: image}} : {}
  return (
    <Avatar
      rounded
      title={title}
      activeOpacity={onPress ? 0.7 : 1}
      onPress={onPress}
      size={size}
      {...other}
      titleStyle={styles.title}
      overlayContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.black,
  },
  title: {
    color: color.white,
    fontFamily: "Catamaran",
  },
});

export default Index;
