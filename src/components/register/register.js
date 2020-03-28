import React, { useState } from 'react'
import { useAuth } from '../../context/auth.js'
import { Link, Redirect } from 'react-router-dom'
import '../login/login.css'
import config from '../../config'


const Register = () => {
  const { token } = useAuth
  const [inputs, setInputs] = useState({ name: '', email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState()

  const { backendURL } = config;

  const handleSubmit = async () => {
    setLoading(true);
    const { message: msg } = await fetch(`${backendURL}/api/register`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputs)
    })
    .then(response => response.json());
    setLoading(false)
    setMessage(msg)
  }

  const handleInput = event => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    });
  }

  if (token) 
    return <Redirect to='/home' />

  return (
    <div className='overlay'>
      <div className='form-container'>
        {loading ? 
          <h1>Loading...</h1>
         : 
          <>
            {message && <p>{message}</p>}
            <input
              className='text-input'
              type='text'
              name='name'
              placeholder='Name'
              value={inputs.name}
              onChange={handleInput}
            />

            <input
              className='text-input'
              type='email'
              name='email'
              placeholder='Email'
              value={inputs.email}
              onChange={handleInput}
            />

            <input
              className='text-input'
              type='password'
              name='password'
              placeholder='Password'
              value={inputs.password}
              onChange={handleInput}
            />

            <button className='submit' type='submit' onClick={handleSubmit}>
              Register
            </button>
            <p>
              Already have an account? <Link to='/login'>Login</Link>
            </p>
          </>
        }
      </div>
    </div>
  )
}

export default Register
