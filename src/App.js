import React, { useState, useEffect } from 'react'
import Login from './components/login/login'
import Register from './components/register/register'
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import Checkout from './components/checkout/checkout'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { AuthContext } from './context/auth.js'
import config from './config.js'

import './App.css'

function App () {
  const [token, setToken] = useState()
  const [user, setUser] = useState()

  useEffect(() => {
    if (token) {
      const { backendURL } = config;
      fetch(`${backendURL}/api/user`, {
        headers: { 
          'authorization': token
        }
      })
        .then(res => res.json())
        .then(res => setUser(res.user))
    }
  }, [token])

  useEffect(() => {
    if (token) {
      const { backendURL } = config
      fetch(`${backendURL}/api/user`, {
        headers: {
          'authorization': token
        }
      })
        .then(res => res.json())
        .then(res => setUser(res.user))
    }
  }, [token])

  useEffect(() => {
    if (!token) {
      const tk = localStorage.getItem('token')
      if (tk) setToken(tk)
    }
  }, [token])

  const logMeOut = () => {
    localStorage.setItem('token', '')
    setToken("");
  }

  return (
    <AuthContext.Provider value={{token, setToken, logMeOut, user}}>
    <Router>
      <div className='App'>
      <Navbar name={user?.name} />
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path='/register'>
          <Register />
        </Route>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route exact path='/checkout'>
          <Checkout />
        </Route>
        <Route path='*'>
          <h1>404</h1>
        </Route>
      </Switch>
      </div>
    </Router>
    </AuthContext.Provider>
  );
}

export default App
