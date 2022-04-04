import React from 'react';
import './Tshirt.css';

const Tshirt = ({ handleAddToCart, tshirt }) => {
    const { name, picture, price, gender } = tshirt;
    return (
        <div className="t-shirt">
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>price: ${price}</p>
            <p><small>Gender: {gender}</small></p>
            <button onClick={() => handleAddToCart(tshirt)}>Add to Cart</button>
        </div>
    );
};

export default Tshirt;