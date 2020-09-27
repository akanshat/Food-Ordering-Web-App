import React, { useState, useEffect } from "react";
import Search from "../search/search";
import MenuCard from "../menucard/menucard";
import "./home.css";
import config from "../../config.js";

const Home = () => {
  const [query, setQuery] = useState("");
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const { backendURL } = config;
    fetch(`${backendURL}/api/search`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    })
      .then((response) => response.json())
      .then((result) => setMenu(result.results));
  }, [query]);

  const menuCards = menu.map((item) => <MenuCard menu={item} key={item._id} />);

  return (
    <>
      <Search query={query} setQuery={setQuery} />
      <div className="cards-container">
        <div className="cards">{menuCards}</div>
      </div>
    </>
  );
};

export default Home;
