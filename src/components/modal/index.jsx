import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Pressable,
  Dimensions,
  View,
} from "react-native";
import TextFont from "../text";
import Button from "../button";
import { color, size } from "../../theme";

const Index = (props) => {
  const { onSubmit = ()=>null, content, modalName = "Modal", visibility = true, setVisibility= ()=>null } = props;
  const handleValidate = (element) => {
    onSubmit(element);
    setVisibility(!visibility);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visibility}
      onRequestClose={() => {
        setVisibility(!visibility);
      }}
    >
      <Pressable
        style={styles.backdrop}
        onPress={() => setVisibility(!visibility)}
      />
      <View style={styles.container}>
        <View style={styles.content}>
          <TextFont weight="bold" style={{ fontSize: 24 }}>
            {modalName}
          </TextFont>
          <View style={styles.scroll}>
            {content}
          </View>
          <View style={styles.button}>
            <Button
              text="Annuler"
              bgColor={color.black}
              textColor={color.white}
              onClick={() => setVisibility(!visibility)}
            />
            <View style={{width : 10}}/>
            <Button text="Valider" onClick={handleValidate} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: color.gray,
    justifyContent: "space-between",
    alignItems: "center",
    maxHeight: "80%",
    borderRadius: size.defaultRadius,
    padding: 10,
  },
  scroll: {
    width : (Dimensions.get("window").width)-40,
    paddingVertical: 10,
    flex: -1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
});

export default Index;
