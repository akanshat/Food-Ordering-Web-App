import React, {useState,useEffect} from 'react'
import Customisation from '../customisation/customisation'
import './menucard.css'
const menu = {
  name: 'Dish1',
  price: {
    small: '100',
    regular: '200'
  },
  imageUrl:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhJ1tLJv0jP1H7DCEt95IkTyxxI0Wze_nUXrPkhyUMA3tFzdzj'
}



const MenuCard = () => {
  const [isOpen, setIsOpen] =  useState(false);
  const { name, imageUrl } = menu
  return (
    <div className='menucard'>
      <div className='image'>
      <img className='menuimage' alt='menuimage' src={imageUrl} />
      </div>
      <div className='details'>
      <div className='menuname'>
        {name}
      </div>
        <span className='addtocart'>
          <Customisation isOpen={isOpen}/>
          <button className="addtocard-btn" onClick={()=> setIsOpen(true)}>Add</button>
        </span>
      </div>
    </div>
  )
}

export default MenuCard
