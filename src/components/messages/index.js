import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import TextFont from '../text'
import Avatar from '../avatar'
import { color, size } from '../../theme'



const Index = (props) => {
    const {
        name = "Malek Gorchene",
        image,
        lastMessage = "Hello !!",
        time = "10:00",
        onClick = () => null,
    } = props

    const splitName = name.split(' ')
    const title = `${splitName[0]?.[0]?.toUpperCase()}${splitName[1]?.[0]?.toUpperCase()}`

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.avatar}>
                    <Avatar title={title} image={image} />
                </View>
                <View style={styles.user}>

                    <TextFont weight="bold" style={styles.name}>{name}</TextFont>
                    <TextFont>{lastMessage}</TextFont>

                </View>
                <View style={styles.cov}>
                    <TextFont>{time}</TextFont>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: 10,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: size.defaultRadius,
        backgroundColor: color.white,
        padding: 10
    },
    avatar: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    user: {
        flex: 3,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    cov: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    name: {
        fontSize: 20
    }
});

export default Index
