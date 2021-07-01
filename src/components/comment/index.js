import React from 'react'
import { View, StyleSheet } from 'react-native'
import TextFont from '../text'
import Avatar from '../avatar'
import Rating from '../rating'

import { color, size } from '../../theme'



const Index = (props) => {
    const { 
        name = "Malek Gorchene",
     image, 
     comment = "This is a good speaker but not a good driver This is a good speaker but not a good driver", 
     rate =3.5, 
     hour: time = "02/10/21",
     onClickUser =()=>null
    } = props

    const splitName = name.split(' ')
    const title = `${splitName[0]?.[0]?.toUpperCase()}${splitName[1]?.[0]?.toUpperCase()}`

    return (
        
        <View style={styles.container}>
            <View style={styles.avatar}>
                <Avatar onPress={onClickUser} title={title} image={image}/>
            </View>
            <View style={styles.user}>
                <View>
                    <TextFont weight="bold" style={styles.name}>{name}</TextFont>
                   
                        
                        <TextFont>{comment}</TextFont>
                    
                </View>
            </View>
            <View style={styles.cov}>
            <Rating isDisabled value={rate} size={12} unselectedColor={color.gray}/>
                <TextFont>{time}</TextFont>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop : 10,
        flexDirection: "row",
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
        alignContent : 'stretch'
    },
    name: {
        fontSize : 20
    }
});

export default Index
