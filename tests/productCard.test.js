import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CartContext } from '../app/context/CartProvider';
import ProductCard from '../app/components/ProductCard';
import '@testing-library/jest-dom';

test('ProductCard renders correctly and adds item to cart', () => {
  const cart = [];
  const setCart = jest.fn();
  const contextValue = { cart, setCart };

  const { getByText } = render(
    <CartContext.Provider value={contextValue}>
      <ProductCard
        pictureUrl="/path/to/image.jpg"
        name="Product Name"
        price={9.99}
        description="Product description"
        inStock={5}
        id={1}
      />
    </CartContext.Provider>
  );

  expect(getByText('Product Name')).toBeInTheDocument();
  expect(getByText('$9.99')).toBeInTheDocument();
  expect(getByText('Product description')).toBeInTheDocument();
  expect(getByText('In Stock: 5')).toBeInTheDocument();

  const addToCartButton = getByText('Add to Cart');
  fireEvent.click(addToCartButton);
});
