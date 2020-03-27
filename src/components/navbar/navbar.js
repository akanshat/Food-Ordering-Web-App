import React from 'react';
import logo from '../../assets/logo.png';
import {Link} from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return(
        <nav className='nav'>
            <Link to='/home'>
                <img className='logo' src={logo} alt='logo'/>
            </Link>
            <Link to='/login'>
                <span className='pill'>Login</span>
            </Link>
        </nav>
    );
}

export default Navbar;