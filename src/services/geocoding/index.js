import * as Location from 'expo-location'
import { location } from '../permission';

export const getGeocodeFromPosition = async (position) => {

    if (await location()) {
        const geocode = await Location.reverseGeocodeAsync(position);
        return geocode
    }
    
}

export const getGeocodeFromName = async (name) => {

    if (await location()) {
        const position = await Location.geocodeAsync(name);
        return position
    }
     
}
