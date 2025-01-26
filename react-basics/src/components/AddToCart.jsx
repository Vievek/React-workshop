import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaHeart } from "react-icons/fa"; // You can also use font-awesome icons

const AddToCart = ({ onAddToCart, initialCount = 1 }) => {
  const [count, setCount] = useState(initialCount);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    onAddToCart(count); // Send the count to the parent component
  };

  return (
    <div className="add-to-cart-section">
      <button onClick={decreaseCount}>-</button>
      <span>{count}</span>
      <button onClick={increaseCount}>+</button>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
      <i className="fa-heart" />
    </div>
  );
};

AddToCart.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
  initialCount: PropTypes.number,
};

export default AddToCart;
