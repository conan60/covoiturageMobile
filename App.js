import React, { createContext, useState } from 'react'
import { StyleSheet, View, Image, TouchableWithoutFeedback, SafeAreaView, StatusBar as Bar, Platform, Switch } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontLoader, color } from './src/theme'
import { RootSiblingParent } from 'react-native-root-siblings';

import Auth from './src/screens'


const Stack = createStackNavigator();

export const PressOutsideContext = createContext({})

export default function App() {
  const [press, setPress] = useState({})
  return (
    <FontLoader>
      <RootSiblingParent>
      <NavigationContainer>
        <PressOutsideContext.Provider value={press}>
          <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
              <Auth />
              <StatusBar style="auto" />
            </View>
          </SafeAreaView>
        </PressOutsideContext.Provider>
      </NavigationContainer>
      </RootSiblingParent>
    </FontLoader>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: color.gray,
    paddingTop: Platform.OS === 'android' ? Bar.currentHeight : 0,
  }
});
