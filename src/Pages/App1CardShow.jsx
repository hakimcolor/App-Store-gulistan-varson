import React from 'react';
import { FaStar, FaDownload } from 'react-icons/fa';

const App1CardShow = ({ app }) => {
  const { downloads, image, ratingAvg, title } = app; // use ratingAvg for rating

  return (
    <div className="mt-6 p-4 max-w-96 bg-white rounded-lg shadow-md">
      <div className="bg-gray-200 p-4 flex justify-center items-center rounded-lg">
        <img className=" h-40 w-40" src={image} alt={title} />
      </div>

      <h1 className="mt-4 font-bold text-2xl text-gray-800">{title}</h1>

      <div className="mt-2 flex justify-between items-center">
        <div className="flex items-center gap-1 bg-gray-200 p-2 rounded">
          <FaDownload className="text-green-500" />
          <span className="text-green-700 font-semibold">{downloads}M</span>
        </div>

        <div className="flex items-center gap-1 bg-gray-200 p-2 rounded">
          <FaStar className="text-orange-500" />
          <span className="text-orange-600 font-semibold">{ratingAvg}</span>
        </div>
      </div>
    </div>
  );
};

export default App1CardShow;
