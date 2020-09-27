import React, { useState } from "react";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import "./customisation.css";

import { useCart } from "../../context/cart";

const Customisation = ({ isOpen, setIsOpen, menu }) => {
  const [inputs, setInputs] = useState({
    name: menu.name,
    priceSelected: menu.price.small,
  });

  const { setCart } = useCart();

  const handleSubmit = () => {
    setCart((old) => old.concat([inputs]));
    setIsOpen(false);
  };

  if (!isOpen) return null;
  return (
    <div className="custom-overlay">
      <div className="choices">
        <RadioGroup
          name="priceSelected"
          className='radio-button'
          value={inputs.priceSelected}
          onChange={(v) =>
            setInputs((i) => {
              return { ...i, priceSelected: v };
            })
          }
        >
          <RadioButton value={menu.price.small} >
            Small {"\t"} &#8377;{menu.price.small}&nbsp;&nbsp;&nbsp;&nbsp;
          </RadioButton>
          <RadioButton value={menu.price.large}>
            Large {"\t"} &#8377;{menu.price.large}&nbsp;&nbsp;&nbsp;&nbsp;
          </RadioButton>
        </RadioGroup>
      </div>
      <span>
        <button className="submit-btn" onClick={handleSubmit}>
          Add
        </button>
        <button className="submit-btn" onClick={() => setIsOpen(false)}>
          Cancel
        </button>
      </span>
    </div>
  );
};

export default Customisation;
