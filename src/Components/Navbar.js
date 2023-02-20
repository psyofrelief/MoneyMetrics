import React, { useState } from "react";
import Title from "./Title.js";
import FinanceDropDown from "./FinanceDropDown.js";
import FeaturedDropDown from "./FeaturedDropDown.js";
import HealthDropDown from "./HealthDropDown.js";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Hamburger from "./Hamburger.js";

const Navbar = (props) => {
  const [hidden, setHidden] = useState({
    finance: false,
    featured: false,
    health: false,
  });

  const handleHidden = (menu) => {
    if (hidden[menu]) {
      setHidden({ [menu]: false });
    } else {
      setHidden({ [menu]: true });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <Title />
      </div>
      <div className="navbar-bottom">
        <Hamburger />
        <div
          className="navbar-menu"
          onClick={() => handleHidden("finance")}
          onKeyDown={() => handleHidden("finance")}
          tabIndex="1"
        >
          Finance <FontAwesomeIcon icon={faCaretDown} />
          <FinanceDropDown hidden={hidden.finance} />{" "}
        </div>
        <div
          className="navbar-menu"
          onClick={() => handleHidden("featured")}
          onKeyDown={() => handleHidden("featured")}
          tabIndex="2"
        >
          Featured Units
          <FontAwesomeIcon icon={faCaretDown} />
          <FeaturedDropDown hidden={hidden.featured} />
        </div>
        <div
          className="navbar-menu"
          onClick={() => handleHidden("health")}
          onKeyDown={() => handleHidden("health")}
          tabIndex="3"
        >
          Health
          <FontAwesomeIcon icon={faCaretDown} />
          <HealthDropDown hidden={hidden.health} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
