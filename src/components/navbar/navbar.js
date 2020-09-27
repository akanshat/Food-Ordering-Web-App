import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/auth'
import Checkout from '../checkout/checkout'
import './navbar.css'

const Navbar = () => {
  const { token, logMeOut } = useAuth()
  return (
    <nav className='nav'>
      <Link to='/home'>
        <img className='logo' src={logo} alt='logo' />
      </Link>
      <div className='nav-right'>
        {token ? (
          <>
            <Checkout />
            <button className='pill' onClick={logMeOut}>
              LOG OUT
            </button>
          </>
        ) : (
          <Link to='/homepage'>
            <span className='pill'>Home</span>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
