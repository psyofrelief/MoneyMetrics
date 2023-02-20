import React, { useState } from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import { BtnCalculate } from "./Buttons.js";
import Height from "./Height.js";
import Weight from "./Weight.js";
import Age from "./Age.js";
import Sex from "./Sex.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "../bmr.scss";

const BMRMain = () => {
  const [state, setState] = useState({
    sex: "male",
    age: "",
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
    let weightMetric = state.weight * 0.4535924;
    let answer;

    if (state.heightUnit === "centimeters") {
      heightMetric = state.height;
    }
    if (state.weightUnit === "kilograms") {
      weightMetric = state.weight;
    }

    if (state.sex === "male") {
      answer =
        88.362 +
        13.397 * +weightMetric +
        4.799 * +heightMetric -
        5.677 * +state.age;
    }

    if (state.sex === "female") {
      answer =
        447.593 +
        9.247 * +weightMetric +
        4.799 * +heightMetric -
        4.33 * +state.age;
    }

    setState({ ...state, hide: "", result: answer.toFixed(0) });
  };

  const handleChange = (e, element) => {
    setState({ ...state, [element]: e.target.value });
  };

  return (
    <main>
      <h2>BMR Calculator</h2>
      <div className="converter">
        {" "}
        <Sex handleChange={handleChange} />
        <Age age={state.age} handleChange={handleChange} />
        <Height
          handleChange={handleChange}
          height={state.height}
          secondaryHeight={state.secondaryHeight}
          weight={state.weight}
          heightUnit={state.heightUnit}
        />
        <Weight handleChange={handleChange} weight={state.weight} />
        <BtnCalculate calculate={calculate} />{" "}
      </div>
      <div className="description">
        {" "}
        <p className="paragraph">
          Use this calculator to determine both your Basal Metabolic Rate (BMR),
          which is the minimum energy needed for your body to function, and your
          daily calorie needs. Keep in mind that calories are a measure of
          energy.
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
        </div>
      </div>
    </main>
  );
};

const BMR = () => {
  return (
    <div className="bmr-conversion">
      <Navbar /> <BMRMain />
      <Footer />
    </div>
  );
};

export default BMR;
