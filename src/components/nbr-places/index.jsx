
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import TextFont from '../text';
import { color } from '../../theme'



const Index = (props) => {
    const { places = 0 , size = 16 } = props
    return (
        <View style={ styles.container }>
            <TextFont style={{...styles.text,fontSize: size}}>{places}</TextFont>
            <Icon name="person" size={size} color={color.black}/>
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
