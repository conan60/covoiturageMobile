import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView,View } from "react-native";
import Message from "../../components/message";
import InputMessage from "../../components/send-message";
import { color } from "../../theme";
import showToast from "../../services/show-toast";
import axios from "../../services/api";
import socket from "../../services/web-socket";
import { getDate } from "../../services/date-time";



const Index = (props) =>{
  const {route} = props
  const {userId, name} = route.params
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  // let socket = createSocket()

  // socket.addEventListener("message",(data)=>console.log(data))
  
  useEffect(() => {
      socket.connect()
      socket.on('ping',(msg)=>console.log('connected'))
      showToast("Chargement...");
      axios()
        .then((instance) =>
          instance
            .get(`/messages`)
            .then(({ data }) => {
              if (data.error) {
                console.log(data);
                showToast("Un erreur s'est produit ❌");
              } else {
                console.log(data);
                setMessages(data[0].messages)
                showToast("Succes ✔️");
              }
            })
            .catch((error) => {
              console.log(error);
              showToast("Un erreur s'est produit ❌");
            })
        )
        .catch((error) => {
          console.log(error);
          showToast("Un erreur s'est produit ❌");
        });
    }, [])


    const sendMessage = () => {
      socket.emit('message','message');
      showToast("Chargement...");
      
      axios()
        .then((instance) =>
          instance
            .post(`/messages`,{toUserId : userId,content : message})
            .then(({ data }) => {
              if (data.error) {
                console.log(data);
                showToast("Un erreur s'est produit ❌");
              } else {
                console.log(data);
                setMessages([...messages,{content : message, type : 'sent',date : data.date}])
                setMessage('');
                showToast("Message envoyer avec succes ✔️");
              }
            })
            .catch((error) => {
              console.log(error);
              showToast("Un erreur s'est produit ❌");
            })
        )
        .catch((error) => {
          console.log(error);
          showToast("Un erreur s'est produit ❌");
        });
    }


  return (
    <View style={styles.container}>
    <ScrollView>
      
      <View style={{height : 10}}/>
      {messages.map((el,index)=><Message
        name={name}
        key={el.date}
        {...el}
      />)}
      <View style={{height : 20}}/>
    </ScrollView>
    <View style={{height : 10}}/>
    <InputMessage
      value={message}
      onChange={e => setMessage(e)}
      bgColor={color.white}
      placeholderColor={color.black}
      onSubmit={sendMessage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: color.gray,
    padding: 10,
  },
});


export default Index
