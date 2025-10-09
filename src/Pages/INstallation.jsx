import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getApp, removeFromDB } from '../AddDB';
import INstallDetals from './INstallDetals';

import NoInstalledInstallation from './NOtFoundINstalation';
const Installation = () => {
  const data = useLoaderData();
  const [myApps, setMyApps] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const storedApp = getApp();
    const converted = storedApp.map((id) => parseInt(id));
    const myAppList = data.filter((app) => converted.includes(app.id));
    setMyApps(myAppList);
  }, [data]);

  const handleUninstall = (id) => {
    removeFromDB(id);
    setMyApps((prevApps) => prevApps.filter((app) => app.id !== id));
  };

  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);
    setMyApps((prevApps) =>
      [...prevApps].sort((a, b) =>
        order === 'asc' ? a.downloads - b.downloads : b.downloads - a.downloads
      )
    );
  };

  // if (myApps.length === 0) {
  //   return <NoInstalledInstallation />;
  // }

  return (
    <div className="pt-30">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-20">
          Your Installed Apps
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div>
        <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center sm:items-center max-w-[1300px] mx-auto justify-center sm:justify-between mb-6 gap-4 p-0  lg:p-10 md:p-10 xl:p-10 2xl:p-0">
          <p className="text-xl font-medium text-gray-800 text-center sm:text-left">
            Apps Found: <span className="font-bold">{myApps.length}</span>
          </p>

          <div className="flex items-center gap-2">
            <label
              htmlFor="sort"
              className="text-gray-700 text-sm sm:text-base font-medium"
            >
              Sort by downloads:
            </label>
            <select
              id="sort"
              value={sortOrder}
              onChange={handleSortChange}
              className="
        px-4 py-2 
        border border-gray-300 
        rounded-md 
        text-gray-700 
        text-sm sm:text-base 
        focus:outline-none 
        focus:ring-2 focus:ring-blue-400 
        transition duration-300 
        bg-white 
        hover:border-blue-400
      "
            >
              <option value="asc">Small → Big</option>
              <option value="desc">Big → Small</option>
            </select>
          </div>
        </div>

        {myApps.length === 0 ? (
          <NoInstalledInstallation />
        ) : (
          <div className="space-y-4 p-10 xl:p-0">
            {myApps.map((app) => (
              <INstallDetals
                key={app.id}
                app={app}
                onUninstall={handleUninstall}
              />
            ))}
          </div>
        )}
        {/* <div className="space-y-4 p-10 xl:p-0">
          {myApps.map((app) => (
            <INstallDetals
              key={app.id}
              app={app}
              onUninstall={handleUninstall}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Installation;
