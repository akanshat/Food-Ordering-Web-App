import React, { useState } from 'react'
import './customisation.css'

const Customisation = ({ isOpen, menu }) => {
  const [inputs, setInputs] = useState({
    options: '1',
    directions: ''
  })

  const handleInput = event => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    })
  }

  const [isAddedToCart, setIsAddedToCart] = useState(false);

  if (!isOpen) return null
  return (
    <div className='custom-overlay'>
      <div className='choices'>
          
        <form className='container'>
          <div className='radio'>
            <label>
              <input type='radio' value='option1' checked={true} />
              Small    
            </label>
            <span>{menu.price.small}</span>
          </div>
          <div className='radio'>
            <label>
              <input type='radio' value='option2' />
              Regular    
            </label>
            <span>{menu.price.regular}</span>
          </div>
        </form>

        <textarea
          className='directions'
          rows='1'
          name='directions'
          placeholder='Add extra directions'
          value={inputs.directions}
          onChange={handleInput}
        ></textarea>
      </div>
      <button className='submit-btn'>Submit</button>
    </div>
  )
}

export default Customisation
