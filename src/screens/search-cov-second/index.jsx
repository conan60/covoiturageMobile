import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Foundation";
import Text from "../../components/text";
import Slide from "../../components/button-slide";
import Covoiturage from "../../components/covoiturage";
import { color } from "../../theme";

export default function App(props) {
  const { navigation, route } = props;
  console.log("Second", route.params);
  const [placesFilter, setPlacesFilter] = useState(1);
  return (
    <View style={styles.container}>
      <View style={styles.w100}>
        <Text>
          {" "}
          <Icon name="filter" size={20} color={color.black} />
          {`Filtre par nombre des places : ${placesFilter}`}
        </Text>
        <View style={{ width: "100%" }}>
          <Slide min={1} max={8} onChange={(nbr) => setPlacesFilter(nbr)} />
        </View>
      </View>
      <ScrollView style={{ ...styles.w100 }}>
        {(route.params?.data || [])
          .filter((el) => el.nbrPlaces >= placesFilter)
          .map((el) => (
            <Covoiturage
              key={el.id}
              {...el}
              onClick={() => navigation.push("RequestCovFirst", el)}
              onClickUser={() => navigation.navigate("Profil", el)}
            />
          ))}
        {/* <Covoiturage
          name="Haroun Gorchene"
          image="https://media-exp3.licdn.com/dms/image/C4D03AQHlKp72u4Oyfw/profile-displayphoto-shrink_200_200/0/1534887781047?e=1628121600&v=beta&t=YVPKm42tspAtX84Qwla6zL8bQjsbKUfpFR_neeCRCdg"
          nbrVote={53}
          rate={5}
          price={15}
          nbrPlaces={4}
          from="Msaken"
          to="Tunis"
          prefs={{ pets: false, smoking: true, "musical-notes": true }}
          hour="10:00"
          date="02/10"
          distance={1}
          onClick={() => navigation.push("RequestCovFirst")}
          onClickUser={() => navigation.push("Profil")}
        />
        <Covoiturage
          name="Oussema Jedidi"
          nbrVote={243}
          rate={2}
          price={10}
          nbrPlaces={4}
          from="Sousse"
          to="Tunis"
          prefs={{ pets: false, smoking: true, "musical-notes": true }}
          hour="10:00"
          date="02/10"
          distance={10}
          onClick={() => navigation.push("RequestCovFirst")}
          onClickUser={() => navigation.push("Profil")}
        />
        <Covoiturage
          name="Badr Gorchene"
          image="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg"
          nbrVote={23}
          rate={3.5}
          price={15}
          nbrPlaces={4}
          from="Msaken"
          to="Sfax"
          prefs={{ pets: false, smoking: true, "musical-notes": true }}
          hour="10:00"
          date="02/10"
          distance={15}
          onClick={() => navigation.push("RequestCovFirst")}
          onClickUser={() => navigation.push("Profil")}
        />
        <Covoiturage
          name="Ahmad Salih"
          image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theguardian.com%2Fculture%2F2017%2Fsep%2F02%2Frussell-brand-needy-person-less-mad-now&psig=AOvVaw3jTqk5SC1-CKaVZrcelZrA&ust=1624678807524000&source=images&cd=vfe&ved=0CAcQjRxqFwoTCMCmtKvusfECFQAAAAAdAAAAABAN"
          nbrVote={23}
          rate={3.5}
          price={15}
          nbrPlaces={4}
          from="Msaken"
          to="Tunis"
          prefs={{ pets: false, smoking: true, "musical-notes": true }}
          hour="10:00"
          date="02/10"
          distance={10}
          onClick={() => navigation.push("RequestCovFirst")}
          onClickUser={() => navigation.push("Profil")}
        />
        <Covoiturage
          name="Amine Gorchene"
          nbrVote={213}
          rate={3.5}
          price={15}
          nbrPlaces={4}
          from="Touzeur"
          to="Tunis"
          prefs={{ pets: false, smoking: true, "musical-notes": true }}
          hour="10:00"
          date="02/10"
          distance={1}
          onClick={() => navigation.push("RequestCovFirst")}
          onClickUser={() => navigation.push("Profil")}
        />
        <Covoiturage
          name="Salem Rouis"
          image="https://i.guim.co.uk/img/media/670b57d37bfb02cb41748cc8cde54d62a8b8e19b/0_567_4096_4448/master/4096.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=dea07e2bd5c50b66c77f34ac7aadfb9a"
          nbrVote={23}
          rate={3.5}
          price={12}
          nbrPlaces={4}
          from="Msaken"
          to="Tunis"
          prefs={{ pets: false, smoking: true, "musical-notes": true }}
          hour="10:00"
          date="02/10"
          distance={15}
          onClick={() => navigation.push("RequestCovFirst")}
          onClickUser={() => navigation.push("Profil")}
        /> */}
        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: color.gray,
    alignItems: "center",
    justifyContent: "center",
  },
  w100: {
    width: "100%",
    padding: 10,
    flex: -1,
  },
});
