
import React, { useContext, useRef, useEffect } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { color, size } from '../../theme'
import { PressOutsideContext } from '../../../App'


const Index = (props) => {
    const { placeholder, icon, onChange, bgColor, placeholderColor, value, isPass, onFocus, onBlur } = props
    const refInput = useRef(null)
    const pressOutside = useContext(PressOutsideContext)
    useEffect(() => {
        refInput.current && refInput.current.blur()
    }, [pressOutside])
    return (
        <View style={{ ...styles.input, backgroundColor: bgColor }}>
            <View style={styles.icon}>{icon()}</View>
            <TextInput
                // value={value}
                onFocus={onFocus}
                onBlur={onBlur}
                ref={refInput}
                onChangeText={onChange}
                placeholder={placeholder}
                style={styles.text}
                placeholderTextColor={placeholderColor}
                secureTextEntry={isPass}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    input: {
        width: "100%",
        flexDirection: "row",
        height: size.textInput,
        borderRadius: size.textInput / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        flex: 1,
        color: color.black,
        fontSize: 16,
        textAlign: "center",
        right: size.textInput / 2,
        fontFamily: "Catamaran"
    },
    icon: {
        height: size.textInput,
        borderRadius: size.textInput / 2,
        width: size.textInput,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Index
