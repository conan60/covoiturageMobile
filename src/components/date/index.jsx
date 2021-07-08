import React, { useState } from "react";
import { View, Platform,TouchableOpacity } from "react-native"
import DateTimePicker from "@react-native-community/datetimepicker"
import Icon from "react-native-vector-icons/Ionicons"
import Text from '../../components/text'
import {color,size as defaultSize} from '../../theme'
import { getDate, getTime} from "../../services/date-time"


const ButtonIcon = (props)=> {
  const {text,icon,onClick, size = 32 } = props

  // Style inside the component
  const styles = ({
    button: {
      width : "100%",
      flexDirection : "row",
      height : size,
      borderRadius : size/2,
      backgroundColor: color.yellow,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text : {
      flex : 1,
      color : color.black,
      fontSize : 20,
      textAlign : "center",
      right : 10,
    },
    icon:{
      margin : 2,
      height : size-4,
      borderRadius : size-2,
      backgroundColor : color.white,
      width : size-4,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });


  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onClick} style={styles.button}>
      <View style={styles.icon}>{icon()}</View>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}


export default App = (props) => {
  const { mode = "date" , onChange = ()=>null,minDate,maxDate } = props;
  const [date, setDate] = useState(new Date(Date.now()));
  const [show, setShow] = useState(false);

  const onChangeHandler = (event, selectedDate) => {
    const currentDate = new Date(selectedDate|| date) ;
    onChange(currentDate)
    setShow(false);
    setDate(currentDate);
  };

  return (
    <View>
      {mode === "date" && (
        <ButtonIcon
          text={getDate(date)}
          icon={() => <Icon name="calendar" size={18} color={color.black} />}
          onClick={() => setShow(true)}
        />
      )}

      {mode === "time" && (
        <ButtonIcon
          text={getTime(date)}
          icon={() => <Icon name="time" size={18} color={color.black} />}
          onClick={() => setShow(true)}
        />
      )}

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          display="spinner"
          onChange={onChangeHandler}
          minimumDate={minDate ? Date.now() :null}
          maximumDate={maxDate ? Date.now() :null}
        />
      )}
    </View>
  );
};
