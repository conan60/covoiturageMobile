import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import CovSent from "../../components/covoiturage-sent";
import { color } from "../../theme";

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
    status: "wait",
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
    status: "accept",
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
    status: "refuse",
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
    status: "wait",
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
    status: "wait",
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
    status: "accept",
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
    status: "refuse",
  },
];

const Index = (props) => {
  const { navigation } = props;
  const [press, setPress] = useState({});
  return (
      <ScrollView style={styles.container}>
        {mockMessage.map((el, index) => (
          <CovSent
            key={index}
            {...el}
            onClick={() => null}
            onClickUser={() => navigation.push('Profil')}
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
