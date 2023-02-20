import React from "react";

const Amount = (props) => {
  const { name, type, handleChange, price, currency, item } = props;
  return (
    <div className="cont-amount-input">
      <label htmlFor="amount">{name}:</label>
      <div className="cont-amount-search">
        <div className="amount-currency">{currency}</div>
        <input
          name={name}
          min="0"
          type={type}
          value={price}
          id="amount"
          onChange={(e) => handleChange(e, `${item}`)}
        />
      </div>
    </div>
  );
};

export default Amount;
