import React, { useState } from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import Currencies from "./Currencies.js";
import Amount from "./Amount.js";
import InterestRate from "./InterestRate.js";
import Duration from "./Duration.js";
import { BtnCalculate } from "./Buttons.js";
import units from "../UnitsList.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "../loan.scss";

const LoanMain = (props) => {
  const [state, setState] = useState({
    price: "0",
    interest: "0",
    years: "0",
    months: "0",
    days: "0",
    currency: "$",
    initial: 0,
    hide: "hide",
  });

  const handleChange = (e, element) => {
    setState({ ...state, [element]: e.target.value });
  };

  const calculate = () => {
    const { price, interest, years, months, days } = state;

    const totalDuration =
      +years * units.year + +months * units.month + +days * units.day;

    const interestDecimal = +interest / 100;
    const monthlyPayment = (price / (totalDuration / units.month)).toFixed(2);
    const yearlyPayment = (price / (totalDuration / units.year)).toFixed(2);
    const totalToBeRepaid = (
      (price / (totalDuration / units.year)) *
      (1 + interestDecimal)
    ).toFixed(2);
    const totalInterestPaid = (totalToBeRepaid - yearlyPayment).toFixed(2);

    return {
      monthlyPayment,
      yearlyPayment,
      totalToBeRepaid,
      totalInterestPaid,
    };
  };

  return (
    <main>
      <h2>LOAN CALCULATOR</h2>
      <div className="converter">
        {" "}
        <Currencies handleChange={handleChange} />
        <Amount
          name="Loan Amount"
          type="number"
          handleChange={handleChange}
          currency={state.currency}
          item="price"
        />
        <InterestRate
          name="Annual interest rate:"
          interest={state.interest}
          handleChange={handleChange}
        />
        <Duration
          handleChange={handleChange}
          years={state.years}
          months={state.months}
          days={state.days}
        />
        <Amount
          name="Initial Deposit?"
          type="number"
          handleChange={handleChange}
          currency={state.currency}
          item="initial"
        />
        <BtnCalculate
          calculate={() => {
            calculate();
            setState({ ...state, hide: "" });
          }}
        />
      </div>
      <div className={`modal ${state.hide}`}>
        <FontAwesomeIcon
          icon={faXmark}
          className="close"
          onClick={() => setState({ ...state, hide: "hide" })}
        />{" "}
        {`Monthly Payment: ${state.currency}${calculate().monthlyPayment}`}
        <br />
        {`Yearly Payment: ${state.currency}${calculate().yearlyPayment}`}
        <br />
        {`Total to be repaid: ${state.currency}${calculate().totalToBeRepaid}`}
        <br />
        {`Total interest paid: ${state.currency}${
          calculate().totalInterestPaid
        }`}
      </div>
      <div className="description">
        <p className="paragraph">
          Calculate your monthly repayments and interest for personal loans,
          student loans, or any other type of credit using this loan repayment
          calculator.
        </p>
      </div>
    </main>
  );
};

const Loan = () => {
  return (
    <div className="loan-conversion">
      <Navbar /> <LoanMain />
      <Footer />
    </div>
  );
};

export default Loan;
