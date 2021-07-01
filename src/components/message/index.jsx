
import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextFont from '../text';
import Avatar from '../avatar'
import { color, size } from '../../theme'



const Index = (props) => {
    const { 
        text = "Hello", 
        time, 
        type = "sent", 
        name= "Malek Gorchene",
        image= null, 
        onClickIcon  = ()=>null
    } = props

    const splitName = name.split(' ')
    const title = `${splitName[0]?.[0]?.toUpperCase()}${splitName[1]?.[0]?.toUpperCase()}`

    return (
        <View style={ {...styles.container, justifyContent: type === 'received' ? 'flex-start' : 'flex-end'}}>
            {type === 'received' && <Avatar image={image} size="small" title={title} onPress={onClickIcon}/>}
            <View style={{...styles.text, backgroundColor : type === 'received' ? color.white : color.black}}>
                <TextFont style={{color : type === 'received' ? color.black : color.white}}>{text}</TextFont>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width : "100%",
        flexDirection: "row",
        alignItems: 'center',
    },
    text: {
        maxWidth: "70%",
        flexDirection: "row",
        minHeight: size.textInput,
        borderRadius: size.defaultRadius,
        color: color.black,
        justifyContent : 'flex-start',
        alignItems : 'center',
        paddingHorizontal : size.textInput/2
    }
});

export default Index
