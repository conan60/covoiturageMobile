import React, {useState,useEffect,useRef} from 'react'
import { ScrollView, Dimensions } from 'react-native'

const Index = (props) => {
    const {style,children} = props
    const [changeHeight  , setChangeHeight] = useState(0)
    const [height  , setHeight] = useState(0)
    useEffect(()=>{
        if(!height)
        setHeight(changeHeight)
    },[changeHeight])
    return (
        <ScrollView onLayout={(event)=>setChangeHeight(event.nativeEvent.layout.height)} contentContainerStyle={{...style,height}}>
            {children}
        </ScrollView>
    )
}

export default Index
