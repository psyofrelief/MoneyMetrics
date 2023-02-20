import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home.js";
import Loan from "./Components/Loan.js";
import PricePerSqrFt from "./Components/PricePerSqrFt.js";
import CmToFeet from "./Components/CmToFeet.js";
import FeetToInches from "./Components/FeetToInches.js";
import MmToInches from "./Components/MmToInches.js";
import CmToInches from "./Components/CmToInches.js";
import FeetToMeters from "./Components/FeetToMeters.js";
import GramsToPounds from "./Components/GramsToPounds.js";
import KilosToPounds from "./Components/KilosToPounds.js";
import MicrogramsToGrams from "./Components/MicrogramsToGrams.js";
import OuncesToPounds from "./Components/OuncesToPounds.js";
import KilosToStone from "./Components/KilosToStone.js";
import MicrogramsToMg from "./Components/MicrogramsToMg.js";
import MilligramsToGrams from "./Components/MilligramsToGrams.js";
import BMI from "./Components/BMI.js";
import BMR from "./Components/BMR.js";
import KilojoulesToCalories from "./Components/KilojoulesToCalories.js";
import units from "./UnitsList.js";
import CurrencyConverter from "./Components/CurrencyConverter.js";

function App() {
  const [state, setState] = useState({
    from: { name: "milligram", unit: units.milligram, value: "" },
    to: { name: "gram", unit: units.gram },
  });

  const updateUnits = (from, to) => {
    setState({
      ...state,
      from: { name: from, unit: units[from], value: "" },
      to: { name: to, unit: units[to] },
    });
  };

  const handleChange = (e) => {
    setState({
      ...state,
      from: {
        value: +e.target.value,
        name: state.from.name,
        unit: state.from.unit,
      },
    });
  };

  const calculate = () => {
    return (
      (Number(state.from.value) * Number(state.from.unit)) /
      Number(state.to.unit)
    ).toFixed(2);
  };

  const swapUnits = () => {
    let tempUnit = state.from;
    setState({
      ...state,
      from: {
        value: state.from.value,
        name: state.to.name,
        unit: state.to.unit,
      },
      to: {
        name: tempUnit.name,
        unit: tempUnit.unit,
      },
    });
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/currency-converter"
        element={<CurrencyConverter handleChange={handleChange} />}
      />
      <Route path="/loan-calculator" element={<Loan />} />
      <Route path="/price-per-sqr-foot" element={<PricePerSqrFt />} />
      <Route
        path="/cm-to-feet"
        element={
          <CmToFeet
            handleChange={handleChange}
            value={state.from.value}
            calculate={calculate}
            from={state.from.name}
            to={state.to.name}
            swapUnits={swapUnits}
            updateUnits={updateUnits}
          />
        }
      />
      <Route
        path="/feet-to-inches"
        element={
          <FeetToInches
            handleChange={handleChange}
            value={state.from.value}
            calculate={calculate}
            from={state.from.name}
            to={state.to.name}
            swapUnits={swapUnits}
            updateUnits={updateUnits}
          />
        }
      />
      <Route
        path="/mm-to-inches"
        element={
          <MmToInches
            handleChange={handleChange}
            value={state.from.value}
            calculate={calculate}
            from={state.from.name}
            to={state.to.name}
            swapUnits={swapUnits}
            updateUnits={updateUnits}
          />
        }
      />
      <Route
        path="/cm-to-inches"
        element={
          <CmToInches
            handleChange={handleChange}
            value={state.from.value}
            calculate={calculate}
            from={state.from.name}
            to={state.to.name}
            swapUnits={swapUnits}
            updateUnits={updateUnits}
          />
        }
      />
      <Route
        path="/feet-to-meters"
        element={
          <FeetToMeters
            handleChange={handleChange}
            value={state.from.value}
            calculate={calculate}
            from={state.from.name}
            to={state.to.name}
            swapUnits={swapUnits}
            updateUnits={updateUnits}
          />
        }
      />
      <Route
        path="/grams-to-pounds"
        element={
          <GramsToPounds
            handleChange={handleChange}
            value={state.from.value}
            calculate={calculate}
            from={state.from.name}
            to={state.to.name}
            swapUnits={swapUnits}
            updateUnits={updateUnits}
          />
        }
      />
      <Route
        path="/kilos-to-pounds"
        element={
          <KilosToPounds
            handleChange={handleChange}
            value={state.from.value}
            calculate={calculate}
            from={state.from.name}
            to={state.to.name}
            swapUnits={swapUnits}
            updateUnits={updateUnits}
          />
        }
      />
      <Route
        path="/micrograms-to-grams"
        element={
          <MicrogramsToGrams
            handleChange={handleChange}
            value={state.from.value}
            calculate={calculate}
            from={state.from.name}
            to={state.to.name}
            swapUnits={swapUnits}
            updateUnits={updateUnits}
          />
        }
      />
      <Route
        path="/ounces-to-pounds"
        element={
          <OuncesToPounds
            handleChange={handleChange}
            value={state.from.value}
            calculate={calculate}
            from={state.from.name}
            to={state.to.name}
            swapUnits={swapUnits}
            updateUnits={updateUnits}
          />
        }
      />
      <Route
        path="/kilos-to-stone"
        element={
          <KilosToStone
            handleChange={handleChange}
            value={state.from.value}
            calculate={calculate}
            from={state.from.name}
            to={state.to.name}
            swapUnits={swapUnits}
            updateUnits={updateUnits}
          />
        }
      />
      <Route
        path="/micrograms-to-mg"
        element={
          <MicrogramsToMg
            handleChange={handleChange}
            value={state.from.value}
            calculate={calculate}
            from={state.from.name}
            to={state.to.name}
            swapUnits={swapUnits}
            updateUnits={updateUnits}
          />
        }
      />
      <Route
        path="/milligrams-to-grams"
        element={
          <MilligramsToGrams
            handleChange={handleChange}
            value={state.from.value}
            calculate={calculate}
            from={state.from.name}
            to={state.to.name}
            swapUnits={swapUnits}
            updateUnits={updateUnits}
          />
        }
      />
      <Route path="/bmi-calculator" element={<BMI />} />
      <Route path="/bmr-calculator" element={<BMR />} />
      <Route
        path="/kilojoules-to-calories"
        element={
          <KilojoulesToCalories
            handleChange={handleChange}
            value={state.from.value}
            calculate={calculate}
            from={state.from.name}
            to={state.to.name}
            swapUnits={swapUnits}
            updateUnits={updateUnits}
          />
        }
      />
    </Routes>
  );
}

export default App;
