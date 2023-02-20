import React, { useState } from "react";

const Currencies = (props) => {
  const { handleChange } = props;

  const [focused, setFocused] = useState({
    dollar: true,
    euro: false,
    pound: false,
    yen: false,
    blank: false,
  });

  const handleFocus = (button) => {
    setFocused({ [button]: true });
  };

  return (
    <div className="cont-currency">
      <h3>Currency</h3>
      <div className="cont-currency-btns">
        <button
          className={`currency ${focused.dollar === true ? "highlight" : ""}`}
          onClick={(e) => handleChange(e, "currency")}
          value="$"
          onFocus={() => {
            handleFocus("dollar");
          }}
        >
          $
        </button>
        <button
          className={`currency ${focused.euro === true ? "highlight" : ""}`}
          onClick={(e) => handleChange(e, "currency")}
          value="€"
          onFocus={() => {
            handleFocus("euro");
          }}
        >
          €
        </button>
        <button
          className={`currency ${focused.pound === true ? "highlight" : ""}`}
          onClick={(e) => handleChange(e, "currency")}
          value="£"
          onFocus={() => {
            handleFocus("pound");
          }}
        >
          £
        </button>
        <button
          className={`currency ${focused.yen === true ? "highlight" : ""}`}
          onClick={(e) => handleChange(e, "currency")}
          value="¥"
          onFocus={() => {
            handleFocus("yen");
          }}
        >
          ¥
        </button>
        <button
          className={`currency ${focused.blank === true ? "highlight" : ""}`}
          onClick={(e) => handleChange(e, "currency")}
          value=""
          onFocus={() => {
            handleFocus("blank");
          }}
        >
          .
        </button>
      </div>{" "}
    </div>
  );
};

export default Currencies;
