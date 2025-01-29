import React, { useState, useEffect,useMemo } from "react";

function UseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

//   const [doubleNumber, setdoubleNumber] = useState(0);

//   useEffect(() => {
//     setdoubleNumber(double(number));
//   }, [number]);

const doubleNumber = useMemo(() => { 
    return double(number);
  }, [number]);
  

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button
        onClick={() => {
          setDark((prevDark) => !prevDark);
          console.log(dark);
        }}
      >
        Toggle Theme
      </button>
      <div
        style={{
          backgroundColor: dark ? "black" : "white", // conditional rendring
          color: dark ? "white" : "black",
        }}
      >
        {doubleNumber}
      </div>
    </>
  );
}

function double(number) {
    for(let i = 0; i < 1000000000; i++){}
  console.log("multiply");
  return number * 2;
}
export default UseMemo;


// issue - when 2 use states are there in a component and one usestate function have any slow function and other usestate change also cause delay