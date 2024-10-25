import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <p>{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
