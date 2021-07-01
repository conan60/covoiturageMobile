
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'
import TextFont from '../text';
import { color } from '../../theme'



const Index = (props) => {
    const { from, to, size = 16 } = props
    return (
        <View style={ styles.container }>
            <TextFont style={{...styles.text,fontSize: size,paddingRight : 10}}>{from}</TextFont>
            <Icon name="arrow-long-right" size={size} color={color.black}/>
            <TextFont style={{...styles.text,fontSize: size,paddingLeft : 10}}>{to}</TextFont>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: color.black,
        textAlign: "center"
    }
});

export default Index
