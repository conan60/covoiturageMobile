import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, Alert } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import AutoComplete from "../../components/input-autocomplete";
import Button from '../../components/button'
import Maps from "../../components/maps";
import { color } from "../../theme"
import searchLocation from '../../services/get-map-suggestions'

const Index= (props)=> {
  const { navigation,route } = props;
  const {setAuth} = route.params

  const [locationDep, setLocationDep] = useState([]);
  const [locationDest, setLocationDest] = useState([]);


  return (
    <View style={styles.container}>

      <View style={styles.autoComplete}>
        <AutoComplete
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
            />
            <View style={styles.marge}/>
            <View style={{width : "100%",flexDirection : "row", justifyContent : "flex-end"}}>
              <Button text="Recherche" onClick={()=>navigation.push('SearchCovSecond')}/>
            </View>
      </View>

      <View style={styles.map}>
        <Maps/>
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
    justifyContent: "space-between",
  },
  autoComplete :{
    flex : -1,
    alignItems: "center",
    justifyContent: "flex-start",
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