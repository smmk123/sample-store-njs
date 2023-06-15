import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ShoppingCart from '../app/shopping-cart/page';
import { CartContext } from '../app/context/CartProvider';
import '@testing-library/jest-dom';

test('ShoppingCart renders correctly', () => {
  // Create a mock context value with sample cart data
  const cart = [
    {
      id: 1,
      name: 'Item 1',
      price: 9.99,
      quantity: 2,
      inStock: 10,
    },
    {
      id: 2,
      name: 'Item 2',
      price: 14.99,
      quantity: 1,
      inStock: 5,
    },
  ];
  const setCart = jest.fn();
  const contextValue = { cart, setCart };

  // Render the ShoppingCart component with the mock context value
  const { getByText } = render(
    <CartContext.Provider value={contextValue}>
      <ShoppingCart />
    </CartContext.Provider>
  );

  // Assert that the shopping cart items are rendered correctly
  expect(getByText('Item 1')).toBeInTheDocument();
  expect(getByText('Item 2')).toBeInTheDocument();

  // Assert that the total price is calculated correctly
  expect(getByText('$34.97')).toBeInTheDocument();
});
