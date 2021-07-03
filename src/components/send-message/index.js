
import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { color, size } from '../../theme'


const Index = (props) => {
    const { placeholder, onChange, bgColor, placeholderColor, value, onFocus, onBlur, onSubmit } = props
    return (
        <View style={{ ...styles.input, backgroundColor: bgColor }}>
            
            <TextInput
                // value={value}
                multiline
                onFocus={onFocus}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder="Aa"
                style={styles.text}
                placeholderTextColor={placeholderColor}
            />
            <View style={styles.icon}><Icon onPress={onSubmit} name="send" color={color.yellow} size={20}/></View>
        </View>
    );
}


const styles = StyleSheet.create({
    input: {
        width: "100%",
        flexDirection: "row",
        minHeight: size.messageInput,
        maxHeight : size.messageInput*3,
        borderRadius: size.messageInput / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        flex: 1,
        color: color.black,
        fontSize: 16,
        textAlign: "left",
        right: size.messageInput / 2,
        fontFamily: "Catamaran",
        paddingLeft : size.messageInput
    },
    icon: {
        height: size.messageInput,
        borderRadius: size.messageInput / 2,
        width: size.messageInput,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Index
