import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import TextFont from "../../components/text";
import Link from "../../components/link";
import Button from "../../components/button";
import RoundedButton from '../../components/rounded-button'
import TextInput from '../../components/input-icon'
import { color } from "../../theme";

const Index= (props)=> {
  const { navigation,route } = props;
  const {setAuth} = route.params

  const [press, setPress] = useState({});


  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          style={{ resizeMode: "contain", width: 162 }}
          source={require("../../../assets/logo/YallaCo.png")}
        />
      </View>

      <View style={styles.input}>
            <TextInput
              placeholder="Email"
              onChange={e => console.log(e)}
              icon={() => <Icon name="mail" size={16} color={color.black} />}
              bgColor={color.white}
              placeholderColor={color.black}
            />
            <TextInput
              placeholder="Password"
              onChange={e => console.log(e)}
              icon={() => <Icon name="key" size={16} color={color.black} />}
              bgColor={color.white}
              placeholderColor={color.black}
            />
            <TextInput
              placeholder="Comfirm password"
              onChange={e => console.log(e)}
              icon={() => <Icon name="key" size={16} color={color.black} />}
              bgColor={color.white}
              placeholderColor={color.black}
            />
        <Button
          text="Création du compte"
          onClick={() => setAuth(true)}
        />
        
        <Link
          onPress={() => {}}
          style={{ fontSize: 12 }}
        >{`Termes & Politique de confidentialité`}</Link>
      </View>

      <View style={styles.signup}>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: color.gray,
    alignItems: "center",
    justifyContent: "space-between",
  },
  image :{
    flex : 3,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input :{
    width : '90%',
    flex : 4,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  signup :{
    flex : 2,
    flexDirection: "column",
    backgroundColor: color.gray,
    alignItems: "center",
    justifyContent: "space-between",
  }
});

export default Index