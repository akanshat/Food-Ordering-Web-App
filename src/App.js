import React from 'react';
import Login from './components/login/login';
import Register from './components/register/register'
;import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Checkout from './components/checkout/checkout';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

function App () {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login"/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/register">
          <Register/>
        </Route>
        <Route exact path="/home">
          <Home/>
        </Route>
        <Route exact path="/checkout">
          <Checkout/>
        </Route>
        <Route path="*">
              <h1>404</h1>
            </Route>
      </Switch>
    </Router>
  )
}

export default App;
