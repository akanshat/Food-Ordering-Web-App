import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/auth';
import './navbar.css'

const Navbar = () => {
  const { token, logMeOut } = useAuth();

  return (
    <nav className='nav'>
      <Link to='/home'>
        <img className='logo' src={logo} alt='logo' />
      </Link>
      {token ? 
        <button className='pill' onClick={logMeOut}>LOG OUT</button>
       : 
        <Link to='/login'>
          <span className='pill'>Login</span>
        </Link>
      }
    </nav>
  );
}

export default Navbar
