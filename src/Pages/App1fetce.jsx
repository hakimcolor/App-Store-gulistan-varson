import React from 'react';
import { BsApple } from 'react-icons/bs';
import App1CardShow from './App1CardShow';
import { Link } from 'react-router';

const App1fetce = ({ AppData = [] }) => {
  if (!AppData || AppData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-gray-500">
        <BsApple size={50} className="mb-4 text-gray-400" />
        <p className="text-lg">No apps available right now.</p>
      </div>
    );
  }

  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900">
        Trending Apps
      </h1>

      <p className="text-center mt-2 text-gray-600">
        Explore all trending apps on the market developed by us
      </p>

      <div
        className="
          grid 
          mt-8
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-4 
          gap-10
          place-items-center
          
        "
      >
        {AppData.map((app) => (
          <App1CardShow key={app.id} app={app} />
        ))}
      </div>

      <Link to="/apps">
        {' '}
        <div className="flex justify-center mt-10">
          <button className="px-8 py-4 font-semibold text-white rounded-2xl bg-gradient-to-r from-blue-700  to-blue-400 shadow-lg hover:scale-105 transition transform duration-300 cursor-pointer">
            Show All
          </button>
        </div>
      </Link>
    </div>
  );
};

export default App1fetce;
