import * as SecureStore from 'expo-secure-store';

const getAuth = async()=>{
    try{
        const token = await SecureStore.getItemAsync('token');
        console.log(token)
        return {Authorisation : token}
    }catch(error){
        return {}
    }
}

export default getAuth