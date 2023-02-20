import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";

const Conversion = (props) => {
  const { from, to, swapUnits } = props;
  return (
    <div className="cont-conversion-unit">
      <h3>Convert From</h3>
      <div className="cont-unit-input">
        <button className="btn-input" tabIndex="-1">
          {from}
        </button>
        <FontAwesomeIcon
          icon={faRightLeft}
          onClick={() => swapUnits()}
          onKeyPress={() => swapUnits()}
          tabIndex="7"
        />
        <button className="btn-input" tabIndex="-1">
          {to}
        </button>
      </div>
    </div>
  );
};

export default Conversion;
