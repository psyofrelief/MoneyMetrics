import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLandmark,
  faCoins,
  faRuler,
  faWeightScale,
  faDumbbell,
  faBowlFood,
} from "@fortawesome/free-solid-svg-icons";

const FinancialSection = () => {
  return (
    <div className="main-financial">
      <h2 className="main-heading">Financial Calculators</h2>
      <p className="main-subsection">
        A collection of financial calculators to assist with calculations for
        small business, loans, investments and savings estimates.
      </p>
      <div className="main-featured-box">
        <Link to="/loan-calculator">
          {" "}
          <FontAwesomeIcon icon={faLandmark} />
          <div className="cont-box-text">
            <h3 className="box-text-heading">Loan Calculator </h3>
            <p className="box-text-summary">
              Calculate personal loan, student loan, or mortgage repayment
              costs.
            </p>
          </div>
        </Link>
      </div>
      <div className="main-featured-box">
        <Link to="/currency-converter">
          {" "}
          <FontAwesomeIcon icon={faCoins} />
          <div className="cont-box-text">
            <h3 className="box-text-heading">Currency Converter</h3>
            <p className="box-text-summary">
              A tool that allows conversion from one currency to the other.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};
const FeaturedSection = (props) => {
  return (
    <div className="main-featured">
      <h2 className="main-heading">Featured Conversions</h2>
      <p className="main-subsection">
        A number of separate converters for the most common weight, length,
        height, area, and energy units.{" "}
      </p>
      <div className="main-featured-box">
        <Link to="/cm-to-feet">
          <FontAwesomeIcon icon={faRuler} />
          <div className="cont-box-text">
            <h3 className="box-text-heading">Centimeters to Feet & Inches </h3>
            <p className="box-text-summary">
              Calculator for converting units of height, length or distance.
            </p>
          </div>
        </Link>
      </div>
      <div className="main-featured-box">
        <Link to="/kilos-to-pounds">
          {" "}
          <FontAwesomeIcon icon={faWeightScale} />
          <div className="cont-box-text">
            <h3 className="box-text-heading">Kilos to Pounds </h3>
            <p className="box-text-summary">
              Convert between the imperial and metric weight units that are most
              widely used.{" "}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};
const HealthSection = (props) => {
  return (
    <div className="main-health">
      <h2 className="main-heading">Health</h2>
      <p className="main-subsection">
        A small collection of health calculators.{" "}
      </p>
      <div className="main-featured-box">
        <Link to="/bmi-calculator">
          <FontAwesomeIcon icon={faDumbbell} />
          <div className="cont-box-text">
            <h3 className="box-text-heading">BMI Calculator</h3>
            <p className="box-text-summary">
              Calculate your Body Mass Index based on your weight and height.{" "}
            </p>
          </div>
        </Link>
      </div>
      <div className="main-featured-box">
        <Link to="/kilojoules-to-calories">
          <FontAwesomeIcon icon={faBowlFood} />
          <div className="cont-box-text">
            <h3 className="box-text-heading">Kilojoules to Calories</h3>
            <p className="box-text-summary">
              Convert Kilojoules to Calories and vice-versa using this
              converter.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};
export { FinancialSection, FeaturedSection, HealthSection };
