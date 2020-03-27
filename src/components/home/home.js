import React from 'react';
import Search from '../search/search';
import MenuCard from '../menucard/menucard';

const Home = () => {
  return (
    <>
      <Search />
      <div>
        <MenuCard/>
      </div>
    </>
  )
}

export default Home;
