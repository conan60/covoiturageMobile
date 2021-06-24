import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { color } from "../theme";

import AccountParams from "./account-params";
import AuthMail from "./auth-mail";
import AuthSso from "./auth-sso";
import CreateCovFirst from "./create-cov-first";
import CreateCovSecond from "./create-cov-second";
import Home from "./home";
import MessageSingleUser from "./message-single-user";
import Messages from "./messages";
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
    Home: { component: Home, title: "Acceuil",props :({navigation})=>({}) },
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
    Messages: { component: Messages, title: "Messages" },
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
      options={{ title: params.title }}
      
      initialParams={{ setAuth }}
      key={name}
    />
  ));
};

const Index = () => {
  const [isAuth, setIsAuth] = useState(null);
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
            headerTitleAlign : 'center',
          }}
        >
          {customHeader(Screens.userScreens)}
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
            headerTitleAlign : 'center',
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
