import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import HealthDropDown from "./HealthDropDown.js";
import CookingDropDown from "./CookingDropDown.js";
import FeaturedDropDown from "./FeaturedDropDown.js";
import FinanceDropDown from "./FinanceDropDown.js";

const Finance = (props) => {
  const [hidden, setHidden] = useState("hide");

  const handleHidden = () => {
    if (hidden !== "hide") {
      setHidden("hide");
    } else {
      setHidden("");
    }
  };

  return (
    <ul
      className="navbar-finance"
      onClick={() => {
        handleHidden();
      }}
    >
      Finance <FinanceDropDown hidden={hidden} handleHidden={handleHidden} />
      <FontAwesomeIcon icon={faCaretDown} />{" "}
    </ul>
  );
};

const FeaturedUnits = (props) => {
  const [hidden, setHidden] = useState("hide");

  const handleHidden = () => {
    if (hidden !== "hide") {
      setHidden("hide");
    } else {
      setHidden("");
    }
  };

  return (
    <li
      className="navbar-featuredUnits"
      onClick={() => {
        handleHidden();
      }}
    >
      Featured Units
      <FeaturedDropDown hidden={hidden} handleHidden={handleHidden} />{" "}
      <FontAwesomeIcon icon={faCaretDown} />
    </li>
  );
};

const Health = (props) => {
  const [hidden, setHidden] = useState("hide");

  const handleHidden = () => {
    if (hidden !== "hide") {
      setHidden("hide");
    } else {
      setHidden("");
    }
  };

  return (
    <li
      className="navbar-health"
      onClick={() => {
        handleHidden();
      }}
    >
      Health
      <HealthDropDown hidden={hidden} handleHidden={handleHidden} />
      <FontAwesomeIcon icon={faCaretDown} />
    </li>
  );
};

export { Finance, FeaturedUnits, Health };
