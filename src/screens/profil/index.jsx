import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import TextFont from "../../components/text";
import Avatar from "../../components/avatar";
import Rating from "../../components/rating";
import ButtonRounded from "../../components/rounded-button";
import Modal from "../../components/modal";
import Textarea from "../../components/textarea";
import Comment from "../../components/comment"
import showToast from "../../services/show-toast";
import axios from "../../services/api";
import { getDate } from "../../services/date-time";
import { color } from "../../theme";

export default function App({ navigation, route }) {
  const { userId = "id", name = "Malek Gorchene", votes = [] } = route.params;


  const splitName = name.split(" ");
  const title = `${splitName[0]?.[0]?.toUpperCase()}${splitName[1]?.[0]?.toUpperCase()}`;

  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(false);
  const [comment, setComment] = useState("");

  const rateUser = () => {
    showToast("Chargement...");
    axios()
      .then((instance) =>
        instance
          .put(`/users/eval/${userId}`, { rate : rating, comment,dateEval : new Date(Date.now()) })
          .then(({ data }) => {
            if (data.error) {
              console.log(data);
              showToast("Un erreur s'est produit ❌");
            } else {
              console.log(data);
              showToast("Evaluation envoyer avec succes ✔️");
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
  };

  return (
    <View style={styles.container}>
      <Modal
        onSubmit={rateUser}
        content={
          <View>
            <Rating
              value={rating}
              size={24}
              onChange={(newRate) => setRating(newRate)}
            />
            <View style={{ height: 10 }} />
            <Textarea
              placeholder="Commentaire"
              onChange={(e) => setComment(e)}
              bgColor={color.white}
              value={comment}
            />
          </View>
        }
        modalName="Evaluation"
        visibility={showModal}
        setVisibility={setShowModal}
      />
      <View style={{flex : 1,justifyContent : "center", alignItems : "center"}}>
        <Avatar size="xlarge" title={title} />
        <TextFont weight="bold" style={{ fontSize: 30 }}>
          {name}
        </TextFont>
        <View style={{ flexDirection: "row" }}>
          <Rating isDisabled value={votes.map(el=>el.rate).reduce((a, b) => a + b,0) / votes.length} size={16} />
          <TextFont style={{ fontSize: 16 }}>{votes.length} votes</TextFont>
        </View>
        <View style={{ flexDirection: "row" }}>
          <ButtonRounded
            icon={() => (
              <Icon name="chatbubble-ellipses" size={24} color={color.black} />
            )}
            onClick={() => navigation.navigate('MessageSingleUser',{userId,name})}
            size={48}
          />
          <View style={{ width: 10 }} />
          <ButtonRounded
            icon={() => <Icon name="star" size={24} color={color.black} />}
            onClick={() => setShowModal(true)}
            size={48}
          />
          <View style={{ width: 10 }} />
          <ButtonRounded
            icon={() => (
              <Icon name="close-circle" size={24} color={color.black} />
            )}
            onClick={() => null}
            size={48}
          />
        </View>
      </View>
      <View style={{flex : 1, padding : 10, width : "100%"}}>
      <ScrollView contentContainerStyle={{width : "100%"}}>
              {
                votes.map(el=>(
                <Comment
                key={el.dateEval}
                comment = {el.comment}
                rate ={el.rate}
                date={getDate(new Date(el.dateEval))}
                />
                ))
              }
      </ScrollView>
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
    justifyContent: "space-around",
  },
  w100: {
    width: "100%",
    padding: 10,
    flex: -1,
  },
});
