import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from './contexts/user.contexts'
import { ProductsProvider } from './contexts/categories.context'
import { CartProvider } from './contexts/cart.context';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <UserProvider>
              <ProductsProvider>
                  <CartProvider>
                      <App />
                  </CartProvider>
              </ProductsProvider>
          </UserProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
