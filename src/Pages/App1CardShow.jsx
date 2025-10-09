
import React from 'react';
import { FaStar, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

const App1CardShow = ({ app, searchTerm }) => {
  const { downloads, image, ratingAvg, title, id } = app;


  const getHighlightedText = (text, highlight) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={i} className="">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <Link to={`/appssss/${id}`}>
      <div
        className="
          bg-white 
          rounded-2xl 
          shadow-lg 
          hover:shadow-xl 
          transition-all 
          duration-300 
          flex 
          flex-col 
          items-center 
          p-4
          w-[350px] sm:w-[280px] md:w-[300px] lg:w-[310px] xl:w-[300px] 2xl:w-[380px]
          min-w-[250px] max-w-[380px]
          h-[400px] sm:h-[420px] md:h-[440px] lg:h-[460px] xl:h-[480px] 2xl:h-[500px]
          mx-auto
        "
      >
      
        <div
          className="
            bg-gray-100 
            rounded-xl 
            flex 
            justify-center 
            items-center 
            w-full 
            h-[220px] sm:h-[240px] md:h-[260px] lg:h-[280px] xl:h-[300px] 2xl:h-[320px]
            overflow-hidden
          "
        >
          <img
            src={image}
            alt={title}
            className="
              w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 xl:w-52 xl:h-52 2xl:w-56 2xl:h-56
              object-contain 
              hover:scale-105 
              transition-transform 
              duration-300
            "
          />
        </div>

    
        <h1 className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-bold text-gray-800 text-center truncate w-full">
          {getHighlightedText(title, searchTerm)}
        </h1>

     
        <div className="mt-3 flex justify-between items-center w-full px-2">
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-md">
            <FaDownload className="text-green-500" />
            <span className="text-green-700 font-semibold text-sm sm:text-base md:text-base">
              {downloads}M
            </span>
          </div>

          <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-md">
            <FaStar className="text-orange-500" />
            <span className="text-orange-600 font-semibold text-sm sm:text-base md:text-base">
              {ratingAvg}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default App1CardShow;
