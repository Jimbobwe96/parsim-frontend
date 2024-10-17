import React, { useState } from "react";
import { Link } from 'react-router-dom';

const ListingCard = ({
  id,
  images = [], // default to an empty array if no images are provided
  title,
  price,
  condition,
  size,
  distance,
  sellerName,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <Link to={`/item/${id}`} className="block">
    <div className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
      {/* Image Section */}
      <div className="relative group">
        {images.length > 0 ? (
          <img
            src={images[currentImageIndex]}
            alt={title}
            className="w-full h-full object-cover aspect-square"
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            <span>No Image Available</span>
          </div>
        )}

        {/* Arrows on hover only when there are multiple images */}
        {images.length > 1 && (
          <>
            <button
              className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={handlePrevImage}
            >
              &lt;
            </button>
            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={handleNextImage}
            >
              &gt;
            </button>
          </>
        )}
      </div>

      {/* Listing Information */}
      <div className="p-4">
        <h2 className="font-bold text-lg text-gray-800">{title}</h2>
        <p className="text-gray-600">${price.toFixed(2)}</p>
        <p className="text-gray-500">Condition: {condition}</p>
        <p className="text-gray-500">Size: {size}</p>
        <p className="text-gray-500">Seller: {sellerName}</p>
        <p className="text-gray-500">{distance} miles away</p>
      </div>
    </div>
    </Link>
  );
};

export default ListingCard;