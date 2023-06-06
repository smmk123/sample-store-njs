'use client';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from '../components/productCard';
import Alert from '@mui/material/Alert';

export default function Products() {
  const [data, setData] = useState([]);
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.post('/api/proxy', {
        endpoint: 'v1/products',
        method: 'GET',
      });
      const data = response.data.results;
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShowAlert(false);
    }, 20000);
  }, []);

  return (
    <>
      {showAlert && (
        <Alert severity="info" sx={{ marginTop: '16px' }}>
          Sorry for the Delay... The backend is hosted on Heroku`&apos;`s
          eco-tier and may take a few seconds to send the API response.
        </Alert>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data ? (
          data.map((product) => (
            <Card
              pictureUrl={product.pictureURL}
              name={product.name}
              price={product.price}
              description={product.description}
              inStock={product.stock}
              key={product.id}
              id={product.id}
            />
          ))
        ) : (
          <div className="m-20">
            <h1>loading...</h1>
          </div>
        )}
      </div>
    </>
  );
}
