import React from "react";

const Ingredients = (props) => {
  return (
    <div className="cont-ingredients">
      <h4>Cooking ingredient:</h4>
      <div className="cont-ingredients-input">
        <button className="btn-ingredient">Flour</button>
        <button className="btn-ingredient">Sugar</button>
        <button className="btn-ingredient">Milks</button>
        <button className="btn-ingredient">Fats</button>
      </div>
    </div>
  );
};

export default Ingredients;
