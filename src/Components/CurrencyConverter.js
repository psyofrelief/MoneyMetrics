import React, { useState } from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import ConversionMoney from "./ConversionMoney.js";
import { BtnConvert } from "./Buttons.js";
import Round from "./Round.js";
import Amount from "./Amount.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import fetch from "isomorphic-fetch";

const CurrencyConverterMain = (props) => {
  const handleChange = (e, name) => {
    if (name !== "to" && name !== "from") {
      setState({ ...state, [name]: e.target.value });
    }
    setState({
      ...state,
      [name]: e.target.value.toUpperCase(),
    });
  };

  const [state, setState] = useState({
    from: "AUD",
    to: "USD",
    decimal: "1",
    amount: "1",
    result: "",
    hide: "hide",
  });

  const swapUnits = () => {
    let tempUnit = state.from;
    setState({
      ...state,
      from: state.to,
      to: tempUnit,
    });
  };

  async function convert(from, to) {
    await fetch(
      `https://v6.exchangerate-api.com/v6/7a82ff70b4dc130ffa487627/latest/${from}`
    )
      .then((response) => response.json())
      .then((data) => {
        let newResult = data.conversion_rates[to].toFixed(+state.decimal);

        setState({ ...state, result: newResult, hide: "" });
        return newResult;
      });
  }

  return (
    <main>
      <h2>CURRENCY CONVERTER</h2>
      <div className="converter-currency">
        <div className="top">
          <h3>Convert From</h3>
          <ConversionMoney
            from={state.from}
            to={state.to}
            handleChange={handleChange}
            swapUnits={swapUnits}
          />
          <Amount
            name="Amount"
            type="number"
            handleChange={handleChange}
            item="amount"
          />
        </div>
        <BtnConvert
          from={state.from}
          to={state.to}
          calculate={() => {
            convert(state.from, state.to);
          }}
        />
      </div>
      <div className="description">
        <p className="paragraph">
          A tool to convert the value of one currency to another currency. It
          can be useful for determining the exchange rate between different
          currencies.
        </p>
        <div className={`modal ${state.hide}`}>
          <FontAwesomeIcon
            icon={faXmark}
            className="close"
            onClick={() => setState({ ...state, hide: "hide" })}
          />
          {`${state.result}`}
        </div>{" "}
      </div>{" "}
    </main>
  );
};

const CurrencyConverter = (props) => {
  const { handleChange, swapUnits } = props;

  return (
    <div className="unit-conversion">
      <Navbar />{" "}
      <CurrencyConverterMain
        handleChange={handleChange}
        swapUnits={swapUnits}
      />{" "}
      <Footer />
    </div>
  );
};

export default CurrencyConverter;
