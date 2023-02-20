import React from "react";
import { Link } from "react-router-dom";

const FeaturedDropDown = (props) => {
  const { hidden } = props;

  return (
    <ul className={hidden ? "dropdown" : "hide"}>
      <li className="dropdown-item">
        <Link to="/cm-to-feet">Cm to Feet</Link>
      </li>
      <li className="dropdown-item">
        <Link to="/cm-to-inches">Cm to Inches</Link>
      </li>
      <li className="dropdown-item">
        <Link to="/feet-to-inches">Feet to Inches</Link>
      </li>
      <li className="dropdown-item">
        <Link to="/feet-to-meters">Feet to Meters</Link>
      </li>
      <li className="dropdown-item">
        <Link to="/grams-to-pounds">Grams to Pounds</Link>
      </li>
      <li className="dropdown-item">
        <Link to="/kilos-to-pounds">Kilos to Pounds</Link>
      </li>
      <li className="dropdown-item">
        <Link to="/kilos-to-stone">Kilos to Stone</Link>
      </li>
      <li className="dropdown-item">
        <Link to="/micrograms-to-grams">Micrograms to Grams</Link>
      </li>
      <li className="dropdown-item">
        <Link to="/micrograms-to-mg">Micrograms to Mg</Link>
      </li>
      <li className="dropdown-item">
        <Link to="/milligrams-to-grams">Milligrams to Grams</Link>
      </li>
      <li className="dropdown-item">
        <Link to="/mm-to-inches">Millimeters to Inches</Link>
      </li>
      <li className="dropdown-item">
        <Link to="/ounces-to-pounds">Ounces to Pounds</Link>
      </li>
    </ul>
  );
};

export default FeaturedDropDown;
