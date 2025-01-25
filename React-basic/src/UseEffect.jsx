import React, { useState, useEffect } from "react";
import Button from "./button";

function UseEffect() {
    const [count, setCount] = useState(0)
    const [counter, setCounter] = useState(5)
      const [randomText, setRandomText] = useState("");
    useEffect(() => {
      console.log("hello")
    //   fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then((response) => response.json())
    //     .then((data) => {
    //       // Get a random post's body text
    //       const randomPost = data[Math.floor(Math.random() * data.length)];
    //       setRandomText(randomPost.body); // Set the random text to display
    //     });
    
    
    //   return () => {
    //    console.log("Component unmounted or effect dependencies changed");
    //   }
    }, [count]);

    //1.only when intial renderning []
    //2.only when dependency array changes[variable]
    //3.always	

    
    
  return (
    <>
      <p>{randomText}</p>
      <div>{count}</div>
      <div>{counter}</div>
      <Button children="+" functions={() => setCount((prevNo) => prevNo + 1)} />
      <Button
        children="conter"
        functions={() => setCounter((prevNo) => prevNo + 1)}
      />
    </>
  );
}

export default UseEffect;
