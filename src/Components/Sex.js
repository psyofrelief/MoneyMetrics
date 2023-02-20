import React, { useEffect, useState } from "react";

const Sex = (props) => {
  const { handleChange } = props;

  const [focused, setFocused] = useState({
    male: true,
    female: false,
  });

  const handleFocus = (button) => {
    setFocused({ [button]: true });
  };

  useEffect(() => {
    handleFocus("male");
  }, []);

  return (
    <div className="cont-sex">
      <button
        className={`btn-sex ${focused.male === true ? "highlight" : ""}`}
        value="male"
        onClick={(e) => handleChange(e, "sex")}
        onFocus={() => handleFocus("male")}
      >
        Male
      </button>
      <button
        className={`btn-sex ${focused.female === true ? "highlight" : ""}`}
        value="female"
        onClick={(e) => handleChange(e, "sex")}
        onFocus={() => handleFocus("female")}
      >
        Female
      </button>
    </div>
  );
};
export default Sex;
