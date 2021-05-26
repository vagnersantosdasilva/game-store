import {useAuth} from "../hooks/useAuth";
import useShoppingCart from "../hooks/useShoppingCart";
import React, {useEffect, useState} from "react";
import CheckoutItems from "./CheckoutItems";
import {Redirect} from "react-router-dom";
import useCheckout from "../hooks/useCheckout";


const Checkout = ()=>{
    const auth = useAuth();
    const chackoutService = useCheckout();
    const cartService = useShoppingCart();
    const [cart,setCart] = useState(null);
    const [redirect,setRedirect] = useState(false);


    //Não foi possível implementar a tempo
    const check  = {
        name:"Vagner da Silva",
        cpf:"09591525710",
        endereco:"Rua Manoel Ivo 223, Raul Veiga, São Gonçalo RJ",

        creditCard: {
            cardNumber:"0000000000000000",
            expirationMonth:10,
            expirationYaer:2021,
            cvv:123,
            flag:"MASTER",
            cardHolder:"Vagner Santos da Silva"
        }
    }

    useEffect(()=>{
        cartService.loadCart(auth.credentials.id);

        if (cartService.processing ===false) console.log(cartService.cart);
    },[auth.credentials]);

    useEffect(()=>{
        setCart(cartService.cart);
    },[cartService.cart]);

    const onInputChangeHandler = (event)=>{

    }

    const onClickHandler = (event)=>{

    }

    const handlerRedirect = (event)=>{
        setRedirect(true);
    }


    if (redirect) return <Redirect to = "/cart"></Redirect>
    if (cartService.processing===false && cart !==null){
        return (
            <div className="container">
                <center><h4>Informações de pagamento</h4></center>
                <br/>
                <div className ="row">
                    <div className = "col">
                        <h5>Produtos :</h5><br/>
                        <div className="row">

                            <div>
                                {cartService.cart.products.map(
                                    i=>< CheckoutItems
                                        key  = {i.name}
                                        item = {i}
                                    />
                                )}<hr/>
                                </div>
                        </div>
                        <div className="row">

                            <div>
                                <p>Frete :R${cartService.cart.freight}</p>
                                <p>Total :R${cartService.cart.total}</p>
                            </div>

                        </div>
                    </div>

                    <div class="col">
                        <h5>Cartão de crédito :</h5><br/>
                        <div className = "row">
                            <form className="form-group">
                                <div className="form-group">
                                    <input type="hidden" className="form-control" name="userId" value ={auth.credentials.id}
                                    />
                                    <div className="form-group" >

                                        <input type="text" className="form-control" name="email" placeholder="O nome que consta no cartão "
                                                 onChange = {onInputChangeHandler}
                                        />
                                    </div>

                                    <div className="form-group" >

                                        <input type="text" className="form-control" name="cpf" placeholder="CPF com apenas números"
                                               onChange = {onInputChangeHandler}
                                        />
                                    </div>

                                    <div className="form-group" >

                                        <input type="text" className="form-control" name="credit" placeholder="Número do cartão"
                                                 onChange = {onInputChangeHandler}
                                        />
                                    </div>

                                    <div className="form-group" >

                                        <input type="text" className="form-control" name="endereco" placeholder="Endereço"
                                               onChange = {onInputChangeHandler}
                                        />
                                    </div>

                                    <button type = "button" className="btn btn-success" onClick={onClickHandler}>Enviar</button>&nbsp;&nbsp;
                                    <button type = "button" className="btn btn-info" onClick={handlerRedirect}>Voltar para carrinho</button>
                                </div>

                            </form>
                        </div>
                    </div>
            </div>
        </div>

        );
    }else {
        return (<div>...</div>);
    }

}
export default Checkout;