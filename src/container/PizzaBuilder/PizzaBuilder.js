import React, { components, Component } from "react";

import Aux from "../../hoc/Auxiliary/Auxiliary";
import Pizza from "../../components/Pizza/Pizza";
import BuildControls from "../../components/Pizza/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Pizza/OrderSummary/OrderSummary";
import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
  bacon: 1.0,
  cheese: 0.5,
  mushroom: 1.0,
  pepper: 0.5,
  salami: 1.5,
  tomato: 1.0,
};

class PizzaBuilder extends Component {
  state = {
    ingredients: {
      bacon: 0,
      cheese: 0,
      mushroom: 0,
      pepper: 0,
      salami: 0,
      tomato: 0,
    },
    totalPrice: 3.0,
    ingredientPMButtonDisabled: false,
    orderBtnDisabled: false,
    showingModal: false,
  };

  purchasableChecker = () => {
    const ingredientQtyArray = Object.values(this.state.ingredients);
    let sum = ingredientQtyArray.reduce((tempSum, el) => tempSum + el, 0);

    if (sum === 0) {
      this.setState({ orderBtnDisabled: true });
    } else this.setState({ orderBtnDisabled: false });
  };

  ingredientPlusHandler = (ingredient) => {
    //update ingredient qty
    const prevQty = this.state.ingredients[ingredient];
    const UpdatedIngredients = this.state.ingredients;
    const updatedQty = prevQty + 1;
    UpdatedIngredients[ingredient] = updatedQty;
    this.setState({ ingredients: UpdatedIngredients });

    //update ingredient price
    const prevPrice = this.state.totalPrice;
    const updatePrice = prevPrice + INGREDIENT_PRICES[ingredient];
    this.setState({ totalPrice: updatePrice });

    //update purchase state
    this.purchasableChecker();
  };

  ingredientMinusHandler = (ingredient) => {
    const prevQty = this.state.ingredients[ingredient];

    if (prevQty >= 1) {
      //update ingredient qty
      const beUpdatedIngredients = this.state.ingredients;
      const updatedQty = prevQty - 1;
      beUpdatedIngredients[ingredient] = updatedQty;
      this.setState({ ingredients: beUpdatedIngredients });

      //update ingredient price
      const prevPrice = this.state.totalPrice;
      const updatePrice = prevPrice - INGREDIENT_PRICES[ingredient];
      this.setState({ totalPrice: updatePrice });

      //update purchase state
      this.purchasableChecker();
    } else this.setState({ disabled: true });
  };

  orderButtonHandler = () => {
    this.setState({ showingModal: true });
  };

  continueBtnHandler = () => {
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice
    }

    axios.post('/orders.json', order);

    this.setState({showingModal: false});
  }

  render() {
    let orderSummary = (
      <OrderSummary
        ingredients={this.state.ingredients}
        totalPrice={this.state.totalPrice}
        cancelBtnClicked={()=>this.setState({showingModal: false})}
        continueBtnClicked={this.continueBtnHandler}
      />
    );

    return (
      <Aux>
        <Modal
          show={this.state.showingModal}
        >
          {orderSummary}
        </Modal>

        <div className="container">
          <div className="row">
            <div className="col-8">
              <Pizza ingredients={this.state.ingredients}></Pizza>
            </div>

            <div className="BuildControls col-4">
              <BuildControls
                ingredientPlus={this.ingredientPlusHandler}
                ingredientMinus={this.ingredientMinusHandler}
                disabled={this.ingredientPMButtonDisabled}
                price={this.state.totalPrice}
                orderBtnDisabled={this.state.orderBtnDisabled}
                orderBtnOnClick={this.orderButtonHandler}
              ></BuildControls>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default PizzaBuilder;
