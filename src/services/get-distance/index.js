import { getDistance } from 'geolib'

const calculDistance = (from , to)=>{
    const distance = getDistance({ longitude , latitude} = from,{ longitude , latitude} = to) 
    return parseInt(distance/1000)
}

export default calculDistance