// Cart.js
import React from 'react';

function Cart({ cart }) {
    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            <ul>
                {/* {cart.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price}
                    </li>
                ))} */}
            </ul>
        </div>
    );
};

export default Cart;
