import React, { createContext, useState } from 'react'
import { StyleSheet, View, Image, TouchableWithoutFeedback, SafeAreaView, StatusBar as Bar, Platform } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import { FontLoader, color } from './src/theme'
import Button from './src/components/signup-button'
import RoundedB from './src/components/rounded-button'
import ButtonN from './src/components/button'
// import TextInput from './src/components/input-icon'
import Slider from './src/components/slider'
import BottomMenu from './src/components/bottom-menu'
import Map from './src/components/maps'
import Autocomplete from './src/components/input-autocomplete'
import Auth from './src/screens'
import ButtonSlide from './src/components/button-slide'
import Rating from './src/components/rating'
import FromTo from './src/components/from-to'

const Stack = createStackNavigator();

export const PressOutsideContext = createContext({})

export default function App() {
  const [press, setPress] = useState({})
  return (
    <FontLoader>
      <NavigationContainer>

        <PressOutsideContext.Provider value={press}>
          {/* <TouchableWithoutFeedback 
        onPress={() => { console.log("PressedOut"); return setPress(new Object()) }}
        > */}
          <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
              {/* <FromTo from="Sousse" to='Tunis' size={30}/> */}
              {/* <Rating isDisabled={false} value={2} size={32} onChange={()=>null}/> */}
              {/* <Auth /> */}
              {/* <ButtonSlide value={12}/> */}
              {/* <Autocomplete
            onChange={e => console.log(e)}
            placeholder="Depart" 
            icon={() => <Icon name="mail" size={16} color={color.black} />}
            bgColor={color.white}
            placeholderColor={color.black}
            zIndex={1}
            /> */}
              {/* <Autocomplete
            onChange={e => console.log(e)}
            placeholder="Depart" 
            icon={() => <Icon name="mail" size={16} color={color.black} />}
            bgColor={color.white}
            placeholderColor={color.black}
            /> */}
              {/* <Map/> */}
              {/* <Slider/> */}
              {/* <Image style={{ resizeMode: "contain", width: 162 }} source={require('./assets/logo/YallaCo.png')} /> */}
              {/* <View style={{ margin: 10 }} /> */}
              {/* <Button text="Facebook" icon={() => <Icon name="logo-facebook" size={26} color={color.black} />} onClick={() => console.log("Malik")} /> */}
              {/* <View style={{ margin: 10 }} /> */}
              {/* <RoundedB 
            icon={() => <Icon name="logo-linkedin" size={32} color={color.black} />} 
            onClick={() => console.log("Malik")} 
            /> */}
              {/* <Button text="Linkedin" icon={()=><Icon name="sc-linkedin" size={32} color={color.black}/>} onClick={()=>console.log("Malik")}/> */}
              {/* <View style={{ margin: 10 }} />
            <TextInput
              placeholder="Email"
              onChange={e => console.log(e)}
              icon={() => <Icon name="mail" size={16} color={color.black} />}
              bgColor={color.white}
              placeholderColor={color.black}
            /> */}
              {/* <Button text="Google" icon={()=><Icon name="sc-google-plus" size={32} color={color.black}/>} onClick={()=>console.log("Malik")}/> */}
              {/* <View style={{ margin: 10 }} />
            <ButtonN text="Facebook" onClick={() => console.log("Malik")} /> */}
              {/* <BottomMenu/> */}
              <StatusBar style="auto" />
            </View>
          </SafeAreaView>
          {/* </TouchableWithoutFeedback> */}
        </PressOutsideContext.Provider>

      </NavigationContainer>
    </FontLoader>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: color.gray,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? Bar.currentHeight : 0,
  }
});
