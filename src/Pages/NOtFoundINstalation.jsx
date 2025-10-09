import React from 'react';
import { FaBoxOpen, FaHome, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NoInstalledInstallation = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 px-4">
      <div className="relative flex items-center justify-center w-40 h-40 bg-white/20 rounded-full shadow-xl animate-pulse mb-8">
        <FaBoxOpen className="text-white text-6xl" />
        <span className="absolute bottom-[-10px] right-[-10px] w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold text-gray-800 animate-bounce">
          !
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center mb-4 drop-shadow-lg">
        No Apps Installed
      </h1>

      <p className="text-white/90 text-center max-w-lg mb-8 text-lg sm:text-xl">
        You currently have no installed apps. Install some apps to see them
        here! Or explore the store to find amazing applications.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 bg-white/20 backdrop-blur-lg px-6 py-3 rounded-full text-white font-semibold text-lg hover:bg-white/30 transition duration-300 shadow-lg"
        >
          <FaHome />
          Go to Home
        </Link>

        <Link
          to="/apps"
          className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 rounded-full text-gray-900 font-semibold text-lg hover:scale-105 transform transition duration-300 shadow-lg"
        >
          <FaArrowRight />
          Explore Apps
        </Link>
      </div>

      <div className="absolute top-0 left-0 w-64 h-64 bg-pink-300/30 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400/30 rounded-full blur-3xl animate-pulse -z-10"></div>
    </div>
  );
};

export default NoInstalledInstallation;
