import React from "react";

const Duration = (props) => {
  const { years, months, days, handleChange } = props;

  return (
    <div className="cont-duration">
      <label htmlFor="inp-years">Years</label>
      <input
        name="Years"
        type="number"
        min="0"
        value={years}
        id="inp-years"
        onChange={(e) => handleChange(e, "years")}
      />
      <label htmlFor="inp-months">Months</label>
      <input
        name="Months"
        type="number"
        min="0"
        value={months}
        id="inp-months"
        onChange={(e) => handleChange(e, "months")}
      />
      <label htmlFor="inp-days">Days</label>
      <input
        name="Days"
        type="number"
        min="0"
        value={days}
        id="inp-days"
        onChange={(e) => handleChange(e, "days")}
      />
    </div>
  );
};

export default Duration;
