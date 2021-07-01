import React,{useState} from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import TextFont from '../text'
import Input from '../input-icon'
import { color, size } from '../../theme'


const renderItem = (item,index) => {
    return <View style={styles.list} key={`${item}-${index}`}><View style={styles.item}><TextFont style={styles.text}>{item}</TextFont></View></View>
}

const EmptyList = () => <View style={styles.emptyList}><TextFont weight="bold" style={{fontSize : 16}} >Aucun résultat.</TextFont></View>


const Index = (props) => {
    const { placeholder, icon, onChange, bgColor, placeholderColor, value, list = [1,2,3,4,5,6,7], zIndex } = props
    const inputIconProps = { placeholder, icon, onChange, bgColor, placeholderColor, value }

    const [display,setDisplay] = useState('none')

    return (
        <View style={styles.container}>
            <Input {...inputIconProps} onFocus={()=>setDisplay('flex')} onBlur={()=>setDisplay('none')} />
            <ScrollView
                style={{ ...styles.suggestions,zIndex  }}
                contentContainerStyle={{display,padding : 10}}
                keyboardShouldPersistTaps="handled"
                keyboardDismissMode
            >
                {
                    list.length ?
                        list.map(renderItem) :
                        <EmptyList />
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center'
    },
    suggestions: {
        maxHeight: size.textInput * 6,
        width: '100%',
        flexDirection: 'column',
        position: 'absolute',
        top: size.textInput,
        borderRadius: size.defaultRadius,
        backgroundColor : color.white,

    },
    emptyList: {
        height :size.textInput*2,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    list:{
        padding : 10,
        height :size.textInput*2,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    item : {
        height : "100%",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : color.black,
        borderRadius: size.defaultRadius
    },
    text : {
        color :color.white,
        fontSize : 16
    }
});

export default Index
