import { createContext,useEffect,useState } from "react";
import { CREDENTIALS_NAME} from '../constants.js';

export const AuthContext = createContext();
export const useAuth =() =>{
    const [credentials,setCredentials] = useState({id:1,username:"vagner",displayName:"Vagner da Silva",token:null});
    useEffect(()=>{
        loadCredentials();
    },[]);

    const loadCredentials =() =>{
        const storeCredentials = sessionStorage.getItem(CREDENTIALS_NAME);
        if (storeCredentials===null){
            sessionStorage.setItem(CREDENTIALS_NAME,JSON.stringify(credentials))
            setCredentials(credentials);
        }
    }

    return {credentials};
}