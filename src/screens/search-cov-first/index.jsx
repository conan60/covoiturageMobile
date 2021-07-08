import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, Alert } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import AutoComplete from "../../components/input-autocomplete";
import Button from '../../components/button'
import Modal from "../../components/modal";
import Maps from "../../components/maps";
import TextInput from "../../components/input-icon";
import showToast from "../../services/show-toast";
import axios from '../../services/api'
import {getTime, getDateShort} from "../../services/date-time";
import getDistance from "../../services/get-distance";

import { color } from "../../theme"
import searchLocation from '../../services/get-map-suggestions'

const Index= (props)=> {
  const { navigation,route } = props;

  const [showModalDepart, setShowModalDepart] = useState(false);
  const [showModalDest, setShowModalDest] = useState(false);
  const [infoDepart, setInfoDepart] = useState(null);
  const [infoDest, setInfoDest] = useState(null);

  const [locationDep, setLocationDep] = useState([]);
  const [locationDest, setLocationDest] = useState([]);



  const searchCov = ()=>{
    showToast("Chargement...") 
    axios().then(instance=>instance.get('/covoiturages/')
    .then(({data})=>{
      if(data.error)
        {console.log(data)
       showToast('Un erreur s\'est produit ❌') 
      }
      else{
        console.log(data)
        showToast('Recherche avec succes ✔️')
        navigation.navigate('SearchCovSecond', { data :  data.filter(el=>getDistance(infoDepart,el.from)<30 && getDistance(infoDest,el.to)<30).map(el=>({
          id : el._id,
          userId : el.userId?._id,
          name : el.userId?.name,
          votes : el.userId?.eval,
          date : el.date,
          from : el.from?.name,
          to : el.to?.name,
          price : el.price,
          nbrPlaces : el.numberPlaces,
          prefs : el.preference,
          hour : getTime(new Date(el.date)),
          date : getDateShort(new Date(el.date)),
          distance : getDistance(infoDepart,el.from)
        })) })
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

      <View style={styles.autoComplete}>
        {/* <AutoComplete
            onChange={e => {
              searchLocation(e)
              .then(res=>setLocationDep(res.data.map(res=>`${res.address.hamlet!=="undefined"&&res.address.hamlet||
              res.address.city!=="undefined"&&res.address.city||
              res.address.county!=="undefined"&&res.address.county||
              res.address.suburb!=="undefined"&&res.address.suburb||''}, ${res.address.state}`)))
              .catch(err=>Alert.alert(err.message))
            }}
            placeholder="Départ" 
            icon={() => <Icon name="md-location-outline" size={16} color={color.black} />}
            bgColor={color.white}
            placeholderColor={color.black}
            zIndex={3}
            list={locationDep}
            />
            <View style={styles.marge}/>

        <AutoComplete
            onChange={e => {
              searchLocation(e)
              .then(res=>setLocationDest(res.data.map(res=>`${res.address.hamlet}, ${res.address.state}`)))
              .catch(err=>Alert.alert(err.message))
            }}
            placeholder="Déstination" 
            icon={() => <Icon name="md-locate" size={16} color={color.black} />}
            bgColor={color.white}
            placeholderColor={color.black}
            zIndex={2}
            list={locationDest}
            /> */}
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
            <View style={styles.marge}/>
            <View style={{width : "100%",flexDirection : "row", justifyContent : "flex-end"}}>
              <Button text="Recherche" onClick={searchCov}/>
            </View>
      </View>

      {/* <View style={styles.map}>
        <Maps/>
      </View> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: color.gray,
    alignItems: "center",
    justifyContent: "space-between",
  },
  autoComplete :{
    flex : 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    padding : 10,
  },
  marge : {
    padding : 5,
  },
  map :{
    flex : 4,
    alignItems: "center",
    justifyContent : 'center',
    height : "100%",
    width : "100%"
  },

});

export default Index