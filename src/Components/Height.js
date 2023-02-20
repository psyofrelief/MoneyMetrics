import React, { useEffect, useState } from "react";

const Height = (props) => {
  const [focused, setFocused] = useState({
    heightPrimary: true,
    heightSecondary: false,
  });

  const { handleChange, height, secondaryHeight, heightUnit } = props;

  const handleFocus = (button) => {
    setFocused({ [button]: true });
  };

  useEffect(() => {
    handleFocus("heightPrimary");
  }, []);

  return (
    <div className="cont-height">
      <label className="cont-height amount" htmlFor="inp-height-primary">
        Height:
        <input
          name="Primary Height"
          type="number"
          min="0"
          value={height}
          onChange={(e) => handleChange(e, "height")}
          id="inp-height-primary"
        />
        {heightUnit === "feet" ? (
          <input
            name="Seconday Height"
            type="number"
            min="0"
            maxLength={4}
            value={secondaryHeight}
            onChange={(e) => handleChange(e, "secondaryHeight")}
            id="inp-height-secondary"
            placeholder="inch"
          />
        ) : (
          ""
        )}
      </label>{" "}
      <div className="cont-height-metric-imperial">
        <button
          className={`btn-height-imperial-metric ${
            focused.heightPrimary === true ? "highlight" : ""
          }`}
          value="feet"
          onClick={(e) => handleChange(e, "heightUnit")}
          onFocus={() => handleFocus("heightPrimary")}
        >
          feet
        </button>
        <button
          className={`btn-height-imperial-metric  ${
            focused.heightSecondary === true ? "highlight" : ""
          }
`}
          value="centimeters"
          onClick={(e) => handleChange(e, "heightUnit")}
          onFocus={() => {
            handleFocus("heightSecondary");
          }}
        >
          centimeters
        </button>
      </div>
    </div>
  );
};

export default Height;
