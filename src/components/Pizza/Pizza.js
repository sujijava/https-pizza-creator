import React, { Component } from "react";
import Ingredient from "./Ingredient/Ingredient";
import '../../App.css';

const Pizza = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <Ingredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
        
    //Bread-top and Bread-bottom are always shown 
    //Without user's control 
    <div className="IngredientContainer">
        <Ingredient type="dough" />
        {transformedIngredients}
    </div>
);

};

export default Pizza;
