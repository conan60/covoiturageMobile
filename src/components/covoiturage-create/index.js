import React from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import TextFont from '../text'
import FromTo from '../from-to'
import Pref from '../preference'
import NbrPlaces from '../nbr-places'
import RoundedButton from '../rounded-button'
import { color, size } from '../../theme'



const Index = (props) => {
    const {
     price = 15, 
     nbrPlaces = 4, 
     from ="Msaken", 
     to ="Tunis", 
     prefs = {pets : false,smoking : true,'musical-notes' : true}, 
     hour = "10:00", 
     date = "02/10", 
     onDelete =()=>null, 
    } = props



    return (
        <View style={styles.container}>
            <View style={styles.user}>
            <View style={{flexDirection:'row', alignItems : 'center'}}>
                <FromTo from={from} to={to} size={20}/>
                <View style={{width : 10 }}/>
                <TextFont weight='bold' style={styles.text}>{`${price} DT`}</TextFont>
                </View>
                <View style={{flexDirection:'row'}}>
                <TextFont style={styles.text}>{date}</TextFont>
                <View style={{width : 10 }}/>
                <TextFont style={styles.text}>{hour}</TextFont>
                <View style={{width : 10 }}/>
                <NbrPlaces places={nbrPlaces} size={20}/>
                </View>
                <View style={{flexDirection:'row'}}>{Object.entries(prefs).map(([pref,value]) => <Pref name={pref} interdit={value} color={color.black} size={20} />)}</View>
            </View>
            <View style={styles.cov}>
                
                <RoundedButton
                size={32}
                icon={() => <Icon name="trash" size={20} color={color.black} />} 
                onClick={onDelete} 
                />
                
            </View>
        </View>
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
    text : {
        fontSize : 20
    }
});

export default Index
