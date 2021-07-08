import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import SafeView from "../../components/safe-view";
import Button from "../../components/button";
import Slide from "../../components/button-slide";
import DateTime from "../../components/date";
import TextInput from "../../components/input-icon";
import TextFont from "../../components/text";
import Modal from "../../components/modal";
import Maps from "../../components/maps";
import ShowToast from "../../services/show-toast";
import { color } from "../../theme";

export default function App({ navigation }) {
  const [nbrPlace, setNbrPlace] = useState(0);
  const [price, setPrice] = useState(0);
  const [showModalDepart, setShowModalDepart] = useState(false);
  const [showModalDest, setShowModalDest] = useState(false);
  const [infoDepart, setInfoDepart] = useState(null);
  const [infoDest, setInfoDest] = useState(null);
  const [date, setDate] = useState(null);


  const verifParams = ()=>{
    return nbrPlace && infoDepart && infoDest && date
  }


  return (
    <SafeView style={styles.container}>
      <Modal
        onSubmit={()=>setShowModalDepart(false)}
        modalName="Départ"
        visibility={showModalDepart}
        setVisibility={setShowModalDepart}
        content={
          <Maps
            onChangePosition={(position) => {
              setInfoDepart(position);
            }}
          />
        }
      />
      <Modal
        onSubmit={()=>setShowModalDest(false)}
        modalName="Destination"
        visibility={showModalDest}
        setVisibility={setShowModalDest}
        content={
          <Maps
            onChangePosition={(position) => {
              setInfoDest(position);
            }}
          />
        }
      />
      <TextInput
        value={infoDepart?.name}
        placeholder="Départ"
        onFocus={() => setShowModalDepart(true)}
        icon={() => (
          <Icon name="md-location-outline" size={16} color={color.black} />
        )}
        bgColor={color.white}
        placeholderColor={color.black}
        showKeyboard={false}
      />
      <TextInput
      value={infoDest?.name}
        placeholder="Déstination"
        onFocus={() => setShowModalDest(true)}
        icon={() => <Icon name="md-locate" size={16} color={color.black} />}
        bgColor={color.white}
        placeholderColor={color.black}
        showKeyboard={false}
      />
      <View style={styles.w100}>
        <DateTime min mode="date" onChange={(date)=>setDate(date)} />
        <View style={{ height: 10 }} />
        <DateTime min mode="time" onChange={(date)=>setDate(date)}/>
      </View>
      <View style={styles.w100}>
        <View style={styles.w100}>
          <TextFont style={styles.text}>
            Nombre des places : {nbrPlace}
          </TextFont>
          <View style={{ width: "100%" }}>
            <Slide min={0} max={8} onChange={(nbr) => setNbrPlace(nbr)} />
          </View>
        </View>
        <View style={styles.w100}>
          <TextFont style={styles.text}>Prix : {price}DT</TextFont>
          <View style={{ width: "100%" }}>
            <Slide min={0} max={30} onChange={(nbr) => setPrice(nbr)} />
          </View>
        </View>
      </View>
      <Button
        text="Suivant"
        onClick={() =>verifParams()? 
          navigation.navigate("CreateCovSecond",{numberPlaces :nbrPlace,price,to : infoDest,from : infoDepart,date}):
          ShowToast("Il faut remplir les paramétres !")
        }
      />
    </SafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: color.gray,
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 10,
  },
  text: {
    fontSize: 16,
  },
  w100: {
    width: "100%",
    padding: 10,
  },
});
