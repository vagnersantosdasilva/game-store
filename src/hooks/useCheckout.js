import {useAuth} from "./useAuth";
import {useState} from "react";
import {API_ENDPOINT} from "../constants";
import axios from "axios";


const useCheckout =()=> {
    const auth = useAuth();
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState(false);


    const save = async (chackout)=>{
        let config = {
            method: 'post',
            url: `${API_ENDPOINT}/chackout`,
            headers: {
                'user_id': auth.credentials.id,
                'Content-Type': 'application/json'
            },
            data : chackout
        };
        try{
            setProcessing(false);
            setError(false);
            setSuccess(false);
            const response = await axios(config);
            const content = response.data;
            setSuccess(true);
            setProcessing(false);
            setError(null);
        }catch(error){
            handlerError(error);
        }
    }

    const handlerError = (error)=>{
        console.log(error.message);
        setProcessing(false);
        setError(error);
    }
    return {success,processing, save}
}
export default useCheckout;