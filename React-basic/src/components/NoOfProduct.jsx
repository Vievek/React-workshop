import React,{useState} from 'react';


function NoOfProduct() {
  const[count,setCount]=useState(4);
  const decrementCount =() => {
    setCount(count-1);

  }
  const incrementCount =() => {
    setCount(count+1);

  }

  useState()  
  return (
      <div className="NoOfProduct">
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
      </div>
  );
}

export default NoOfProduct;
