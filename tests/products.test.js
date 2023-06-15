import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Products from '../app/products/page';
import axios from 'axios';
import '@testing-library/jest-dom';

jest.mock('axios');

test('Products component fetches and renders data correctly', async () => {
  const sampleData = [
    {
      id: 1,
      name: 'Product 1',
      price: 9.99,
      description: 'Product 1 description',
      stock: 5,
      pictureURL: '/path/to/image1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 14.99,
      description: 'Product 2 description',
      stock: 10,
      pictureURL: '/path/to/image2.jpg',
    },
  ];
  axios.post.mockResolvedValue({ data: { results: sampleData } });

  const { getByText, queryByText } = render(<Products />);

  expect(getByText('loading...')).toBeInTheDocument();

  await waitFor(() => expect(queryByText('loading...')).toBeNull());

  expect(getByText('Product 1')).toBeInTheDocument();
  expect(getByText('Product 2')).toBeInTheDocument();
});
