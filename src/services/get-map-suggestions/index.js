import axios from '../api'


const getGeocoder = async(name) => {
    //Another alternative is  : https://api.locationiq.com/v1/autocomplete.php?q=Tunisia&autocomplete=1&viewbox=-73.98056030273439%2C40.725925340669626%2C-73.98056030273439%2C40.725925340669626&key=pk.87f2d9fcb4fdd8da1d647b46a997c727&format=json&dedupe=1
    axios.defaults.baseURL = `https://nominatim.openstreetmap.org/search/?q=${encodeURI(name)}&format=json&addressdetails=1&limit=5&countrycodes=TN&accept-language=fr-FR`
    const response = await axios.get()
    return response

}

export default getGeocoder