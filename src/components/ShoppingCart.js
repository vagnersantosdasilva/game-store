import React, {useEffect, useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import useShoppingCart from "../hooks/useShoppingCart";
import {useAuth} from "../hooks/useAuth";
import NavBarItem from "./NavBarItem";
import {GameCartItems} from "./GameCartItems";

const ShoppingCart = ()=>{
    const auth = useAuth();
    const [redirect,setRedirect] = useState(false);
    const [cart,setCart] = useState(null);
    const cartService = useShoppingCart();
    const [redirectCheckout ,setRedirectCheckout] = useState(false);


    useEffect(()=>{
        if (redirect) setRedirect(false);
        if (redirectCheckout) setRedirectCheckout(false);
    },[]);

    useEffect(()=>{
        cartService.loadCart(auth.credentials.id);
        if (cartService.processing ===false) console.log(cartService.cart);
    },[auth.credentials]);



    useEffect(()=>{
            if (cartService.cart){
                setCart(cartService.cart);
            }
    },[cartService.cart]);


    const onClickHandler =(event)=>{
        setRedirect(true);
    }

    const onCheckOutHandler  = (event)=>{
        setRedirectCheckout(true);
    }

    if( redirectCheckout) return <Redirect to  = "/checkout"></Redirect>
    if (cartService.processing) {
        return (
            <div className="jumbotron">
                <center>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                </center>
            </div>);
    }
    if (redirect) return <Redirect to="/" />
    if (cart!==null && cartService.processing===false){
        if (cart.products.length===0 || cart===null){
            return (
                <div className="container">
                    <br/><br/><br/>
                    <center>
                    <div> <h4> Seu carrinho está vazio </h4></div>
                    <button className="btn btn-info" onClick={onClickHandler}>Ir para Produtos</button>
                    </center>
                </div>
            );
        }
        else{
            return (
                <div className="container">
                    <div>
                        {cartService.cart.products.map(
                            i=><GameCartItems
                                key  = {i.name}
                                item = {i}
                            />
                        )}
                        <hr/>

                    </div>
                    <div class="row">
                        {cartService.cart.total!==0?
                            <div><center><button className="btn btn-info" onClick={onClickHandler}>Continuar comprando</button>&nbsp;&nbsp;
                                <button className="btn btn-success" onClick={onCheckOutHandler}>Finalizar Pedido</button></center>
                            </div>:""

                        }


                    </div>

                </div>


            );}
    }else return (<div>null</div>);
}

export default ShoppingCart;