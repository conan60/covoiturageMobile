import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import CovCreated from "../../components/covoiturage-create";
import { color } from "../../theme";

const mockMessage = [
  {
    prefs : {luggage : true,pets : false,smoking : true,'musical-notes' : true}, 
    price : 12,
    rate: 3.5,
    nbrPlaces: 4,
    from: "Msaken",
    to: "Tunis",
    hour: "10:00",
    date: "02/10",
  },
  {
    prefs : {comments : false,pets : false,smoking : true,'musical-notes' : true}, 
    price : 10,
    nbrVote: 83,
    rate: 4,
    nbrPlaces: 2,
    from: "Sousse",
    to: "Tunis",
    hour: "11:00",
    date: "05/09",
    distance: 10,
    status: "accept",
  },
  {
    prefs : {pets : true,smoking : true,'musical-notes' : true}, 
    price : 15,
    nbrVote: 2,
    rate: 1,
    nbrPlaces: 1,
    from: "Sahloul",
    to: "Ariana",
    hour: "15:00",
    date: "03/10",
    distance: 3,
    status: "refuse",
  },
  {
    prefs : {pets : true,smoking : false,'musical-notes' : false}, 
    price : 18,
    nbrVote: 53,
    rate: 5,
    nbrPlaces: 4,
    from: "Sfax",
    to: "Tunis",
    hour: "16:00",
    date: "02/12",
    distance: 1,
    status: "wait",
  },
  {
    prefs : {pets : false,smoking : true,'musical-notes' : false, luggage : false}, 
    price : 5,
    nbrVote: 223,
    rate: 5,
    nbrPlaces: 2,
    from: "Msaken",
    to: "Tunis",
    hour: "17:00",
    date: "02/10",
    distance: 1,
    status: "wait",
  },
  {
    prefs : {group : false,pets : false,smoking : true,'musical-notes' : true}, 
    price : 20,
    nbrVote: 23,
    rate: 3.5,
    nbrPlaces: 5,
    from: "Msaken",
    to: "Nabeul",
    hour: "10:00",
    date: "11/10",
    distance: 15,
    status: "accept",
  },
  {
    prefs : {comments : false,pets : false,smoking : true,'musical-notes' : true}, 
    price : 11,
    nbrVote: 23,
    rate: 3.5,
    nbrPlaces: 3,
    from: "Msaken",
    to: "Tunis",
    hour: "10:00",
    date: "02/10",
    distance: 1,
    status: "refuse",
  },
];

const Index = (props) => {
  const { navigation } = props;
  const [press, setPress] = useState({});
  return (
    <ScrollView style={styles.container}>
      {mockMessage.map((el, index) => (
        <CovCreated
          key={index}
          {...el}
          onClick={() => null}
          onClickUser={() => navigation.push("Profil")}
          onAccept={() => null}
          onRefuse={() => null}
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
