// import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router';
// import { getApp, removeFromDB } from '../AddDB';
// import INstallDetals from './INstallDetals';

// const Installation = () => {
//   const data = useLoaderData();
//   const [myApps, setMyApps] = useState([]);

//   useEffect(() => {
//     const storedApp = getApp();
//     const converted = storedApp.map((id) => parseInt(id));

//     const myAppList = data.filter((app) => converted.includes(app.id));
//     setMyApps(myAppList);
//   }, [data]);

//   const handleUninstall = (id) => {
//     removeFromDB(id);
//     setMyApps((prevApps) => prevApps.filter((app) => app.id !== id));
//   };

//   return (
//     <div className="pt-30">
//       <div className="text-center mb-10">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
//           Your Installed Apps
//         </h1>
//         <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
//           Explore All Trending Apps on the Market developed by us
//         </p>
//       </div>

//       <div>
//         <p className="font-medium mb-4">Apps Found: {myApps.length}</p>

//         <div className="space-y-4">
//           {myApps.map((app) => (
//             <INstallDetals
//               key={app.id}
//               app={app}
//               onUninstall={handleUninstall}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Installation;
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getApp, removeFromDB } from '../AddDB';
import INstallDetals from './INstallDetals';
import NotFound from './NotFound';

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
        order === 'asc' ? a.size - b.size : b.size - a.size
      )
    );
  };


  if (myApps.length === 0) {
    return <NotFound />;
  }

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
        <div className="mt-22 flex items-center max-w-[1300px] mx-auto justify-between mb-5 text-2xl font-bold">
          <p className="font-medium">Apps Found: {myApps.length}</p>

          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="px-3 py-2 border rounded text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="asc">Small → Big</option>
            <option value="desc">Big → Small</option>
          </select>
        </div>

        <div className="space-y-4 p-10 xl:p-0">
          {myApps.map((app) => (
            <INstallDetals
              key={app.id}
              app={app}
              onUninstall={handleUninstall}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;

