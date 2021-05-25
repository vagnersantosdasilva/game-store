import useGames from "../hooks/useGames";
import {GameListItems} from "./GameListItems";
import {useContext, useEffect, useState} from "react";
import React from 'react';
import {ToastContainer,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import {AuthContext} from "../hooks/useAuth";

const Games = ()=>{

    const games = useGames();
    const [list,setList] = useState(null);
    const auth = useContext(AuthContext);

    useEffect(()=>{
        games.loadListGames();
    },[auth.credentials]);

    useEffect(()=>{
        if(games.error) toast.error(`Ocorreu um erro :${games.error.message}` , {position:toast.POSITION.BOTTOM_LEFT});
    },[games.error]);


    return (

        <section id = "games">
            <div className="container">
                <center>
                    <h3> Jogos</h3>
                </center>
                <br/>
                {games.listGame!==null?
                    <div className="row">
                        {games.listGame.map (
                            i=> <GameListItems
                                item ={i}
                            />
                        )}
                    </div>:""
                }
            </div>
            <ToastContainer autoClose={5000}/>
        </section>
    );
}

export default Games;