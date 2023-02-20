import React from "react";
import { Link } from "react-router-dom";

const FinanceDropDown = (props) => {
  const { hidden } = props;

  return (
    <ul className={hidden ? "dropdown" : "hide"}>
      <li className="dropdown-item" tabIndex="4">
        <Link to="/currency-converter" tabIndex="5">
          Currency Converter
        </Link>
      </li>
      <li className="dropdown-item">
        <Link to="/loan-calculator">Loan Calculator</Link>
      </li>
      <li className="dropdown-item">
        <Link to="/price-per-sqr-foot">Price Per Square Foot</Link>
      </li>
    </ul>
  );
};

export default FinanceDropDown;
