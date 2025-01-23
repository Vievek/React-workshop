import React from "react";

function ProductCard() {
  return (
    <div className="card">
      <div className="imgSection">
        <img src="/assets/shoe.webp" alt="reebok" className="bigImage" />
        <div className="smallImages">
          <img src="/assets/shoe.webp" alt="shoe1" width="100px" height="100px" />
          <img src="/assets/shoe2.jpeg" alt="shoe2" width="100px" height="100px" />
          <img src="/assets/shoe3.jpeg" alt="shoe3" width="100px" height="100px" />
          <img src="/assets/shoe4.jpeg" alt="shoe4" width="100px" height="100px" />
        </div>
      </div>

      <div className="detailsSection">
        <div className="brand-logo">
          <img src="/assets/logo.png" alt="logo" />
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
            <img src="/assets/shoe.webp" alt="gray" />
            <img src="/assets/white.webp" alt="white" />
            <img src="/assets/black.webp" alt="black" />
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
