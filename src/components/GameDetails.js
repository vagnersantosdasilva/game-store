import useGames from "../hooks/useGames";
import {useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import React from 'react'
import {API_ENDPOINT, API_ENDPOINT_IMAGE} from "../constants";

const {useEffect} = require("react");

const GameDetails = (props)=>{
    const games = useGames();
    const [game,setGame] = useState(null);

    useEffect(()=>{
        const id = props.match.params.id;
        games.loadGameById(id);
        console.log(id);

    },[]);

    useEffect(()=>{
        if (games.game){
            console.log(games.game);
            setGame(games.game);
        }
    },[games.game]);

    useEffect(()=>{
        if(games.error) toast.error(`Ocorreu um erro :${games.error.message}` , {position:toast.POSITION.BOTTOM_LEFT});
    },[games.error]);

    if (!games.processing && game!==null){
        return(
            <div className="container">
                <div className="jumbotron">
                    <center><h3> Detalhes do produto </h3></center>
                    <br/><br/>
                </div>
                <div className="row">
                    <div className="col">
                        <center><img src ={`${API_ENDPOINT_IMAGE}${game.image}`} /> </center>
                    </div>
                    <div className="col">
                        <h5> {game.name}</h5>
                        <hr/>
                        <ul>

                            <li>Preço :R${game.price}</li>
                            <li>Pontuação :{game.score}</li>
                        </ul>
                        <hr/>

                        <div className="container">
                            <button type="button" className="btn btn-info" onClick={()=>{alert("Comprar")}}>Comprar</button>&nbsp;&nbsp;
                            <button type="button" className="btn btn-success"  onClick={()=>{alert("adicionar")}} >Adicionar ao carrinho</button>&nbsp;&nbsp;
                            <button type="button" className="btn btn-primary" onClick={()=>{alert("voltar")}}>Voltar</button>&nbsp;&nbsp;

                        </div>
                    </div>



                </div>
                <ToastContainer autoClose={5000}/>
            </div>

        );
    }else return (
        <div> ... </div>
    );

}
export default GameDetails;
