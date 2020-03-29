import React, { useState } from 'react'
import { RadioGroup, RadioButton } from 'react-radio-buttons'
import './customisation.css'
import config from '../../config'

const Customisation = ({ isOpen, setIsOpen, menu }) => {
  const [inputs, setInputs] = useState({
    name: menu.name,
    priceSelected: menu.price.small
  })
  const [loading, setLoading] = useState(false)
  const { backendURL } = config

  const handleSubmit = async () => {
    setLoading(true)
    await fetch(`${backendURL}/api/order`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...inputs
      })
    }).then(response => response.json())
    setLoading(false)
    setIsOpen(false)
  }

  const handleInput = (event) => {
    console.log(event);
    const {name, value} = event
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  if (!isOpen) return null
  return (
    <div className='custom-overlay'>
      {loading ? (
        <h1>Loading..</h1>
      ) : (
        <>
          <div className='choices'>
            {/* <form className='container' >
              <div className='radio'>
                <label className='label'>
                  <input type='radio'  checked={inputs.price} className='qty' onClick={handleInput}/>
                  Small
                  <span className='price'>{menu.price.small}</span>
                </label>
              </div>
              <div className='radio'>
                <label className='label'>
                  <input type='radio' checked={inputs.price} className='qty' onClick={handleInput}/>
                  Regular
                  <span className='price'>{menu.price.regular}</span>
                </label>
              </div>
            </form> */}
            <RadioGroup
              name='priceSelected'
              value={inputs.priceSelected}
              onChange={ v=> setInputs(i => {return {...i, priceSelected: v}})}
            >
              <RadioButton value={menu.price.small}>Small {menu.price.small}</RadioButton>
              <RadioButton value={menu.price.regular}>
                Regular {menu.price.regular}
              </RadioButton>
            </RadioGroup>
          </div>
          <span>
            <button className='submit-btn' onClick={handleSubmit}>
              Add
            </button>
            <button className='submit-btn' onClick={() => setIsOpen(false)}>
              Cancel
            </button>
          </span>
        </>
      )}
    </div>
  )
}

export default Customisation
