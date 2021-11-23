import React, { useState } from "react";

const CountTest = () => {
  const [counter, setCounter] = useState(0);
  const ADD = () => {
    //   setCounter(counter + 1);
    setCounter(current => current + 1)
      console.log("render")
      console.log(counter)
  } 
  const Minus = () => {
    //   setCounter(counter - 1);
    setCounter(current => current - 1)
  }

  return <div>
      <h3>Total : {counter}</h3>
      <button onClick={ADD}>ADD!</button>
      <button onClick={Minus}>Minus!</button>
  </div>;
};

export default CountTest;
