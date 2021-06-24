import React from 'react';
import {useFonts} from 'expo-font';


export const FontLoader = (props)=>{
    const {children} = props
    const [loaded] = useFonts({
        CatamaranThin: require('../../assets/font/Catamaran/Catamaran.ttf'),
        Catamaran: require('../../assets/font/Catamaran/Catamaran-Medium.ttf'),
        CatamaranBold: require('../../assets/font/Catamaran/Catamaran-Bold.ttf'),
        CatamaranBolder: require('../../assets/font/Catamaran/Catamaran-ExtraBold.ttf'),
      });
      
      if (!loaded) {
        return null;
      }
    
      return (
        <>
          {children}
        </>
      );
}