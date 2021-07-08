
import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { color, size } from '../../theme'


const Index = (props) => {
    const { placeholder, onChange, bgColor, placeholderColor, value, onFocus, onBlur } = props
    return (
        <View style={{ ...styles.input, backgroundColor: bgColor }}>
            
            <TextInput
                value={value}
                multiline
                onFocus={onFocus}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder={placeholder}
                style={styles.text}
                placeholderTextColor={placeholderColor}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    input: {
        width: "100%",
        flexDirection: "row",
        minHeight: size.textarea,
        maxHeight : size.textarea*5,
        borderRadius: size.textarea / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        flex: 1,
        color: color.black,
        fontSize: 16,
        textAlign: "left",
        right: size.textarea / 2,
        fontFamily: "Catamaran",
        paddingLeft : size.textarea
    }
});

export default Index
