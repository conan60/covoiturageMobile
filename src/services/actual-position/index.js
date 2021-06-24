import {location} from '../permission'
import * as Location from 'expo-location'

const getActualLocation = async () => {
    
        if (await location()) {
            let actualLocation = await Location.getCurrentPositionAsync({});
        return actualLocation
        }



    
    
}

export default getActualLocation