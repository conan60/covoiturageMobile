import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import TextFont from '../text'
import Avatar from '../avatar'
import FromTo from '../from-to'
import Rating from '../rating'
import Pref from '../preference'
import NbrPlaces from '../nbr-places'
import { color, size } from '../../theme'



const Index = (props) => {
    const { name = "Malek Gorchene",
     image, 
     nbrVote = 23, 
     rate =3.5, 
     price = 15, 
     nbrPlaces = 4, 
     from ="Msaken", 
     to ="Tunis", 
     prefs = {pets : false,smoking : true,'musical-notes' : true}, 
     hour = "10:00", 
     date = "02/10", 
     distance = 1, 
     onClick =()=>null, 
     onClickUser =()=>null
    } = props

    const splitName = name.split(' ')
    const title = `${splitName[0]?.[0]?.toUpperCase()}${splitName[1]?.[0]?.toUpperCase()}`
    const bgColor = distance<2?"#B3F2C3":distance<11?"#FFE5BE":"#EEABAB"

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onClick}>
        <View style={{...styles.container,backgroundColor : bgColor}}>
            <View style={styles.avatar}>
                <Avatar onPress={onClickUser} title={title} image={image}/>
            </View>
            <View style={styles.user}>
                <View>
                    <TextFont weight="bold" style={styles.name}>{name}</TextFont>
                    <View style={{flexDirection : 'row'}} >
                        <Rating isDisabled value={rate} size={12}/>
                        <TextFont>{`${nbrVote} votes`}</TextFont>
                    </View>
                </View>
                <FromTo from={from} to={to}/>
                <View style={{flexDirection:'row'}}>{Object.entries(prefs).map(([pref,value]) => <Pref name={pref} interdit={value} color={color.black} />)}</View>
            </View>
            <View style={styles.cov}>
                <TextFont>{`${price} DT`}</TextFont>
                <View><NbrPlaces places={nbrPlaces}/></View>
                <TextFont>{hour}</TextFont>
                <TextFont>{date}</TextFont>
            </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop : 10,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: size.defaultRadius,
        backgroundColor : color.white,
        padding : 10
    },
    avatar: {
        flex :1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    user: {
        flex : 3,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    cov: {
        flex : 1,
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    name: {
        fontSize : 20
    }
});

export default Index
