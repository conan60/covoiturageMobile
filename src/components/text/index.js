import React from 'react'
import { Text } from 'react-native'

const TextFont = (props) => {
    const { children, weight, style } = props
    let font = 'Catamaran';
    switch (weight) {
        case 'thin': font = 'CatamaranThin'; break;
        case 'bold': font = 'CatamaranBold'; break;
        case 'bolder': font = 'CatamaranBolder';
    }

    return (
        <Text  {...props} style={{ ...style, fontFamily: font }}>
            {children}
        </Text>
    )
}
export default TextFont