import React, {useEffect, useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {API_ENDPOINT, API_ENDPOINT_IMAGE} from "../constants";
import useShoppingCart from "../hooks/useShoppingCart";
import {useAuth} from "../hooks/useAuth";

export const GameCartItems = ({item})=>{

    const auth = useAuth();
    const service = useShoppingCart();
    const [redirect,setRedirect] = useState(false);

    useEffect(()=>{
        if (redirect) setRedirect(false);
    },[auth.credentials])

    const onClickHandler = (id)=>{
        service.remove(id);
        setRedirect(true);

    }

    if (redirect) { return <Redirect to= "/cart" />}

    return (

        <div className="row">
            <br/>
            <div className="col">
                <br/>
                <center><img src ={`${API_ENDPOINT_IMAGE}${item.image}`} /> </center>

            </div>
            <div className="col">
                <ul>
                    <center><h5> {item.name}</h5></center>
                    <br/>
                   <li>Preço :R${item.price}</li>
                   <li>Pontuação :{item.score}</li>

                </ul>

            </div>
            <div className="col">

                <br/>
                <br/>
                <br/>
                <button className="btn btn-info rem" onClick={()=>onClickHandler(item.id)}>Remover </button>

            </div>
            <hr/>
        </div>
    );
}