import React from 'react';

function ShoeDetails(){
  return (
    <div className="shoedetails">
      <div className="detailsbar">
        <div className="reebok">
          <i className="bi bi-person-circle"></i>
          <h5>Reebok</h5>
        </div>
        <h4>HR1343ROO--8</h4>
      </div>
      <div className="title">Shoes REEbok Zig Kinetica 3</div>
      <div className="star">
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
      </div>
      <div className="price">$199.00</div>
      <div className="shoe-color">
        <h6>Colors</h6>
        <div className="scolor">
          <img src="pic1.jpeg" alt="Color 1" height="50px" width="50px"/>
          <img src="pic2.jpeg" alt="Color 2" height="50px" width="50px"/>
          <img src="pic5.jpeg" alt="Color 3" height="50px" width="50px"/>
        </div>
      </div>
      <div className="Size">
        <h4>Size</h4>
        <h6>40</h6>
        <h6>49</h6>
        <h6>56</h6>
        <h6>46</h6>
        <h6>60</h6>
        <h6>34</h6>
        <h6>70</h6>
        <h6>78</h6>
        <h6>23</h6>
      </div>
      <div className="add-to-cart">
        <input type="button" value="Add to Cart" />
        <i className="bi bi-heart"></i>
      </div>
    </div>
  );
};

export default ShoeDetails;
