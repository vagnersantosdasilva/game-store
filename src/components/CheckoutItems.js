import {API_ENDPOINT_IMAGE} from "../constants";
import React from "react";


const CheckoutItems  = ({item})=>{

    return (

        <div className="row">
            <br/>

            <div className="col">
                <ul>
                    <li> {item.name} : R${item.price}</li>
                </ul>
            </div>
        </div>
    );
}

export default CheckoutItems;