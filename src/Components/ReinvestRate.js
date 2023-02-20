import React from "react";

const ReinvestRate = (props) => {
  const { handleChange, reinvest } = props;

  return (
    <label className="cont-reinvest-rate">
      Daily reinvest rate <span>(optional)</span>
      <input
        id="inp-reinvest-rate"
        name="Daily Reinvest Rate"
        type="number"
        value={reinvest}
        onChange={(e) => handleChange(e, "reinvest")}
      />
    </label>
  );
};

export default ReinvestRate;
