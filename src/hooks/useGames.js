import {API_ENDPOINT} from "../constants";
import axios from "axios";
import {useContext} from "react";
import {AuthContext} from "./useAuth";
const {useState} = require("react");

const useGames =()=>{
    const auth = useContext(AuthContext);
    const [listGame , setListGame] = useState(null);
    const [error,setError] = useState(null);
    const [processing,setProcessing] = useState(false);
    const [game,setGame] = useState(null);

    let headers = {'headers':{'sorted_by' :'name'}}
    const loadListGames = async ()=>{
        try{
            setProcessing(false);
            setError(false);
            const response = await axios.get(`${API_ENDPOINT}/games`,headers);
            const content = response.data;
            if (content==="") setListGame([])
            else setListGame(content);
            setProcessing(false);
            setError(null);
        }catch(error){
            handlerError(error);
        }
    }

    const loadGameById = async (id)=>{
        try{
            setProcessing(false);
            setError(false);
            const response = await axios.get(`${API_ENDPOINT}/games/${id}`,null);
            const content =response.data;
            if (content==="") setGame(null);
            else setGame(content);
            console.log(content);
            setProcessing(false);
            setError(null);
        }catch(error){
            handlerError(error);
        }
    }
    const handlerError = (error)=>{
        setError(error);
    }

    const clear = ()=>{
        if (listGame!==null) setListGame(null);
    }

    return {listGame,error,processing,game,loadListGames,clear,loadGameById}
}

export default useGames;