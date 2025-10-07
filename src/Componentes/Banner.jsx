import React from 'react';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import hero from '../assets/hero.png';

const Banner = () => {
  return (
    <div className="mt-32 flex flex-col items-center">
      <div className="text-center px-4 max-w-[1400px]">
        <div className="font-bold text-black text-4xl md:text-6xl leading-tight">
          We Build <br />
          <span className="bg-gradient-to-r from-[#5017ca] to-[#9e68f0] bg-clip-text text-transparent">
            Productive
          </span>{' '}
          Apps
        </div>

        <p className="text-gray-700 mt-4 md:text-lg">
          At <span className="font-semibold">HERO.IO</span>, we craft innovative
          apps designed to make everyday life simpler, smarter, and more
          exciting. <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-400 to-cyan-500 text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity duration-200 w-40"
          >
            <FaGooglePlay size={20} />
            <span className="font-medium">Google Play</span>
          </a>

          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-gray-800 to-gray-600 text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity duration-200 w-40"
          >
            <FaApple size={22} />
            <span className="font-medium">App Store</span>
          </a>
        </div>

        <div className="flex justify-center mt-10">
          <img
            className=" w-96 sm:w-[590px] md:w-[720px] xl:w-[800px] object-contain"
            src={hero}
            alt="App Preview"
          />
        </div>
      </div>

      <div className="w-full py-10 bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600">
        <div className="max-w-[1200px] mx-auto text-center px-4 text-white">
          <h1 className="font-bold text-xl md:text-5xl mb-8">
            Trusted by Millions, Built for You
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm md:text-base">
            <div className="p-1">
              <h2 className="font-semibold mb-2">Total Downloads</h2>
              <p className="text-3xl md:text-4xl font-bold mb-1">29.6M</p>
              <p>21% more than last month</p>
            </div>

            <div className="p-1">
              <h2 className="font-semibold mb-2">Total Reviews</h2>
              <p className="text-3xl md:text-4xl font-bold mb-1">906K</p>
              <p>46% more than last month</p>
            </div>

            <div className="p-1">
              <h2 className="font-semibold mb-2">Active Apps</h2>
              <p className="text-3xl md:text-4xl font-bold mb-1">132+</p>
              <p>31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
