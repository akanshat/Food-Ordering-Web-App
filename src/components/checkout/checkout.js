import React, { useState } from "react";
import { ReactComponent as CartIcon } from "../../assets/cart.svg";
import { useCart } from "../../context/cart";
import "./checkout.css";

const Checkout = () => {
  const { cart, setCart } = useCart();
  let total = 0;
  const items = cart.map((item, index) => {
    total = total + Number(item.priceSelected);
    return (
      <li>
        <span className="cartitemname">{item.name}</span>
        <span className="cartitemprice">&#8377;{item.priceSelected}</span>
        <span className="cross" onClick={() => removeFromCart(index)}>
          &#10005;
        </span>
      </li>
    );
  });

  const removeFromCart = (index) => {
    setCart(cart.slice(0, index).concat(cart.slice(index + 1)));
  };

  const [open, setOpen] = useState(false);

  return (
    <div className="carticon">
      <button onClick={() => setOpen((o) => !o)}>
        <CartIcon color={cart.length > 0 ? `#fa6d00` : `black`} height="40px" />
      </button>
      {open && (
        <ul className="cartlist">
          {items.length ? (
            <>
              <li className="naya-li">
                <span className="cartitemname">Total :</span>
                <span className="cartitemprice">&#8377;{total}</span>
                <span className="cross"></span>
              </li>
              {items}
            </>
          ) : (
            <span>No items selected</span>
          )}
        </ul>
      )}
    </div>
  );
};

export default Checkout;
