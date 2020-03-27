import React, {useState} from 'react'
import Customisation from '../customisation/customisation'
import './menucard.css'




const MenuCard = ({menu}) => {

  const [isOpen, setIsOpen] =  useState(false);
  
  // const { name, imageUrl } = menu;
  
  return (
    <div className='menucard'>
      <div className='image'>
      <img className='menuimage' alt='menuimage' src={menu.imageUrl} />
      </div>
      <div className='details'>
      <div className='menuname'>
        {menu.name}
        <div>test name</div>
      </div>
        <span className='addtocart'>
          <Customisation isOpen={isOpen}/>
          <button className="addtocard-btn" onClick={()=> setIsOpen(true)}>Add</button>
        </span>
      </div>
    </div>
  )
}

export default MenuCard;
