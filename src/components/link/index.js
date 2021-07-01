import React from 'react'
import {  TouchableOpacity } from 'react-native'
import Text from '../text'

const TextFont = (props) => {
    const { children, weight, style, onPress } = props
    const textProps={ children, weight, style }
    

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <Text  {...textProps}>{children}</Text>
        </TouchableOpacity>
    )
}
export default TextFont