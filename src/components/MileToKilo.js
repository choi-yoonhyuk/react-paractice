import React from "react";
import { useState } from "react/cjs/react.development";

const MileToKilo = () => {
  const [amount, setAmount] = useState("");
  const [convert, setConvert] = useState(false);

  const onChange = (event) => {
    setAmount(event.target.value);
  };

  const onConvert = () => {
    reset();
    setConvert((amount) => !amount);
  };
  const reset = () => {
    setAmount("");
  };
  return (
    <div>
        <h4>Mile & Kilo</h4>
      <div>
        <input
          type="number"
          style={{textAlign:"right"}}
          placeholder="mile"
          id="mile"
          value={convert ? (amount * 0.621371).toFixed(2)  : amount}
          onChange={onChange}
          disabled={convert}
        />
        <label htmlFor="mile">(mi)</label>
      </div>
      <div>
        <input
          type="number"
          style={{textAlign:"right"}}
          placeholder="kliometer"
          id="kilometer"
          value={convert ? amount : (amount * 1.609344).toFixed(2) }
          onChange={onChange}
          disabled={!convert}
        />
        <label htmlFor="kilo">(km)</label>
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onConvert}>Convert</button>
    </div>
  );
};

export default MileToKilo;
