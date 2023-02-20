import React from "react";

const BtnCalculate = (props) => {
  const { calculate } = props;
  return (
    <button className="btn-calculate" onClick={calculate}>
      Calculate
    </button>
  );
};

const BtnConvert = (props) => {
  const { calculate } = props;
  return (
    <button className="btn-convert" onClick={() => calculate()}>
      Convert
    </button>
  );
};

export { BtnCalculate, BtnConvert };
