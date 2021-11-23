import React from "react";
import { useState } from "react/cjs/react.development";
import MileToKilo from "./MileToKilo";
import MinutesToHours from "./MinutesToHours";

const SuperConverter = () => {
  const [index, setIndex] = useState("xx");
  const onSelect = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div>
      <h1>Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="xx">Select Your Units</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">Mile & Kilo</option>
      </select>
      <hr />
      {index === "xx" ? "Please select your units" : null}
      {index === "0" ? <MinutesToHours /> : null}
      {index === "1" ? <MileToKilo /> : null}
    </div>
  );
};

export default SuperConverter;
