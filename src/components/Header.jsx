import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src="/android-chrome-512x512.png"
            alt="Parsim Logo"
            className="h-10 w-10 object-contain mr-4"
          />
        </Link>
        {/* <span className="text-xl font-semibold text-gray-800">Parsim</span> */}
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6 text-gray-600 font-medium">
        <a href="/browse" className="hover:text-gray-800">Browse</a>
        <a href="/sell" className="hover:text-gray-800">Sell</a>
        <a href="/favorites" className="hover:text-gray-800">Favorites</a>
        <a href="/messages" className="hover:text-gray-800">Messages</a>
      </nav>

      {/* Search Bar */}
      <div className="flex-grow mx-6">
        <input
          type="text"
          placeholder="Search clothing and apparel..."
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* User Profile / Login */}
      <div className="flex items-center space-x-6">
        <div className="hidden md:flex items-center space-x-2">
          <img
            src="/path/to/profile-pic.png" // User's profile picture or placeholder
            alt="User"
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="text-gray-800">Jimmy</span> {/* Replace with dynamic user info */}
        </div>
        <a
          href="/login"
          className="text-gray-600 hover:text-gray-800"
        >
          Login
        </a>
      </div>

      {/* Notification Icon */}
      <div className="ml-6">
        <button className="relative">
          <svg
            className="w-6 h-6 text-gray-600 hover:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            ></path>
          </svg>
          {/* Notification Badge */}
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
