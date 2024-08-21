import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Plant Store</h1>
        <ProductList />
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
