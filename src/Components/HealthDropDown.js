import React from "react";
import { Link } from "react-router-dom";

const HealthDropDown = (props) => {
  const { hidden } = props;

  return (
    <ul className={hidden ? "dropdown" : "hide"}>
      <li className="dropdown-item">
        <Link to="/bmi-calculator">BMI Calculator</Link>
      </li>
      <li className="dropdown-item">
        <Link to="/bmr-calculator">BMR Calculator</Link>
      </li>
      <li className="dropdown-item">
        <Link to="/kilojoules-to-calories">Kilojoules to Calories</Link>
      </li>
    </ul>
  );
};

export default HealthDropDown;
