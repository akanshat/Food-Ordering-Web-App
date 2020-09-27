import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Checkout from "./components/checkout/checkout";
import Homepage from "./components/landingpage/homepage";
import Register from "./components/landingpage/register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthContext } from "./context/auth.js";
import { CartContext } from "./context/cart.js";
import config from "./config.js";

import "./App.css";

function App() {
  const [token, setToken] = useState();
  const [user, setUser] = useState();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (token) {
      const { backendURL } = config;
      fetch(`${backendURL}/api/user`, {
        headers: {
          authorization: token,
        },
      })
        .then((res) => res.json())
        .then((res) => setUser(res.user));
    }
  }, [token]);

  useEffect(() => {
    if (!token) {
      const tk = localStorage.getItem("token");
      if (tk) setToken(tk);
    }
  }, [token]);

  const logMeOut = () => {
    localStorage.setItem("token", "");
    setToken("");
    setCart([]);
  };

  return (
    <AuthContext.Provider value={{ token, setToken, logMeOut, user }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <Router>
          <Switch>
            <div className="App">
              {token ? <Navbar name={user?.name} /> : <Redirect to="/login" />}
              <Route path="/">
                <Redirect to="/login" />
              </Route>
              <Route path="/login">
                <Homepage />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
              <Route exact path="/home">
                {token ? <Home /> : <Redirect to="/login" />}
              </Route>
              <Route exact path="/checkout">
                <Checkout />
              </Route>
              <Route path="*">
                <h1>404</h1>
              </Route>
            </div>
            )
          </Switch>
        </Router>
      </CartContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
