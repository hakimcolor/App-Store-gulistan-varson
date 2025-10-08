import React from 'react'
import { useLoaderData } from 'react-router'
import App1CardShow from './App1CardShow';

const Apps = () => {
  const DataApp = useLoaderData();
  console.log(DataApp);
  
  return (
    <div
      className="mt-30
    "
    >
      fgh
      <div
        className="grid 
          mt-8
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-4 
          gap-10
          place-items-center px-4 md:px-10 xl:px-20 pb-20"
      >
        {DataApp.map((eapp) => (
          <App1CardShow key={eapp.id} app={eapp}></App1CardShow>
        ))}
      </div>
    </div>
  );
}

export default Apps
