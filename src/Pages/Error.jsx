import React from 'react';
import ErrorImage from '../assets/error-404.png';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <img
        src={ErrorImage}
        alt="404 Error"
        className="w-64 sm:w-80 md:w-96 animate-bounce"
      />
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mt-6">
        404
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mt-2">
        Oops! Page Not Found
      </p>
      <p className="text-gray-500 mt-1 text-center max-w-md">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-500 transition-colors duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
