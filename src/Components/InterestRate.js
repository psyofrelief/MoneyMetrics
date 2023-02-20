import React from "react";

const InterestRate = (props) => {
  const { name, interest, handleChange } = props;
  return (
    <div className="cont-interest-rate">
      <label htmlFor="inp-interest-rate">{name}</label>
      <input
        min="0"
        name={name}
        type="number"
        value={interest}
        onChange={(e) => handleChange(e, "interest")}
        id="inp-interest-rate"
      />
    </div>
  );
};

export default InterestRate;
