import React, { useState } from "react";
import {
  StyleSheet,View
} from "react-native";
import Collapse from 'react-native-collapsible/Collapsible';
import Link from "../link";
import { color } from "../../theme";




const Index = (props)=> {
    const {title = "Params", content =null,onPress = ()=>null} = props
    const [state,setState] = useState(true)

    const pressTitle = ()=>{
        setState(!state)
        onPress()
    }

    return (
    <View style={styles.container}>
        <Link weight="bold" onPress={pressTitle} style={styles.collapseHeader}>{title}</Link>
        <View style={styles.divider}/>
      <Collapse
        collapsed={state}
      >
          {content}
      </Collapse>
      </View>
    );
}


const styles = StyleSheet.create({
    container : {
        paddingHorizontal : 10

    },
    divider : {
        borderTopWidth : 1,
        borderColor : color.black
    },
    collapseHeader : {
        fontSize : 20
    }
});

export default Index
