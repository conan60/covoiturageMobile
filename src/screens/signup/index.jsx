import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import * as SecureStore from 'expo-secure-store';
import Link from "../../components/link";
import Button from "../../components/button";
import TextInput from "../../components/input-icon";
import { color } from "../../theme";
import axios from '../../services/api'
import showToast from "../../services/show-toast";
import SafeView from '../../components/safe-view'

const Index = (props) => {
  const { route } = props;
  const { setAuth } = route.params;

  const [payload, setPayload] = useState({});

  const signup = ()=>{
    showToast("Chargement...") 
    axios().then(instance=>instance.post('/users/register',payload)
    .then(({data})=>{
      if(data.error){
      console.log(data)
       showToast(data.details.details[0].message) }
      else{
        SecureStore.setItemAsync('token',data.token)
        setAuth(data)
      }
    })
    .catch(error=>{
        console.log(error)
        showToast('Un erreur s\'est produit')
      })).catch(e=>showToast('Un erreur s\'est produit'))
  }

  return (
    <SafeView style={styles.container}>
      <View style={styles.image}>
        <Image
          style={{ resizeMode: "contain", width: 162 }}
          source={require("../../../assets/logo/YallaCo.png")}
        />
      </View>

      <View style={styles.input}>
        <TextInput
          placeholder="Nom d'utilisateur"
          onChange={(e) => setPayload({...payload,name : e})}
          icon={() => <Icon name="person" size={16} color={color.black} />}
          bgColor={color.white}
          placeholderColor={color.black}
        />
        <TextInput
          placeholder="Email"
          onChange={(e) => setPayload({...payload,email : e})}
          icon={() => <Icon name="mail" size={16} color={color.black} />}
          bgColor={color.white}
          placeholderColor={color.black}
        />
        <TextInput
          placeholder="Mot de passe"
          onChange={(e) => setPayload({...payload,password : e})}
          icon={() => <Icon name="key" size={16} color={color.black} />}
          bgColor={color.white}
          placeholderColor={color.black}
          isPass
        />
        {/* <TextInput
          placeholder="Comfirmer mot de passe"
          onChange={(e) => console.log(e)}
          icon={() => <Icon name="key" size={16} color={color.black} />}
          bgColor={color.white}
          placeholderColor={color.black}
        /> */}
        <Button text="Création du compte" onClick={signup} />

        <Link
          onPress={() => {}}
          style={{ fontSize: 12 }}
        >{`Termes & Politique de confidentialité`}</Link>
      </View>

      <View style={styles.signup}></View>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "column",
    backgroundColor: color.gray,
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    flex: 3,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    width: "90%",
    flex: 4,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  signup: {
    flex: 2,
    flexDirection: "column",
    backgroundColor: color.gray,
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Index;
