import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import Conversion from "./Conversion.js";
import ConversionAmount from "./ConversionAmount.js";
import { BtnConvert } from "./Buttons.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const CmToInchesMain = (props) => {
  const [state, setState] = useState({ hide: "hide" });

  const { updateUnits, value, handleChange, from, to, calculate, swapUnits } =
    props;

  useEffect(() => {
    updateUnits("centimeter", "foot");
  }, []);

  return (
    <main>
      <h2>CENTIMETERS / INCHES CONVERTER</h2>
      <div className="converter">
        <Conversion from={from} to={to} swapUnits={swapUnits} />
        <ConversionAmount
          value={value}
          handleChange={handleChange}
          type="number"
        />
        <BtnConvert
          value={value}
          from={from}
          to={to}
          calculate={() => {
            calculate();
            setState({ ...state, hide: "" });
          }}
        />
      </div>{" "}
      <div className="description">
        <p className="paragraph">
          Use this calculator to convert between centimeters and inches.
        </p>
        <div className={`modal ${state.hide}`}>
          {" "}
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

const CmToInches = (props) => {
  const { updateUnits, handleChange, from, to, calculate, swapUnits } = props;

  return (
    <div className="unit-conversion">
      <Navbar />{" "}
      <CmToInchesMain
        updateUnits={updateUnits}
        handleChange={handleChange}
        from={from}
        to={to}
        calculate={calculate}
        swapUnits={swapUnits}
      />
      <Footer />
    </div>
  );
};

export default CmToInches;
