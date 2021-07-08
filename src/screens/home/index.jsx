import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Avatar from "../../components/avatar";
import Slider from "../../components/slider";
import BottomMenu from "../../components/bottom-menu";
import RecentCov from "../../components/recent-cov";
import Covoiturages from "../covoiturages";
import Messages from "../messages";
import { color } from "../../theme";
import { ITEM_HEIGHT } from "../../components/slider";

const Stack = createStackNavigator();

const Global = ({navigation}) => {
  return (
    <>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: color.black,
        },
        headerTintColor: color.white,
        headerTitleStyle: {
          fontFamily: "CatamaranBolder",
        },
        headerTitleAlign: "center",
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="Acceuil"
        component={Index}
        options={({ navigation }) => ({
          title: "Acceuil",
          headerRight: () => (
            <View style={{ paddingRight: 10 }}>
              <Icon
                onPress={() => navigation.push("SearchCovFirst")}
                name="ios-search"
                size={24}
                color={color.white}
              />
            </View>
          ),
          headerLeft: ( ) => (
            <View style={{ paddingLeft: 10 }}>
              <Avatar
                size="small"
                title="JS"
                image="https://www.developpez.net/forums/attachments/p294178d1/a/a/a"
                onPress={() => navigation.push("AccountParams")}
              />
            </View>
          ),
          title: 'Acceuil'
        })}
      />
      
        <Stack.Screen
        name="Covoiturages"
        component={Covoiturages}
        options={{ title: 'Covoiturages' }}
      />
      <Stack.Screen
        name="Messages"
        component={Messages}
        options={{ title: 'Messages' }}
      />
    </Stack.Navigator>
    <View style={styles.menu}>
    <BottomMenu
      addHandler={() => navigation.push("CreateCovFirst")}
      msgHandler={() => navigation.navigate('Home', { screen: 'Messages' })}
      covHandler={() => navigation.navigate('Home', { screen: 'Covoiturages' })}
    />
  </View>
  </>
  );
};

const Index = (props) => {
  const { navigation, route } = props;
  // const { setAuth } = route.params;

  const [press, setPress] = useState({});

  return (
    <View style={styles.container}>
      <View style={{ flex: -1 }}>
        <View style={styles.slider}>
          <Slider />
        </View>

        <ScrollView style={styles.cov}>
          <RecentCov
            from="Bizert"
            to="Mahdia"
            price={20}
            onClick={() => navigation.push("SearchCovFirst")}
          />
          <RecentCov onClick={() => navigation.push("SearchCovFirst")} />
          <RecentCov
            from="Sousse"
            to="Gassrin"
            price={30}
            onClick={() => navigation.push("SearchCovFirst")}
          />
          <RecentCov
            from="Beja"
            to="Mahdia"
            price={10}
            onClick={() => navigation.push("SearchCovFirst")}
          />
          <RecentCov
            from="Jendouba"
            to="Mahdia"
            price={20}
            onClick={() => navigation.push("SearchCovFirst")}
          />
          <RecentCov
            from="Bizert"
            to="Nabeul"
            price={12}
            onClick={() => navigation.push("SearchCovFirst")}
          />
          <RecentCov
            from="Tataouin"
            to="Sfax"
            price={17}
            onClick={() => navigation.push("SearchCovFirst")}
          />
          <RecentCov
            from="Bizert"
            to="Mahdia"
            price={25}
            onClick={() => navigation.push("SearchCovFirst")}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: color.gray,
    alignItems: "center",
    justifyContent: "space-between",
  },
  slider: {
    height :ITEM_HEIGHT+10,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 10,
  },
  cov: {
    flex: -1,
    paddingHorizontal: 10,
  },
  menu: {
    flex: -1,
    flexDirection: "column",
    backgroundColor: color.gray,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default Global;
