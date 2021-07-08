import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import * as SecureStore from 'expo-secure-store';
import showToast from "../../services/show-toast";
import Collapse from '../../components/collapse'

import {  color } from '../../theme'


export default function App(props) {
  const { route } = props;
  const {setAuth} = route.params

  const [press, setPress] = useState({})
  const deconnect = ()=>{
    SecureStore.deleteItemAsync('token')
    .then(()=>{
      showToast("Deconnexion succes !")
      setAuth(false)
    })
    .catch(err=>{
      console.log(err)
      showToast("Deconnexion échoué !")
    })
  }
  return (
            <View style={styles.container}>
                <Collapse title="Deconnexion" onPress={deconnect}/>
            </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: color.gray,
    alignItems: 'center',
    justifyContent: 'center',
  }
});