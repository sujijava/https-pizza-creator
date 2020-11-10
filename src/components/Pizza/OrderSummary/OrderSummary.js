import React, {Component} from 'react'; 
import Aux from '../../../hoc/Auxiliary/Auxiliary';

class OrderSummary extends Component {
    
    render(){

        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(key => {
            return (
              <li>
                {key} : {this.props.ingredients[key]}
                </li>
            )
        })

        return(

            <Aux>
            <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
            <ul>
            {ingredientSummary}
            </ul>
            <p>Total Price: {this.props.totalPrice}</p>
            <button onClick={this.props.cancelBtnClicked}>
            Cancel               
            </button>
            <button onClick={this.props.continueBtnClicked}>
            Continue               
            </button>
            </Aux>
        )
    }
}

export default OrderSummary;