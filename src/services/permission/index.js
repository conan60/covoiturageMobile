import { Platform } from 'react-native'
import Constants from 'expo-constants'
import * as Location from 'expo-location'


export const location = async ()=>{
    if (Platform.OS === 'android' && !Constants.isDevice) {
        throw new Error('Votre machine ne supporte pas la localisation') 
    }
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        throw new Error('Vous n\'avez pas la permission')
    }
    return true
}