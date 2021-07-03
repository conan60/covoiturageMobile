import React, { createContext, useState } from 'react'
import { StyleSheet, View, Image, TouchableWithoutFeedback, SafeAreaView, StatusBar as Bar, Platform, Switch } from 'react-native'
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
import Avatar from './src/components/avatar'
import Person from './src/components/nbr-places'
import Pref from './src/components/preference'
import Date from './src/components/date'
import Status from './src/components/cov-status'
import Covoiturage from './src/components/covoiturage'
import RecentCov from './src/components/recent-cov'
import Modal from './src/components/modal'
import Collapse from './src/components/collapse'
import Messages from './src/components/messages'
import Comment from './src/components/comment'
import SendMessage from './src/components/send-message'
import CovSent from './src/components/covoiturage-sent'
import CovReceived from './src/components/covoiturage-received'
import CovCreated from './src/components/covoiturage-create'
import Message from  './src/components/message'
import Feature from './src/components/feature-addition'

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
              {/* <Feature/> */}
              {/* <Message/>
              <Message type='received' text="Hello every body wanna live together why we wanna live together tell me why tell me why ooooooooooooooooooh !!"/>
              <Message/>
              <Message type='received'/>
              <Message type='received'/>
              <Message/>
              <Message type='received'/> */}
              {/* <CovCreated/> */}
              {/* <CovReceived/> */}
              {/* <SendMessage bgColor={color.white}/> */}
              {/* <Comment/> */}
              {/* <Messages/> */}
              {/* <Collapse/> */}
              {/* <Modal/> */}
              <Auth />
              {/* <Covoiturage distance={11}/> */}
              {/* <RecentCov/> */}
              {/* <Status size={50} status="refuse" onClick={()=>console.log("malek")} /> */}
              {/* <Date/> */}
              {/* <Switch  onValueChange={()=>null} value={false} trackColor={{ false: color.black, true: color.yellow }} thumbColor={color.yellow}/> */}
              {/* <Avatar
                size="medium"
                title="/"
                image={null}
                onPress={null}
              /> */}
              {/* <Person places={4} size={32}/> */}
              {/* <Pref interdit places={4} size={24} color={color.black} name="pets"
              luggage
              smoking
              comments
              musical-notes
              group
              /> */}
              {/* <FromTo from="Sousse" to='Tunis' size={30}/> */}
              {/* <Rating isDisabled={false} value={2} size={32} onChange={()=>null}/> */}

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
    paddingTop: Platform.OS === 'android' ? Bar.currentHeight : 0,
  }
});
