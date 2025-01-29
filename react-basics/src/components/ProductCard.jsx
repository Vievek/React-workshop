import React from "react";
import shoeImage from "../assets/shoe.webp"; // Import from src/assets
import shoe2Image from "../assets/shoe2.jpeg"; // Import from src/assets
import shoe3Image from "../assets/shoe3.jpeg"; // Import from src/assets
import shoe4Image from "../assets/shoe4.jpeg"; // Import from src/assets
import logoImage from "../assets/logo.png"; // Import from src/assets
import whiteImage from "../assets/white.webp"; // Import from src/assets
import blackImage from "../assets/black.webp"; // Import from src/assets
import Counter from "./Counter";

function ProductCard() {
  return (
    <div className="card">
      <div className="imgSection">
        {/* Use imported images for consistency */}
        <img src={shoeImage} alt="reebok" className="bigImage" />
        <div className="smallImages">
          <img src={shoeImage} alt="shoe1" width="100px" height="100px" />
          <img src={shoe2Image} alt="shoe2" width="100px" height="100px" />
          <img src={shoe3Image} alt="shoe3" width="100px" height="100px" />
          <img src={shoe4Image} alt="shoe4" width="100px" height="100px" />
        </div>
      </div>

      <div className="detailsSection">
        <div className="brand-logo">
          <img src={logoImage} alt="logo" />
          <span>Reebok</span>
        </div>

        <h2>Shoes Reebok Zig Kinetica 3</h2>

        <div className="ratings">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <span>42 reviews</span>
        </div>

        <h1>$199.00</h1>

        <div className="color-section">
          <a href="#">Color</a>
          <span>&gt;</span>
          <a href="#">White</a>
          <div className="color-images">
            <img src={shoeImage} alt="gray" />
            <img src={whiteImage} alt="white" />
            <img src={blackImage} alt="black" />
          </div>
        </div>

        <div className="size-section">
          <a href="#">Size</a>
          <span>&gt;</span>
          <a href="#">EU Mon</a>
          <div className="size-buttons">
            <button>40.5</button>
            <button>41</button>
            <button>42</button>
            <button>43</button>
            <button>43.5</button>
            <button>44</button>
            <button>44.5</button>
            <button>45</button>
            <button>46</button>
          </div>
        </div>

        <Counter />

        <div className="add-to-cart-section">
          <button>Add to cart</button>
          <i className="fa-regular fa-heart"></i>
        </div>

        <div className="delivery-info">
          <i className="fa-solid fa-truck"></i>
          Free delivery on orders over $30.0
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
