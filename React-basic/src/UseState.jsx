import React, { useState } from "react";
import Button from "./button";

function UseState() {
  // Declare state variable
  const [counter, setCounter] = useState(5);

  // Function to increment counter
  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1); // Update state using setCounter
  };

  console.log(counter);
  console.log("hello");

  return (
    <>
      <br />
      <hr />
      <div>{counter}</div>
      {/* <button onClick={incrementCounter}>Increment</button> */}
      <Button functions={incrementCounter}  children="+" />
    </>
  );
}

export default UseState;
