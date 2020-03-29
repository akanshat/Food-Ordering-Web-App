import React, { useState } from 'react'
import './customisation.css'
import config from '../../config';

const Customisation = ({ isOpen, setIsOpen, menu }) => {
  const [inputs, setInputs] = useState({
    name : menu.name,
    priceSelected: menu.price.small,
    directions: ''
  })
  const [loading, setLoading] = useState(false);
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
    setLoading(false);
    setIsOpen(false);
  }


  const handleInput = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
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
            <form className='container' value={inputs.price} onChange={handleInput}>
              <div className='radio'>
                <label>
                  <input type='radio' value='option1'/>
                  Small
                </label>
                <span>{menu.price.small}</span>
              </div>
              <div className='radio'>
                <label>
                  <input type='radio' value='option2'/>
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
          <button className='submit-btn' onClick={handleSubmit}>
            Submit
          </button>
        </>
      )}
    </div>
  )
}

export default Customisation
