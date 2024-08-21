import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../features/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  const handleQuantityChange = (item, event) => {
    dispatch(updateQuantity({ id: item.id, quantity: Number(event.target.value) }));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item, e)}
            />
            <button onClick={() => handleRemove(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
