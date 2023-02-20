import React from "react";

const ConversionAmount = (props) => {
  const { type, handleChange, value } = props;
  return (
    <div className="cont-conversion-amount">
      <input
        name="Conversion Amount"
        type={type}
        min="0"
        value={value}
        id="inp-conversion-amount"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default ConversionAmount;
