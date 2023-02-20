import React, { useState } from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import { BtnCalculate } from "./Buttons.js";
import Height from "./Height.js";
import Weight from "./Weight.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "../bmi.scss";

const BMIMain = (props) => {
  const [state, setState] = useState({
    height: "",
    secondaryHeight: "",
    weight: "",
    heightUnit: "feet",
    weightUnit: "pounds",
    result: "",
    hide: "hide",
  });

  const calculate = () => {
    let heightMetric = (+state.height * 12 + +state.secondaryHeight) * 0.025;
    let weightMetric = +state.weight * 0.4535924;

    if (state.heightUnit === "centimeters") {
      heightMetric = +state.height / 100;
    }
    if (state.weightUnit === "kilograms") {
      weightMetric = +state.weight;
    }
    let bmi = weightMetric / heightMetric ** 2;

    setState({ ...state, hide: "", result: bmi.toFixed(0) });
  };

  const handleChange = (e, element) => {
    setState({ ...state, [element]: e.target.value });
  };

  return (
    <main>
      <h2>BMI CALCULATOR</h2>
      <div className="converter">
        {" "}
        <Height
          handleChange={handleChange}
          height={state.height}
          secondaryHeight={state.secondaryHeight}
          weight={state.weight}
          heightUnit={state.heightUnit}
        />
        <Weight handleChange={handleChange} weight={state.weight} />
        <BtnCalculate calculate={() => calculate()} />{" "}
      </div>
      <div className="description">
        {" "}
        <p className="paragraph">
          Determine if your weight is impacting your health by using this BMI
          calculator, which can be used in both metric and imperial units. This
          tool is intended for individuals 18 years and older, both men and
          women.
        </p>
        <div className={`modal ${state.hide}`}>
          {`${state.result}`}
          <FontAwesomeIcon
            icon={faXmark}
            className="close"
            onClick={() =>
              setState({ ...state, hide: "hide", result: state.result })
            }
          />{" "}
        </div>{" "}
      </div>
    </main>
  );
};

const BMI = (props) => {
  return (
    <div className="bmi-conversion">
      <Navbar /> <BMIMain />
      <Footer />
    </div>
  );
};

export default BMI;
