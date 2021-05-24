import React from 'react'
import {Link} from 'react-router-dom'
import {API_ENDPOINT, API_ENDPOINT_IMAGE} from "../constants";
export const GameListItems = ({item})=>{
    return (
        <div className='col-sm-4 col-lg-3 col-md-3'>
            <div className='thumbnail'>
                <a href='#' data-toggle='modal'>
                    <div className='text-center'  >
                        <img src={`${API_ENDPOINT_IMAGE}${item.image}`} />
                    </div>
                </a>
                <div className='caption' align='center'>
                    <h4>
                        <Link to={`gamedetails/${item.id}`}>
                            {item.name}
                        </Link>

                    </h4>
                </div>
            </div>
        </div>
    );
}