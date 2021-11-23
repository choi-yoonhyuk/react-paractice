import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const Effect = () => {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  const iRunOnlyOnce = () => {
    console.log("i run only once (Api)");
  };
  useEffect(iRunOnlyOnce, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 3) {
      console.log("i run when 'keyword' changes");
    }
  }, [keyword]);

  useEffect(() => {
    console.log("i run when 'counter' changes");
  },[counter]);

  return (
    <div>
      <input
        value={keyword}
        placeholder="Search.."
        type="text"
        onChange={onChange}
      />
      <h3>Count : {counter}</h3>
      <button onClick={onClick}>Click!</button>
    </div>
  );
};

export default Effect;
