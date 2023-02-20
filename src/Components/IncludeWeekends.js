import React from "react";

const IncludeWeekends = (props) => {
  const { handleChange, includeWeekends } = props;

  return (
    <div className="cont-include-weekends">
      <h4>Include Weekends?</h4>
      <div className="cont-btn-yes-no">
        <button
          value="yes"
          className="btn-yes"
          onClick={(e) => handleChange(e, "includeWeekends")}
        >
          Yes
        </button>
        <button
          className="btn-no"
          onClick={(e) => handleChange(e, "includeWeekends")}
          value="no"
        >
          No
        </button>
      </div>
    </div>
  );
};

export default IncludeWeekends;
