import React, { useState } from "react";
import Customisation from "../customisation/customisation";
import "./menucard.css";

const MenuCard = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false);
  //const [itemid, setItemid] =

  // const modifyCart = (direction) => {

  // }

  return (
    <div className="menucard">
      <span>{menu.key}</span>
      <div className="image">
        <img className="menuimage" alt="menuimage" src={menu.imageUrl} />
      </div>
      <div className="details">
        <div className="menuname">{menu.name}</div>
        <div className="price-btn">
        &#8377;{menu.price.small}

          <span className="addtocart">
            <Customisation isOpen={isOpen} setIsOpen={setIsOpen} menu={menu} />
            <button className="addtocard-btn" onClick={() => setIsOpen(true)}>
              Add to cart
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
