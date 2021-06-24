
import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { color, size } from '../../theme'
import RoundedButton from '../rounded-button'


const Index = (props) => {
    const { covHandler , msgHandler,addHandler,newCov,newMsg } = props

    const [menuClicked,setMenuClicked] = useState(0)

    const menuCov = menuClicked === 1
    const menuMsg = menuClicked === 2

    const clickCov = ()=>{
        setMenuClicked(1)
        covHandler && covHandler()
    }

    const clickMsg = ()=>{
        setMenuClicked(2)
        msgHandler && msgHandler()
    }

    return (
        <View style={styles.menuButton}>
            <View style={styles.button}><RoundedButton onClick={addHandler} icon={() => <Icon size={32} color={color.black} name="add-outline" />} /></View>
            <View style={styles.menu}>
                <TouchableOpacity onPress={clickCov} style={styles.icon}>
                    <View>
                        <Icon size={32} color={menuCov ? color.yellow :color.white} name="car" />
                        {newCov &&<View style={styles.notification}/>}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={clickMsg} style={styles.icon}>
                    <View>
                        <Icon size={32} color={menuMsg ? color.yellow :color.white} name="chatbubbles" />
                        {newMsg &&<View style={styles.notification}/>}
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    menuButton: {
        height : 63,
        width : "100%",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    button: {
        position: "absolute",
        bottom: 32,
        zIndex : 1
    },
    menu: {
        flex: 1,
        flexDirection: "row",
        height: size.bottomMenu,
        borderTopLeftRadius: size.defaultRadius,
        borderTopRightRadius: size.defaultRadius,
        backgroundColor: color.black,
        alignItems: "center",
        justifyContent: 'space-around',
    },
    icon: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    notification : {
        height : 8,
        width : 8,
        backgroundColor : "red",
        borderRadius : 4,
        position : "absolute"
    }
});

export default Index
