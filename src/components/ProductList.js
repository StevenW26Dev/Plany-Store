import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../features/cartSlice';
import { selectProducts } from '../features/productsSlice';

const ProductList = () => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
