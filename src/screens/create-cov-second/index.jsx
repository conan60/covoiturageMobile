import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import TextInput from "../../components/input-icon";
import Feature from "../../components/feature-addition";
import TextFont from "../../components/text";
import Button from '../../components/button'
import SafeView from '../../components/safe-view'
import { color } from "../../theme";
import axios from '../../services/api'
import showToast from "../../services/show-toast";

const Index = (props) =>{

  const {navigation, route} = props
  console.log(route.params)
  const [carModel, setCarModel] = useState(null)
  const [preference, setPreference] = useState({
    pets : true,
    luggage: true,
    group: true,
    smoking: true,
    comments: true,
    "musical-notes": true
  });


  const createCov = ()=>{
    showToast("Chargement...") 
    axios().then(instance=>instance.post('/covoiturages/',{...route.params,vehicule : carModel,preference})
    .then(({data})=>{
      if(data.error)
        {console.log(data)
       showToast(data.details.details[0].message) }
      else{
        showToast('Création avec succes ✔️')
        navigation.navigate('Home', { screen: 'Covoiturages' })
      }
    })
    .catch(error=>{
        console.log(error)
        showToast('Un erreur s\'est produit ❌')
      })).catch(error=>{
        console.log(error)
        showToast('Un erreur s\'est produit ❌')
      })
  }


  return (
    <SafeView style={styles.container}>
      <TextInput
        value={carModel}
        placeholder="Modèle de voiture"
        onChange={(e) => setCarModel(e)}
        icon={() => <Icon name="car" size={16} color={color.black} />}
        bgColor={color.white}
        placeholderColor={color.black}
      />
      <View style={styles.feature}>
      
        <TextFont weight="bold" style={{fontSize : 24,color : color.black}}>Préférences :</TextFont>
        <View style={{ height: 10 }} />
        <Feature text="Animaux" onClick={() => setPreference({...preference,pets : !preference.pets})} name="pets" />
        <View style={{ height: 10 }} />
        <Feature text="Baguage" onClick={() => setPreference({...preference,luggage : !preference.luggage})} name="luggage" />
        <View style={{ height: 10 }} />
        <Feature text="Deux max à l'arrière" onClick={() => setPreference({...preference,group : !preference.group})} name="group" />
        <View style={{ height: 10 }} />
        <Feature text="Fumer" onClick={() => setPreference({...preference,smoking : !preference.smoking})} name="smoking" />
        <View style={{ height: 10 }} />
        <Feature text="Conversation" onClick={() => setPreference({...preference,comments : !preference.comments})} name="comments" />
        <View style={{ height: 10 }} />
        <Feature text="Musique" onClick={() => setPreference({...preference,"musical-notes" : !preference["musical-notes"]})} name="musical-notes" />
      </View>
      <Button text="Créer covoiturage" onClick={createCov}/>
    </SafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: color.gray,
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
    overflow : "scroll"
  },
  feature : {
    width : "100%", 
    alignItems : "center"
  }
});

export default Index
