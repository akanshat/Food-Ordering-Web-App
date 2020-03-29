import React, { useEffect, useState } from 'react';
import ItemCard from '../cartitemcard/itemcard';
import config from '../../config.js';



const Checkout = ({cart}) =>{

    const [items, setItems] = useState([]);

    // useEffect(() =>{
    //     const { backendURL } = config;
    //     fetch( `${backendURL}/api/cart`, {
    //         method: 'get',

    //     } )
    // })

    const itemCards = items.cart( item => <ItemCard name={item.name} price={item.price} />)


    return(
        <div className='cartitem-cards'>
            {itemCards}
        </div>
    );
}

export default Checkout;
