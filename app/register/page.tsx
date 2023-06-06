'use client';
import React from 'react';
import axios from 'axios';
import Card from '../components/productCard';

export default function Products() {
  const [products, error, loading, axiosFetch] = axios.post({
    axiosInstance: axios,
    method: 'GET',
    url: '/v1/products',
    requestConfig: {
      headers: {
        'Content-Language': 'en-US',
        //'Accept': 'text/html'
      },
    },
  });

  return (
    <>
      <div className="flex flex-wrap">
        {products && products.results ? (
          <>
            {products.results.map((product) => (
              <Card
                pictureUrl={product.pictureURL}
                name={product.name}
                price={product.price}
                description={product.description}
                inStock={product.stock}
                key={product.id} id={product.id}              />
            ))}
          </>
        ) : (
          <p>loading...</p>
        )}
      </div>
    </>
  );
}
