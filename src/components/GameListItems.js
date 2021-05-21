import React from 'react'
import {Link} from 'react-router-dom'
export const GameListItems = ({item})=>{
    return (
        <div className='col-sm-3 col-lg-3 col-md-3'>
            <div className='thumbnail'>
                <a href='#' data-toggle='modal'>
                    <iframe className='img-thumbnail' src={item.image}>
                    </iframe>
                </a>
                <div className='caption' align='center'>
                    <h4>
                        <Link to={`pay/${item.id}`}>
                            {item.name}
                        </Link>

                    </h4>
                </div>
            </div>
        </div>
    );
}