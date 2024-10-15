import React from 'react';

const ItemCard = ({ item }) => {
  const { image, title, price, distance, condition } = item;

  return (
    <div className="border p-4 rounded-md shadow-md">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-2" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-500">Price: ${price}</p>
      <p className="text-gray-500">Distance: {distance} miles</p>
      <p className="text-gray-500">Condition: {condition}</p>
    </div>
  );
};

export default ItemCard;
