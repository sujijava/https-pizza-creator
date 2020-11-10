import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import '../../../App.css';

const Ingredients = [
  { type: "bacon" },
  { type: "cheese" },
  { type: "mushroom" },
  { type: "pepper" },
  { type: "salami" },
  { type: "tomato" },
];

const buildControls = (props) => (
  // div-name:buildControls
  // make 7 build control component
  // using const-Ingredients
  // why? curly bracket?
  <div>
    <p>Current Price: {props.price}</p>
    {Ingredients.map((ingredient) => (
      <BuildControl
        label={ingredient.type}
        plus={() => props.ingredientPlus(ingredient.type)}
        minus={() => props.ingredientMinus(ingredient.type)}
      ></BuildControl>
    ))}
    <button className="btn orderBtn"
    disabled={props.orderBtnDisabled}
    onClick={props.orderBtnOnClick}>ORDER</button>
  </div>
);

export default buildControls;
