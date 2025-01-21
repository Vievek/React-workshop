import React from 'react'

function Nav() {
  return (
    <>
        
      <header>
        <div className="container">
          <div className="logo">
              <h1>BF.<span>F</span></h1>
          </div>
    
          <input type="searchbar" name="search" placeholder="search"/>
        
          <div className="icon">
              <img src="https://img.icons8.com/?size=100&id=9671&format=png&color=000000" alt="cart"/>
              <img src="https://img.icons8.com/?size=100&id=7697&format=png&color=000000" alt="favorite"/>
              <img src="https://img.icons8.com/?size=100&id=7819&format=png&color=000000" alt="profile"/>
          </div>
        </div>

        <nav className="menu">
          <a href="#">Women</a>
          <a href="#">Men</a>
          <a href="#">Kids</a>
          <a href="#">Sports</a>
          <a href="#">Brand</a>
          <a href="#">New</a>
        </nav>
      </header>
    
    </>
  )
}

export default Nav