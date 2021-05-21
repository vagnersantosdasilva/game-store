import {API_ENDPOINT} from "../constants";
import axios from "axios";
const {useState} = require("react");

const useGames =()=>{
    const [listGame , setListGame] = useState(null);
    const [error,setError] = useState(null);
    const [processing,setProcessing] = useState(false);


    const loadListGames = async ()=>{
        try{
            setProcessing(false);
            setError(false);
            const response = await axios.get(`${API_ENDPOINT}/games`,null);
            const content = response.data;
            if (content==="") setListGame([]);
            setListGame(content);
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

    return {listGame,error,processing,loadListGames,clear}
}

export default useGames;