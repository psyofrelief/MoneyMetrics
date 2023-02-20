import React, { useState } from "react";

const Round = (props) => {
  const { handleChange } = props;

  const [focused, setFocused] = useState({
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const handleFocus = (button) => {
    setFocused({ [button]: true });
  };

  return (
    <div className="cont-round">
      <h4>Round (decimal places):</h4>
      <div className="cont-round-input">
        <button
          className={`btn-decimal-place ${
            focused[1] === true ? "highlight" : ""
          }`}
          value="1"
          onClick={(e) => handleChange(e, "decimal")}
          onFocus={() => handleFocus("1")}
        >
          1
        </button>
        <button
          className={`btn-decimal-place ${
            focused[2] === true ? "highlight" : ""
          }`}
          value="2"
          onClick={(e) => handleChange(e, "decimal")}
          onFocus={() => handleFocus("2")}
        >
          2
        </button>
        <button
          className={`btn-decimal-place ${
            focused[3] === true ? "highlight" : ""
          }`}
          value="3"
          onClick={(e) => handleChange(e, "decimal")}
          onFocus={() => handleFocus("3")}
        >
          3
        </button>
        <button
          className={`btn-decimal-place ${
            focused[4] === true ? "highlight" : ""
          }`}
          value="4"
          onClick={(e) => handleChange(e, "decimal")}
          onFocus={() => handleFocus("4")}
        >
          4
        </button>
        <button
          className={`btn-decimal-place ${
            focused[5] === true ? "highlight" : ""
          }`}
          value="5"
          onClick={(e) => handleChange(e, "decimal")}
          onFocus={() => handleFocus("5")}
        >
          5
        </button>
      </div>
    </div>
  );
};
export default Round;
