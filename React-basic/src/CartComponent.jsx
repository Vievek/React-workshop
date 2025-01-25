import React, { useState } from "react";
import Button from "./button";

function CartComponent() {
  const [no, setNo] = useState(0);
  return (
    <>
      <Button children="+" functions={() => setNo((prevNo) => prevNo + 1)} />
      <div>{no}</div>
      <Button children="-" functions={() => setNo((prevNo) => prevNo - 1)}/>
    </>
  );
}

export default CartComponent;
