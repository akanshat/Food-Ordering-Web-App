import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "../../context/auth.js";
import config from "../../config.js";
import "./homepage.css";

import { ReactComponent as Login } from "../../assets/login.svg";

const Homepage = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });

  const [loading, setLoading] = useState(false);
  const { backendURL } = config;
  const { token, setToken } = useAuth();

  if (token) return <Redirect to="/home" />;

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    fetch(`${backendURL}/api/login`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputs),
    })
      .then((response) => {
        if (response.status !== 200) throw response;
        return response.json();
      })
      .then((res) => {
        const { token: fetchToken } = res;
        localStorage.setItem("token", fetchToken);
        setToken(fetchToken);
        setLoading(false);
      });
  };

  const handleInput = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="homepage-container">
      <div className="homepage-overlay">
        <div className="login-icon">
          <Login />
        </div>
        <div className="input-form">
          <form className="form-container" onSubmit={handleSubmit}>
            {loading ? (
              <h1>Loading...</h1>
            ) : (
              <>
                <input
                  className="text-input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={inputs.email}
                  onChange={handleInput}
                  required
                />

                <input
                  className="text-input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={inputs.password}
                  onChange={handleInput}
                  required
                />

                <button className="submit" type="submit">
                  Login
                </button>
                <p className="text-register">
                  Don't have an account yet?
                  <Link className="link-to-register" to="/register">
                    {"\t \t"}
                    <b>Register here</b>
                  </Link>
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
