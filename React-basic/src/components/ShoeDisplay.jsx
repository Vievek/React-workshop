import React from 'react';

function ShoeDisplay(){
  return (
    <div className="displayshoe">
      <div className="shoenav">
        <div>Clothes and shoes .</div>
        <div>Shoes .</div>
        <div>Reebok</div>
      </div>
      <div className="bigshoe">
        <img src="./assets/pic3.jpeg" alt="Big Shoe" />
      </div>
      <div className="smallshoe">
        <img src="./assets/pic1.jpeg" alt="Small Shoe 1" />
        <img src="./assets/pic2.jpeg" alt="Small Shoe 2" />
        <img src="./assets/pic5.jpeg" alt="Small Shoe 3" />
        <img src="./assets/pic4.jpeg" alt="Small Shoe 4" />
      </div>
    </div>
  );
};

export default ShoeDisplay;
