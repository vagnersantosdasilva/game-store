import {useState} from "react";
import axios from "axios";
import {API_ENDPOINT} from "../constants";
import {useAuth} from "./useAuth";


const useShoppingCart =()=>{
    const auth  = useAuth();
    const [cart,setCart] = useState(null);
    const [error,setError] = useState(null);
    const [processing,setProcessing] = useState(false);
    const [updateItem,setUpdateItem] = useState(false);

    const id = ~~auth.credentials.id;
    let headers = {'user_id':id}


    const save = async (game)=>{
        let config = {
            method: 'post',
            url: `${API_ENDPOINT}/cart/product/${game.id}`,
            headers: {
                'sorted_by': 'name',
                'ascending': 'true',
                'user_id': auth.credentials.id,
                'Content-Type': 'application/json'
            },
            data : null
        };
        try{
            setProcessing(false);
            setError(false);
            setUpdateItem(false);
            const response = await axios(config);
            const content = response.data;
            setCart(content);
            console.log(content);
            setUpdateItem(true);
            setProcessing(false);
            setError(null);
        }catch(error){
            handlerError(error);
        }
    }

    const remove = async (id)=>{
        let config = {
            method: 'delete',
            url: `${API_ENDPOINT}/cart/product/${id}`,
            headers: {
                'sorted_by': 'name',
                'ascending': 'true',
                'user_id': auth.credentials.id,
                'Content-Type': 'application/json'
            },
            data : null
        };
        try{
            setProcessing(false);
            setError(false);
            setUpdateItem(false);
            const response = await axios(config);
            const content = response.data;
            setCart(cart);
            setUpdateItem(true);
            console.log(content);
            setProcessing(false);
            setError(null);
        }catch(error){
            handlerError(error);
        }
    }

    const createCart = async ()=>{

        let config = {
            method: 'post',
            url: `${API_ENDPOINT}/cart`,
            headers: {
                'sorted_by': 'name',
                'ascending': 'true',
                'user_id': auth.credentials.id,
                'Content-Type': 'application/json'
            },
            data : null
        };


        try{
            setProcessing(false);
            setError(false);
            const response = await axios(config);
            const content = response.data;
            setCart(content);
            console.log(content);
            setProcessing(false);
            setError(null);
        }catch(error){
            handlerError(error);
        }

    }

    const loadCart = async (id)=>{
        let config = {
            method: 'post',
            url: `${API_ENDPOINT}/cart`,
            headers: {
                'sorted_by': 'name',
                'ascending': 'true',
                'user_id': auth.credentials.id,
                'Content-Type': 'application/json'
            },
            data : null
        };

        try{
            setProcessing(false);
            setError(false);
            const response = await axios.get(`${API_ENDPOINT}/cart`,config);
            const content = response.data;
            console.log(content);
            setCart(content);
            setProcessing(false);
            setError(null);
        }catch(error){
            handlerError(error);
        }


    }
    const handlerError = (error)=>{
        console.log(error.message);
        setProcessing(false);
        setUpdateItem(false);
        setError(error);
    }
    console.log(cart)
    return {cart,processing,error,updateItem, loadCart,createCart,save,remove,setUpdateItem}
}
export default useShoppingCart;
