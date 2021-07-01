import React, {useLayoutEffect} from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { color } from '../../theme';

import Sent from './covoiturage-sent';
import Received from './covoiturage-received';
import Created from './covoiturage-created';



const MaterialTopTabs = createMaterialTopTabNavigator();

const Index = (props) =>{

  const {
    navigation,
  } = props
  useLayoutEffect(() => {
    navigation.setOptions({
      cardStyle: { flex: 1 },
    });
  }, [navigation]);

  return (
    <MaterialTopTabs.Navigator
    tabBarOptions={{
      activeTintColor: color.black,
      inactiveTintColor: color.gray,
      labelStyle: {
        fontFamily: "CatamaranBolder",
        fontSize : 12,
      },
      style : {
        backgroundColor : color.white
      },
      indicatorStyle : {
        backgroundColor : color.yellow,
        height : 6
      },
      
    }}
    >
      <MaterialTopTabs.Screen
        name="CovoiturageSent"
        component={Sent}
        options={{ title: 'Envoyée' }}
      />
      <MaterialTopTabs.Screen
        name="CovoiturageReceived"
        component={Received}
        options={{ title: 'Reçu' }}
      />
      <MaterialTopTabs.Screen
        name="CovoiturageCreated"
        component={Created}
        options={{ title: 'Crée' }}
      />
    </MaterialTopTabs.Navigator>
  );
}



export default Index