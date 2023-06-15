import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CartButton from '../app/components/CartButton';
import "@testing-library/jest-dom";

test('CartButton decreases quantity when clicked on "-"', () => {
  const onUpdateQuantity = jest.fn();
  const { getByText } = render(
    <CartButton itemId={1} quantity={3} onUpdateQuantity={onUpdateQuantity} stock={5} />
  );

  const decreaseButton = getByText('-');
  fireEvent.click(decreaseButton);

  expect(onUpdateQuantity).toHaveBeenCalledTimes(1);
  expect(onUpdateQuantity).toHaveBeenCalledWith(2);
});

test('CartButton does not decrease quantity below 1', () => {
  const onUpdateQuantity = jest.fn();
  const { getByText } = render(
    <CartButton itemId={1} quantity={1} onUpdateQuantity={onUpdateQuantity} stock={5} />
  );

  const decreaseButton = getByText('-');
  fireEvent.click(decreaseButton);

  expect(onUpdateQuantity).toHaveBeenCalledTimes(1);
  expect(onUpdateQuantity).toHaveBeenCalledWith(0);
});

test('CartButton increases quantity when clicked on "+"', () => {
  const onUpdateQuantity = jest.fn();
  const { getByText } = render(
    <CartButton itemId={1} quantity={2} onUpdateQuantity={onUpdateQuantity} stock={5} />
  );

  const increaseButton = getByText('+');
  fireEvent.click(increaseButton);

  expect(onUpdateQuantity).toHaveBeenCalledTimes(1);
  expect(onUpdateQuantity).toHaveBeenCalledWith(3);
});

test('CartButton does not increase quantity above stock', () => {
  const onUpdateQuantity = jest.fn();
  const { getByText } = render(
    <CartButton itemId={1} quantity={5} onUpdateQuantity={onUpdateQuantity} stock={5} />
  );

  const increaseButton = getByText('+');
  fireEvent.click(increaseButton);

  expect(onUpdateQuantity).toHaveBeenCalledTimes(0);
});
