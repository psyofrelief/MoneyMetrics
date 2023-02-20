import React from "react";

const Area = (props) => {
  const { area, handleChange } = props;

  return (
    <label className="cont-area">
      Area measurement:{" "}
      <input
        id="inp-area"
        name="Area Measurement"
        min="0"
        type="number"
        value={area}
        onChange={(e) => handleChange(e, "area")}
      />{" "}
      <select
        id="area-measurement"
        name="Area Unit"
        onChange={(e) => handleChange(e, "areaUnit")}
      >
        <option value="Sqr feet">Sqr feet (ft2)</option>
        <option value="Sqr yards">Sqr yards (yd2)</option>
        <option value="Sqr meters">Sqr meters (m2)</option>
      </select>
    </label>
  );
};

export default Area;
