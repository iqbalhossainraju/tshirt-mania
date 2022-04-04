import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    //Conditional rendering options
    // 1. Element Variable
    // 2. ternary operator: condition ? true : false; 
    // 3. && operator/ short hand operator
    // 4. || operator/ orr operator
    let command;
    if (cart.length === 0) {
        command = <p>Please select al least one item</p>
    }
    else if (cart.length === 1) {
        command = <p>Selected more  items..</p>
    }
    else {
        command = <p>Thanks For adding items</p>
    }
    return (
        <div>
            <h3>Item selected: {cart.length}</h3>
            {
                cart.map(tshirt => <p>
                    {tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt)} >X</button>
                </p>)
            }
            {cart.length === 0 || <p className="orange">yay! you're buying!</p>}
            {cart.length === 3 && <div className="orange">
                <h3>Trigonal</h3>
                <p>Gift me!!</p>
            </div>}
            {command}
            {cart.length < 4 ? <p>keep adding items</p> : <button>Remove All</button>}
        </div>
    );
};

export default Cart;