import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import {  color } from '../../theme'


export default function App() {
  const [press, setPress] = useState({})
  return (
            <View style={styles.container}>
                <Text>Covoiturages recu</Text>
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