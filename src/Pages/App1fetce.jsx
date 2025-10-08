import React from 'react';
import { BsApple } from 'react-icons/bs';
import App1CardShow from './App1CardShow';

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
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center  text-gray-800">
        Trending Apps 
      </h1>

      <h1 className='text-center mt-2'>Explore All Trending Apps on the Market developed by us</h1>
      <div
        className="
          grid 
          mt-5
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
    </div>
  );
};

export default App1fetce;
