import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../login/login.css';

const Register = () => {
    return (
        <div className="overlay">
            <div className="form-container">
                    <>
                        <input className="text-input" type="text" name="name" placeholder="Name"  />

                        <input className="text-input" type="email" name="email" placeholder="Email"/>


                        <input className="text-input" type="password" name="password" placeholder="Password"/>

                        <button className="submit" type="submit">register</button>
                        <p>Already have an account? <Link to='/login'>Login</Link></p>
                    </>
            </div>
        </div>
    );
}

export default Register;