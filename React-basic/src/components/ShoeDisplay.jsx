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
        <img src="pic3.jpeg" alt="Big Shoe" height="500px" width="500px" />
      </div>
      <div className="smallshoe">
        <img src="pic1.jpeg" alt="Small Shoe 1" height="100px" width="100px"/>
        <img src="pic2.jpeg" alt="Small Shoe 2" height="100px" width="100px"/>
        <img src="pic5.jpeg" alt="Small Shoe 3" height="100px" width="100px"/>
        <img src="pic4.jpeg" alt="Small Shoe 4" height="100px" width="100px"/>
      </div>
    </div>
  );
};

export default ShoeDisplay;
