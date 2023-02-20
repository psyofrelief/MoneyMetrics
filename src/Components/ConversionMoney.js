import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";

const ConversionMoney = (props) => {
  const { from, to, swapUnits, handleChange } = props;
  return (
    <div className="cont-conversion-money">
      <input
        name="Currency From"
        type="text"
        maxLength="3"
        value={from}
        id="inp-currency-from"
        onChange={(e) => handleChange(e, "from")}
        tabIndex="9"
      />
      <FontAwesomeIcon
        icon={faRightLeft}
        onClick={() => swapUnits()}
        tabIndex="10"
      />
      <input
        name="Currency To"
        type="text"
        maxLength="3"
        value={to}
        id="inp-currency-to"
        onChange={(e) => handleChange(e, "to")}
        tabIndex="11"
      />
    </div>
  );
};

export default ConversionMoney;
