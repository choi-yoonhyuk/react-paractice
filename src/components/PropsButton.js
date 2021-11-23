import React from "react";
import { useState } from "react/cjs/react.development";
import PropTypes from "prop-types";

const Btn = ({ text, changeValue, fontSize }) => {
  console.log(text, "render");
  return (
    <button
      onClick={changeValue}
      style={{
        backgroundColor: "tomato",
        color: "white",
        border: 0,
        borderRadius: 10,
        fontSize: fontSize, 
      }}
    >
      {text}
    </button>
  );
};

const MemoBtn = React.memo(Btn);
// React.memo 로 불필요한 리렌더링를 막아준다.

Btn.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.number,
};

const BtnApp = () => {
  const [value, setValue] = useState("Save Changes");
  const changeValue = () => {
    setValue("Revert Change");
  };

  return (
    <div>
      <MemoBtn text={value} changeValue={changeValue} fontSize={19} />
      <MemoBtn text="Continue" />
    </div>
  );
};

export default BtnApp;
