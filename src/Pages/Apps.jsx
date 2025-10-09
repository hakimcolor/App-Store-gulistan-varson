
import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import App1CardShow from './App1CardShow';
import { FaSearch } from 'react-icons/fa';
import Loading from './Loding';
import NotFound from './NotFound'; 

const Apps = () => {
  const DataApp = useLoaderData();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredApps, setFilteredApps] = useState(DataApp);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

  
    const delay = setTimeout(() => {
      const filtered = DataApp.filter((app) =>
        app.title?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredApps(filtered);
      setLoading(false);
    }, 100);

    return () => clearTimeout(delay);
  }, [searchTerm, DataApp]);

  return (
    <div className="py-20 mt-10 bg-gray-50 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Our All Applications
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
          Explore all the apps we’ve crafted with care — built for millions of
          users worldwide.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between max-w-[1800px] mx-auto px-6 mb-10 gap-4">
        <h2 className="text-2xl text-gray-900 font-bold">
          ({filteredApps.length}) Apps Found
        </h2>

        <div className="relative w-full md:w-1/3">
          <input
            type="search"
            placeholder="Search for an app..."
            className="w-full border border-gray-300 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-gray-700 placeholder-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" size={18} />
        </div>
      </div>

    
      {loading ? (
        <Loading />
      ) : filteredApps.length === 0 ? (
     
        <NotFound />
      ) : (
    
        <div
          className="grid gap-10 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-4 
          max-w-[1800px] mx-auto px-6 md:px-10 pb-20 place-items-center"
        >
          {filteredApps.map((app) => (
            <App1CardShow key={app.id} app={app} searchTerm={searchTerm} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
