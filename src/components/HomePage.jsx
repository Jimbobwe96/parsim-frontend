import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

  const navigate = useNavigate();
  const goToBrowse = () => {
    navigate('/browse');
  };

    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <header className="text-center mb-6">
          <h1 className="text-4xl font-bold text-blue-600">Welcome to Parsim!</h1>
          <p className="text-lg text-gray-700 mt-2">
            Your go-to platform for peer-to-peer secondhand clothing sales.
          </p>
        </header>
        <div className="flex flex-col items-center">
          <p className="text-md text-gray-600 mb-4">
            Discover amazing deals on gently used clothing and contribute to a sustainable future.
          </p>
          <button onClick={goToBrowse} className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition">
            Shop Now
          </button>
        </div>
      </div>
    );
  };

export default HomePage;