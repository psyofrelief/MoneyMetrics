import React, { useState, useEffect } from "react";

const Weight = (props) => {
  const [focused, setFocused] = useState({
    weightMetric: true,
    weightImperial: false,
  });

  const { handleChange, weight } = props;

  const handleFocus = (button) => {
    setFocused({ [button]: true });
  };

  const handleBlur = (button) => {
    setFocused({ [button]: false });
  };

  useEffect(() => {
    handleFocus("weightMetric");
  }, []);

  return (
    <label className="cont-weight">
      Weight:
      <input
        id="inp-weight"
        name="Weight"
        type="number"
        value={weight}
        min="0"
        onChange={(e) => {
          handleChange(e, "weight");
        }}
      />
      <div className="cont-weight-metric-imperial">
        <button
          className={`btn-weight-metric-imperial ${
            focused.weightMetric === true ? "highlight" : ""
          }`}
          value="pounds"
          onClick={(e) => handleChange(e, "weightUnit")}
          onFocus={() => handleFocus("weightMetric")}
          onBlur={() => {
            handleBlur("weightImperial");
            handleFocus("weightMetric");
          }}
        >
          pounds
        </button>
        <button
          className={`btn-weight-metric-imperial ${
            focused.weightImperial === true ? "highlight" : ""
          }`}
          value="kilograms"
          onClick={(e) => handleChange(e, "weightUnit")}
          onFocus={() => {
            handleFocus("weightImperial");
          }}
        >
          kilograms
        </button>
      </div>
    </label>
  );
};

export default Weight;
