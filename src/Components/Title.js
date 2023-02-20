import React from "react";
import { Link } from "react-router-dom";

const Title = (props) => {
  return (
    <Link to="/" className="title" tabIndex="-1">
      Money<span>Metrics </span>
    </Link>
  );
};

export default Title;
