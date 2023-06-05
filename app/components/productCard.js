import React from 'react';

const Card = ({ pictureUrl, name, price, description, inStock, id }) => {
  return (
    <div
      key={id}
      className="bg-white shadow-md rounded-md p-4 w-1/4 m-10 min-w-fit"
    >
      <img src={pictureUrl} alt={name} className="w-full mb-4 rounded-md" />

      <h2 className="text-gray-600 text-lg font-semibold">{name}</h2>

      <p className="text-gray-600 mb-2">${price}</p>

      <p className="text-gray-500 mb-4">{description}</p>

      <p className="text-gray-500 mb-4">{inStock}</p>

      {inStock ? (
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
          Add to Cart
        </button>
      ) : (
        <p className="text-red-500">Out of Stock</p>
      )}
    </div>
  );
};

export default Card;
