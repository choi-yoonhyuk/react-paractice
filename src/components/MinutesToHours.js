import React, { useState } from "react";

const MinutesToHours = () => {
  const [amount, setAmount] = useState("");
  const [flipped, setFlipped] = useState(false);

  const onChange = (event) => {
    setAmount(event.target.value);
  };

  const onFlipped = () => {
    reset();
    setFlipped((flipped) => !flipped);
  };

  const reset = () => {
    setAmount(0);
  };

  return (
    <div>
      <h4>Minutes & Hours</h4>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          type="number"
          placeholder="Minutes"
          id="minutes"
          onChange={onChange}
          value={flipped ? amount * 60 : amount}
          disabled={flipped}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          type="number"
          placeholder="Hours"
          id="hours"
          onChange={onChange}
          value={flipped ? amount : Math.round(amount / 60)}
          disabled={!flipped}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onFlipped}>{flipped ? "Turn back" : "Flip"}</button>
    </div>
  );
};

export default MinutesToHours;
