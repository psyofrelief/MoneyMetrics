import React, { useState } from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import Currencies from "./Currencies.js";
import Amount from "./Amount.js";
import { BtnCalculate } from "./Buttons.js";
import Area from "./Area.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "../pricepersqrfoot.scss";

const PricePerSqrFtMain = (props) => {
  const [state, setState] = useState({
    currency: "$",
    price: "",
    area: "",
    areaUnit: "",
    hide: "hide",
  });

  const handleChange = (e, element) => {
    setState({ ...state, [element]: e.target.value });
  };

  const calculate = () => {
    let sqrFeet = +state.area;

    if (state.areaUnit === "Sqr yards") {
      sqrFeet = +state.area * 9;
    }

    if (state.areaUnit === "Sqr meters") {
      sqrFeet = +state.area * 10.763910417;
    }

    return +state.price / +sqrFeet;
  };

  return (
    <main>
      <h2>PRICE PER SQUARE FOOT CALCULATOR</h2>
      <div className="converter">
        <Currencies handleChange={handleChange} />{" "}
        <Amount
          name="Purchase Price"
          type="number"
          handleChange={handleChange}
          currency={state.currency}
          item="price"
        />
        <Area handleChange={handleChange} area={state.area} />
        <BtnCalculate
          calculate={() => {
            calculate();
            setState({ ...state, hide: "" });
          }}
        />
      </div>
      <div className="description">
        <p className="paragraph">
          Calculate the cost per square foot of floor space for property
          purchases, leases, and rentals using this price per square foot
          calculator.
        </p>
        <div className={`modal ${state.hide}`}>
          <FontAwesomeIcon
            icon={faXmark}
            className="close"
            onClick={() => setState({ ...state, hide: "hide" })}
          />{" "}
          {`Price per square foot ${state.currency}${calculate()}`}
        </div>{" "}
      </div>{" "}
    </main>
  );
};

const PricePerSqrFt = (props) => {
  return (
    <div className="pricepersqrfoot-conversion">
      <Navbar /> <PricePerSqrFtMain /> <Footer />
    </div>
  );
};

export default PricePerSqrFt;
