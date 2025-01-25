import React from 'react';

function Navbar(){
  return (
    <div className="navbar">
      <h1>BR.<span>F</span></h1>
      <div className="search-box">
        <i className="bi bi-search"></i>
        <input type="text" placeholder="Search" />
      </div>
      <div className="icon">
        <i className="bi bi-bag-heart"></i>
        <i className="bi bi-heart-fill"></i>
        <i className="bi bi-person-circle"></i>
      </div>
    </div>
  );
};

export default Navbar;
