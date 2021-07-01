import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Pressable,
  ScrollView,
  View,
} from "react-native";
import TextFont from "../text";
import Button from "../button";
import { color, size } from "../../theme";

const Index = (props) => {
  const { onSubmit, content, modalName = "Modal", visibility = true } = props;
  const [modalVisible, setModalVisible] = useState(visibility);
  const handleValidate = (element) => {
    onSubmit(element);
    setModalVisible(!modalVisible);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <Pressable
        style={styles.backdrop}
        onPress={() => setModalVisible(!modalVisible)}
      />
      <View style={styles.container}>
        <View style={styles.content}>
          <TextFont weight="bold" style={{ fontSize: 24 }}>
            {modalName}
          </TextFont>
          <View style={styles.scroll}>
            <ScrollView>{content}</ScrollView>
          </View>
          <View style={styles.button}>
            <Button
              text="Annuler"
              bgColor={color.black}
              textColor={color.white}
              onClick={() => setModalVisible(!modalVisible)}
            />
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
    paddingVertical: 10,
    flex: -1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
});

export default Index;
