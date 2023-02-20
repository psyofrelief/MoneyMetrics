import React from "react";

const AdditonalDeposits = (props) => {
  const { currency, handleChange, additionalDeposits } = props;

  return (
    <div className="cont-additional-deposits">
      <label htmlFor="inp-additional-deposits">
        Additional Deposits <span>(Optional)</span>
      </label>
      <div className="cont-amount-input">
        <div className="amount-currency">{currency}</div>
        <input
          name="Additional Deposits"
          type="number"
          value={additionalDeposits}
          id="inp-additional-deposits"
          onChange={(e) => handleChange(e, "additionalDeposits")}
        />
      </div>
    </div>
  );
};

export default AdditonalDeposits;
