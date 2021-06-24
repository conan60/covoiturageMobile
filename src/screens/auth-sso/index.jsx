import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import TextFont from "../../components/text";
import Link from "../../components/link";
import Button from "../../components/signup-button";
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
        <TextFont weight="bold" style={{ fontSize: 24 }}>Continuer avec :</TextFont>
      </View>

      <View style={styles.button}>
        <Button
          text="Email"
          icon={() => <Icon name="mail" size={26} color={color.black} />}
          onClick={() => navigation.push("AuthMail")}
        />
        <Button
          text="Google"
          icon={() => <Icon name="logo-google" size={26} color={color.black} />}
          onClick={() => setAuth(true)}
        />
        <Button
          text="Facebook"
          icon={() => (
            <Icon name="logo-facebook" size={26} color={color.black} />
          )}
          onClick={() => setAuth(true)}
        />
        
      </View>

      <View style={styles.signup}>
      <Link
          onPress={() => {}}
          style={{ fontSize: 12 }}
        >{`Termes & Politique de confidentialité`}</Link>
        <Link
          weight='bold'
          onPress={() =>navigation.push('SignUp')}
          style={{ fontSize: 12,paddingBottom : 10 }}
        >{`Crée un compte`}</Link>
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
    flex : 2,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  button :{
    width : '90%',
    flex : 2,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  signup :{
    flex : 1,
    flexDirection: "column",
    backgroundColor: color.gray,
    alignItems: "center",
    justifyContent: "space-around",
  }
});

export default Index