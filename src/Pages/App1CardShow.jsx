// import React from 'react';
// import { FaStar, FaDownload } from 'react-icons/fa';

// const App1CardShow = ({ app }) => {
//   const { downloads, image, ratingAvg, title } = app; 

//   return (
//     <div className="mt-6 w-96 md:min-w-[200px] md:max-w-[700px] p-4 bg-white rounded-lg shadow-md">
//       <div className="bg-gray-200 p-4 flex justify-center items-center rounded-lg">
//         <img className=" w-40 h-40" src={image} alt={title} />
//       </div>

//       <h1 className="mt-4 font-bold text-2xl text-gray-800">{title}</h1>

//       <div className="mt-2 flex justify-between items-center">
//         <div className="flex items-center gap-1 bg-gray-200 p-2 rounded">
//           <FaDownload className="text-green-500" />
//           <span className="text-green-700 font-semibold">{downloads}M</span>
//         </div>

//         <div className="flex items-center gap-1 bg-gray-200 p-2 rounded">
//           <FaStar className="text-orange-500" />
//           <span className="text-orange-600 font-semibold">{ratingAvg}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App1CardShow;
import React from 'react';
import { FaStar, FaDownload } from 'react-icons/fa';

const App1CardShow = ({ app }) => {
  const { downloads, image, ratingAvg, title } = app;

  return (
    <div
      className="
        bg-white 
        rounded-xl 
        shadow-md 
        hover:shadow-lg 
        transition-all 
        duration-300 
        flex 
        flex-col 
        items-center 
        p-4 
        sm:p-5 
        md:p-6 
        lg:p-8
        w-full 
        max-w-[300px]
        sm:max-w-[340px]
        md:max-w-[380px]
        lg:max-w-[420px]
        xl:max-w-[460px]
        mx-auto
      "
    >
   
      <div
        className="
          bg-gray-100 
          rounded-lg 
          flex 
          justify-center 
          items-center 
          w-full 
          aspect-square 
          overflow-hidden
        "
      >
        <img
          src={image}
          alt={title}
          className="
            w-2/3 
            h-2/3 
            object-contain 
            hover:scale-105 
            transition-transform 
            duration-300
          "
        />
      </div>

  
      <h1 className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 text-center truncate w-full">
        {title}
      </h1>

    
      <div className="mt-3 flex justify-between items-center w-full px-2">
        <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-md">
          <FaDownload className="text-green-500" />
          <span className="text-green-700 font-semibold text-sm md:text-base">
            {downloads}M
          </span>
        </div>

        <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-md">
          <FaStar className="text-orange-500" />
          <span className="text-orange-600 font-semibold text-sm md:text-base">
            {ratingAvg}
          </span>
        </div>
      </div>
    </div>
  );
};

export default App1CardShow;
