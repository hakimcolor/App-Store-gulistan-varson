import React from 'react';
import ErrorImage from '../assets/error-404.png';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white overflow-hidden relative px-4">
      <div className="absolute w-96 h-96 bg-blue-600 opacity-30 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-purple-700 opacity-30 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>
      <img
        src={ErrorImage}
        alt="404 Error"
        className="w-64 sm:w-80 md:w-96 drop-shadow-[0_0_25px_rgba(99,102,241,0.8)] animate-float"
      />
      <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold mt-6 tracking-wide bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        404
      </h1>
      <p className="text-xl sm:text-2xl md:text-3xl mt-4 font-semibold text-gray-200">
        Oops! Page Not Found 🚧
      </p>
      <p className="text-gray-400 mt-3 text-center max-w-lg leading-relaxed">
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable. But don’t worry, you can always go back home!
      </p>
      <Link
        to="/"
        className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 font-semibold text-white tracking-wide"
      >
        ⬅ Go Back Home
      </Link>
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Error;
