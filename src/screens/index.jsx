import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import * as SecureStore from 'expo-secure-store';
import ShowToast from '../services/show-toast'
import { color } from "../theme";

import AccountParams from "./account-params";
import AuthMail from "./auth-mail";
import AuthSso from "./auth-sso";
import CreateCovFirst from "./create-cov-first";
import CreateCovSecond from "./create-cov-second";
import Home from "./home";
import MessageSingleUser from "./message-single-user";
import Profil from "./profil";
import RequestCovFirst from "./request-cov-first";
import RequestCovSecond from "./request-cov-second";
import SearchCovFirst from "./search-cov-first";
import SearchCovSecond from "./search-cov-second";
import SignUp from "./signup";

const Screens = {
  authScreens: {
    AuthMail: { component: AuthMail, title: "Authentification" },
    AuthSso: { component: AuthSso, title: "Authentification" },
    SignUp: { component: SignUp, title: "Inscription" },
  },
  userScreens: {
    Home: {
      component: Home,
      title: "Acceuil",
      hideBar : true
    },
    AccountParams: { component: AccountParams, title: "Paramétres" },
    CreateCovFirst: {
      component: CreateCovFirst,
      title: "Création de covoiturage",
    },
    CreateCovSecond: {
      component: CreateCovSecond,
      title: "Création de covoiturage",
    },
    MessageSingleUser: { component: MessageSingleUser, title: "Messages" },
    Profil: { component: Profil, title: "Profile" },
    RequestCovFirst: {
      component: RequestCovFirst,
      title: "Demande de covoiturage",
    },
    RequestCovSecond: {
      component: RequestCovSecond,
      title: "Demande de covoiturage",
    },
    SearchCovFirst: { component: SearchCovFirst, title: "Recherche" },
    SearchCovSecond: { component: SearchCovSecond, title: "Recherche" },
  },
};

const Stack = createStackNavigator();

const customHeader = (screens, setAuth) => {
  return Object.entries(screens).map(([name, params]) => (
    <Stack.Screen
      name={name}
      component={params.component}
      options={params.hideBar ? {headerShown : false}: { title: params.title }}
      initialParams={{ setAuth }}
      key={name}
    />
  ));
};

const Index = () => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(()=>{
    SecureStore.getItemAsync('token')
    .then(token=>token?setIsAuth(true):setIsAuth(false))
    .catch(err=>ShowToast("Un erreur s'est produit!"))
  },[isAuth])


  // For not showing any UI
  if(isAuth === null) return null


  return (
    <>
      {isAuth ? (
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: color.black,
            },
            headerTintColor: color.white,
            headerTitleStyle: {
              fontFamily: "CatamaranBolder",
            },
            headerTitleAlign: "center",
          }}
        >
          {customHeader(Screens.userScreens,setIsAuth)}
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="AuthSso"
          screenOptions={{
            headerStyle: {
              backgroundColor: color.black,
            },
            headerTintColor: color.white,
            headerTitleStyle: {
              fontFamily: "CatamaranBolder",
            },
            headerTitleAlign: "center",
            headerShown: false,
          }}
        >
          {customHeader(Screens.authScreens, setIsAuth)}
        </Stack.Navigator>
      )}
    </>
  );
};

export default Index;
