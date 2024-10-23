import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
const { cartItems } = useContext(CartContext);

    return(
        <div>
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? <p>Your cart is empty.</p> : (
                <ul>
                    { cartItems.map((item, index) => (
                        <li key={index}>
                            {item.name} - ${item.price}
                        </li>
                    )) }
                </ul>
            )}
            <button>Checkout</button>
        </div>
    );
};

export default Cart ;
  