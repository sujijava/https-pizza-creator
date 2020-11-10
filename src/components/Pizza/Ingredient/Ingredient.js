import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Ingredient.css";
import bacon from "../../../images/bacon.png";
import cheese from "../../../images/cheese.png";
import dough from "../../../images/dough.png";
import mushroom from "../../../images/mushroom.png";
import pepper from "../../../images/pepper.png";
import salami from "../../../images/salami.png";
import tomato from "../../../images/tomato.png";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import './Ingredient.css';

class Ingredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bacon":
        ingredient = bacon;
        break;
      case "cheese":
        ingredient = cheese;
        break;
      case "dough":
        ingredient = dough;
        break;
      case "mushroom":
        ingredient = mushroom;
        break;
      case "pepper":
        ingredient = pepper;
        break;
      case "salami":
        ingredient = salami;
        break;
      case "tomato":
        ingredient = tomato;
        break;
    }

    return (
        <div
        className="ingredientImage">
          <img src={ingredient} alt={ingredient} />
        </div>
    );
  }
}

Ingredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Ingredient;
