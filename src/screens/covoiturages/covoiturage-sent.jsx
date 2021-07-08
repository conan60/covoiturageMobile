import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import CovSent from "../../components/covoiturage-sent";
import { color } from "../../theme";
import showToast from "../../services/show-toast";
import axios from '../../services/api'
import {getTime, getDateShort} from "../../services/date-time";

const mockMessage = [
  {
    name: "Malek Gorchene",
    image : null,
    nbrVote: 23,
    rate: 3.5,
    nbrPlaces: 4,
    from: "Msaken",
    to: "Tunis",
    hour: "10:00",
    date: "02/10",
    distance: 1,
    status: "waiting",
  },
  {
    name: "Salem Gorchene",
    image : null,
    nbrVote: 83,
    rate: 4,
    nbrPlaces: 2,
    from: "Sousse",
    to: "Tunis",
    hour: "11:00",
    date: "05/09",
    distance: 10,
    status: "accepted",
  },
  {
    name: "Fatma Gorchene",
    image : null,
    nbrVote: 2,
    rate: 1,
    nbrPlaces: 1,
    from: "Sahloul",
    to: "Ariana",
    hour: "15:00",
    date: "03/10",
    distance: 3,
    status: "refused",
  },
  {
    name: "Haroun Gorchene",
    image : null,
    nbrVote: 53,
    rate: 5,
    nbrPlaces: 4,
    from: "Sfax",
    to: "Tunis",
    hour: "16:00",
    date: "02/12",
    distance: 1,
    status: "waiting",
  },
  {
    name: "Jared Leto",
    image : "https://www.premiere.fr/sites/default/files/styles/scale_crop_560x800/public/2018-04/abaca_421818_007_0.jpg",
    nbrVote: 223,
    rate: 5,
    nbrPlaces: 4,
    from: "Msaken",
    to: "Tunis",
    hour: "17:00",
    date: "02/10",
    distance: 1,
    status: "waiting",
  },
  {
    name: "Malek Salhouf",
    image : null,
    nbrVote: 23,
    rate: 3.5,
    nbrPlaces: 4,
    from: "Msaken",
    to: "Nabeul",
    hour: "10:00",
    date: "11/10",
    distance: 15,
    status: "accepted",
  },
  {
    name: "Donkey Monkey",
    image : null,
    nbrVote: 23,
    rate: 3.5,
    nbrPlaces: 4,
    from: "Msaken",
    to: "Tunis",
    hour: "10:00",
    date: "02/10",
    distance: 1,
    status: "refused",
  },
];

const Index = (props) => {
  const { navigation } = props;
  const [cov, setCov] = useState([]);

  useEffect(()=>{
    showToast("Chargement...") 
    axios().then(instance=>instance.get('/covoiturageRequests/sent')
    .then(({data})=>{
      if(data.error)
        {console.log(data)
       showToast('Un erreur s\'est produit ❌') 
      }
      else{
        console.log(data)
        showToast('Succes ✔️')
        setCov(  data.map(el=>({
          id : el._id,
          userId : el.toUserId?._id,
          name : el.toUserId?.name,
          date : el.covoiturageId?.date,
          votes : el.toUserId?.eval,
          rate : (el.toUserId?.eval || []).map(el=>el.rate).reduce((a, b) => a + b,0) / (el.fromUserId?.eval || []).length,
          nbrVote : (el.toUserId?.eval || []).length,
          from : el.covoiturageId?.from?.name,
          to : el.covoiturageId?.to?.name,
          price : el.covoiturageId?.price,
          nbrPlaces : el.covoiturageId?.numberPlaces,
          prefs : el.covoiturageId?.preference,
          hour : getTime(new Date(el.covoiturageId?.date)),
          date : getDateShort(new Date(el.covoiturageId?.date)),
          distance : 6,
          status : el.status
        })) )
      }
    })
    .catch(error=>{
        console.log(error)
        showToast('Un erreur s\'est produit ❌')
      })).catch(error=>{
        console.log(error)
        showToast('Un erreur s\'est produit ❌')
      })
  },[])


  return (
      <ScrollView style={styles.container}>
        {cov.map((el, index) => (
          <CovSent
            key={index}
            {...el}
            onClick={() => null}
            onClickUser={() => navigation.navigate('Profil',el)}
          />
        ))}
        <View style={{ height: 20 }} />
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: color.gray,
    padding: 10,
  },
});

export default Index;
