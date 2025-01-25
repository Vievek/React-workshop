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
        <img src="pic3.jpeg" alt="Big Shoe" />
      </div>
      <div className="smallshoe">
        <img src="pic1.jpeg" alt="Small Shoe 1" />
        <img src="pic2.jpeg" alt="Small Shoe 2" />
        <img src="pic5.jpeg" alt="Small Shoe 3" />
        <img src="pic4.jpeg" alt="Small Shoe 4" />
      </div>
    </div>
  );
};

export default ShoeDisplay;
