import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import Conversion from "./Conversion.js";
import ConversionAmount from "./ConversionAmount.js";
import { BtnConvert } from "./Buttons.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const MilligramsToGramsMain = (props) => {
  const [state, setState] = useState({ hide: "hide" });

  const { updateUnits, value, handleChange, from, to, calculate, swapUnits } =
    props;

  useEffect(() => {
    updateUnits("milligram", "gram");
  }, []);

  return (
    <main>
      <h2>MILLIGRAMS TO GRAMS CONVERTER</h2>
      <div className="converter">
        <Conversion from={from} to={to} swapUnits={swapUnits} />
        <ConversionAmount
          value={value}
          handleChange={handleChange}
          type="number"
        />
        <BtnConvert
          value={value}
          calculate={() => {
            calculate();
            setState({ ...state, hide: "" });
          }}
        />
      </div>
      <div className="description">
        <p className="paragraph">
          Use this calculator to convert between milligrams and grams.
        </p>
        <div className={`modal ${state.hide}`}>
          <FontAwesomeIcon
            icon={faXmark}
            className="close"
            onClick={() => setState({ ...state, hide: "hide" })}
          />
          {`${calculate()}`}
        </div>{" "}
      </div>{" "}
    </main>
  );
};

const MilligramsToGrams = (props) => {
  const { from, to, handleChange, calculate, swapUnits, updateUnits } = props;
  return (
    <div className="unit-conversion">
      <Navbar />{" "}
      <MilligramsToGramsMain
        from={from}
        to={to}
        handleChange={handleChange}
        calculate={calculate}
        swapUnits={swapUnits}
        updateUnits={updateUnits}
      />
      <Footer />
    </div>
  );
};

export default MilligramsToGrams;
