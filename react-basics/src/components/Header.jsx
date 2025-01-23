import React from "react";

function Header() {
  return (
    <header>
      <div className="container">
        <h1 className="titlebar">BR.F</h1>

        <div className="search-container">
          <input type="search" placeholder="Search" />
          <button type="submit" className="search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <div>
          <i className="fa-solid fa-cart-shopping"></i>
          <i className="fa-regular fa-heart"></i>
          <i className="fa-solid fa-user"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
