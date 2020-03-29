import React from 'react'
import './itemcard.css';

const ItemCard = ({ name, price, _id }) => {

  return (
    <div className='cart-overlay'>
      <div className='cartitem'>
        <span>{name}</span>
        <span>&#8377;{price}</span>
        <span>x</span>
      </div>
    </div>
  )
}

export default ItemCard;
