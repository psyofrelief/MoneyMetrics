import React from "react";

const Age = (props) => {
  const { handleChange, age } = props;

  return (
    <label className="cont-age">
      Age:
      <input
        id="inp-age"
        name="Age"
        type="number"
        value={age}
        onChange={(e) => handleChange(e, "age")}
      />
    </label>
  );
};

export default Age;
