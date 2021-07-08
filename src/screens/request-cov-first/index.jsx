import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import TextFont from "../../components/text";
import Avatar from "../../components/avatar";
import FromTo from "../../components/from-to";
import Rating from "../../components/rating";
import Pref from "../../components/preference";
import Slide from "../../components/button-slide";
import Button from "../../components/button";
import { color } from "../../theme";
import axios from '../../services/api'
import showToast from "../../services/show-toast";

export default function App({navigation,route}) {


  const [state, setState] = useState(0);

  const {name, id, userId, price,hour, date, nbrPlaces,prefs,from,to,distance,votes} = route.params

  const splitName = name.split(' ')
    const title = `${splitName[0]?.[0]?.toUpperCase()}${splitName[1]?.[0]?.toUpperCase()}`


    const requestCov = ()=>{
      showToast("Chargement...") 
      axios().then(instance=>instance.post('/covoiturageRequests/',{toUserId : userId,covoiturageId : id,distance})
      .then(({data})=>{
        if(data.error)
          {console.log(data)
         showToast('Un erreur s\'est produit ❌') 
        }
        else{
          console.log(data)
          showToast('Demande envoyer avec succes ✔️')
          navigation.navigate('Home')
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
    <View style={styles.container}>
      <Avatar
        onPress={()=>navigation.push('Profil',{userId,votes,name})}
        size="xlarge"
        title={title}

      />
      <TextFont weight="bold" style={{fontSize : 30}}>{name}</TextFont>
      <View style={{ flexDirection: "row" }}>
        <Rating isDisabled value={votes.map(el=>el.rate).reduce((a, b) => a + b,0) / votes.length} size={16} />
        <TextFont style={{fontSize : 16}}>{votes.length} votes</TextFont>
      </View>
      <View style={{ flexDirection: "row",justifyContent : 'space-evenly', width:'100%' }}>
        <FromTo from={from} to={to} size={16} /> 
        <TextFont  style={{fontSize : 20}}>{price} DT</TextFont>
      </View>
      <View style={{ flexDirection: "row",justifyContent : 'space-evenly', width:'60%' }}>
        <TextFont weight="bold" style={{fontSize : 20}}>{date}</TextFont> 
        <TextFont weight="bold" style={{fontSize : 20}}>{hour}</TextFont>
      </View>
      <TextFont>{nbrPlaces} places disponible</TextFont>
      <View style={{ flexDirection: "row" }}>
        {Object.entries(prefs).map(([pref, value]) => (
          <Pref key={pref} size={32} name={pref} interdit={!value} color={color.black} />
        ))}
      </View>
      <View style={styles.w100}>
        <TextFont>Nombre des places a réserver : {state}</TextFont>
        <View style={{ width: "100%" }}>
          <Slide min={1} max={nbrPlaces} onChange={(nbr) => setState(nbr)} />
          <Button text="Envoyer la demande" onClick={requestCov}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: color.gray,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  w100: {
    width: "100%",
    padding: 10,
    flex: -1,
  },
});
