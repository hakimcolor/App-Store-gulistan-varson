import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NotFound from './NotFound';
import { FaDownload, FaStar } from 'react-icons/fa';
import { TbFileLike } from 'react-icons/tb';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { addToDB, getApp } from '../AddDB'; 

const AppDetails = () => {
  const { id } = useParams();
  const appid = parseInt(id);
  const appdata = useLoaderData();
  const app = appdata.find((ap) => ap.id === appid);

  const [isInstalling, setIsInstalling] = useState(false);


  useEffect(() => {
    const storedApps = getApp(); 
    const converted = storedApps.map((i) => parseInt(i));
    if (converted.includes(appid)) {
      setIsInstalling(true); 
    }
  }, [appid]);

  if (!app) return <NotFound />;

  const {
    companyName,
    description,
    downloads,
    image,
    ratingAvg,
    ratings,
    reviews,
    size,
    title,
  } = app;

  const ratingsData = ratings
    .map((r) => ({
      name: r.name,
      count: r.count,
    }))
    .reverse();

  const handleInstall = (id) => {
    addToDB(id);
    setIsInstalling(true);
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="m-8 pt-20 md:m-16 space-y-10">
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <img
            className="w-52 h-60 object-contain rounded-lg shadow-lg"
            src={image}
            alt={title}
          />
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-indigo-500">
              <span className="text-gray-600">Developed by </span>
              {companyName}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm md:text-base justify-items-center">
              <div className="p-4 bg-gray-100 rounded-lg text-center">
                <FaDownload className="text-green-500 text-3xl mx-auto mb-2" />
                <p className="text-lg font-semibold">{downloads}M</p>
                <p className="text-gray-600">Downloads</p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg text-center">
                <FaStar className="text-yellow-500 text-3xl mx-auto mb-2" />
                <p className="text-lg font-semibold">{ratingAvg}</p>
                <p className="text-gray-600">Average Rating</p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg text-center">
                <TbFileLike className="text-indigo-700 text-3xl mx-auto mb-2" />
                <p className="text-lg font-semibold">
                  {(reviews / 1000).toFixed(1)}K
                </p>
                <p className="text-gray-600">Reviews</p>
              </div>
            </div>

          
            <button
              onClick={() => handleInstall(id)}
              disabled={isInstalling}
              className={`mt-4 px-8 py-3 rounded-md font-semibold transition 
                ${
                  isInstalling
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-green-500 text-white hover:bg-green-600'
                }`}
            >
              {isInstalling ? 'Installed' : `Install Now (${size}MB)`}
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Ratings Breakdown</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              layout="vertical"
              data={ratingsData}
              margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Bar dataKey="count" fill="#f97316" radius={[0, 5, 5, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold">Description</h2>
          <p className="text-gray-800">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
