import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Hamburger = (props) => {
  const [state, setState] = useState({
    hidden: true,
    finance: false,
    featured: false,
    health: false,
  });

  const handleChange = () => {
    setState({
      ...state,
      hidden: !state.hidden,
      finance: true,
      featured: true,
      health: true,
    });
  };

  return (
    <div className="hamburger">
      <FontAwesomeIcon icon={faBars} onClick={handleChange} />
      <div className={`tabs ${state.hidden ? "hide" : ""}`}>
        <div className="hamburger-tab">
          Finance
          <div className="hamburger-links">
            <Link to="/currency-converter" className="hamburger-link">
              Currency Converter
            </Link>
            <Link to="/loan-calculator" className="hamburger-link">
              Loan Calculator
            </Link>
            <Link to="/price-per-sqr-foot" className="hamburger-link">
              Price Per Square Foot
            </Link>
          </div>{" "}
        </div>
        <div className="hamburger-tab">
          Featured
          <div className="hamburger-links">
            <Link className="hamburger-link" to="/cm-to-feet">
              {" "}
              Cm to Feet
            </Link>
            <Link to="/cm-to-inches" className="hamburger-link">
              Cm to Inches
            </Link>
            <Link to="/feet-to-inches" className="hamburger-link">
              Feet to Inches
            </Link>{" "}
            <Link to="/feet-to-meters" className="hamburger-link">
              Feet to Meters
            </Link>{" "}
            <Link to="/grams-to-pounds" className="hamburger-link">
              Grams to Pounds
            </Link>{" "}
            <Link to="/kilos-to-pounds" className="hamburger-link">
              Kilos to Pounds
            </Link>{" "}
            <Link to="/kilos-to-stone" className="hamburger-link">
              Kilos to Stone
            </Link>{" "}
            <Link to="/micrograms-to-mg" className="hamburger-link">
              Micrograms to Mg
            </Link>{" "}
            <Link to="/milligrams-to-grams" className="hamburger-link">
              Milligrams to Grams
            </Link>{" "}
            <Link to="/mm-to-inches" className="hamburger-link">
              Millimeters to Inches
            </Link>{" "}
            <Link to="/ounces-to-pounds" className="hamburger-link">
              Ounces to Pounds
            </Link>
          </div>{" "}
        </div>
        <div className="hamburger-tab">
          Health
          <div className="hamburger-links">
            <Link to="/BMI-calculator" className="hamburger-link">
              BMI Calculator
            </Link>
            <Link to="/BMR-calculator" className="hamburger-link">
              BMR Calculator
            </Link>
            <Link to="/kilojoules-to-calories" className="hamburger-link">
              Kilojoules to Calories
            </Link>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
