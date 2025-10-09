
// import React from 'react';
// import { FiDownload } from 'react-icons/fi';
// import { AiFillStar } from 'react-icons/ai';

// const InstallDetails = ({ app, onUninstall }) => {
//   const { title, ratingAvg, size, downloads, image } = app;

//   return (
//     <div className="flex flex-col md:flex-row justify-between items-center bg-white shadow-md rounded-lg p-4 mb-6 hover:shadow-lg transition-shadow duration-300 max-w-[1840px] mx-auto">
     
//       <div className="flex items-center space-x-5">
//         <img
//           className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg border border-gray-200"
//           src={image}
//           alt={title}
//         />

//         <div className="space-y-2">
//           <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
//           <div className="flex flex-wrap space-x-6 text-gray-600 text-sm md:text-base">
//             <span className="flex items-center gap-1">
//               <FiDownload className="text-blue-500 text-lg" />
//               <span>{downloads} M</span>
//             </span>
//             <span className="flex items-center gap-1">
//               <AiFillStar className="text-yellow-400 text-lg" />
//               <span>{ratingAvg}</span>
//             </span>
//             <span className="flex items-center gap-1">
//               <span>{size} MB</span>
//             </span>
//           </div>
//         </div>
//       </div>

  
//       <button
//         onClick={() => onUninstall?.(app.id)}
//         className="mt-4 md:mt-0 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-300 font-medium"
//       >
//         Uninstall
//       </button>
//     </div>
//   );
// };

// export default InstallDetails;
import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';

const InstallDetails = ({ app, onUninstall }) => {
  const { title, ratingAvg, size, downloads, image } = app;

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-center bg-white shadow-md rounded-lg p-4 sm:p-6 mb-6 hover:shadow-lg transition duration-300 w-full max-w-[1640px] mx-auto">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
        <img
          className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-lg border border-gray-200"
          src={image}
          alt={title}
        />
        <div className="space-y-2">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
            {title}
          </h1>
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-gray-600 text-sm sm:text-base">
            <span className="flex items-center gap-1">
              <FiDownload className="text-blue-500 text-lg" />
              <span>{downloads}M</span>
            </span>
            <span className="flex items-center gap-1">
              <AiFillStar className="text-yellow-400 text-lg" />
              <span>{ratingAvg}</span>
            </span>
            <span>{size} MB</span>
          </div>
        </div>
      </div>

      <button
        onClick={() => onUninstall?.(app.id)}
        className="mt-4 sm:mt-0 w-full sm:w-auto px-6 py-2 bg-[#00d390] text-white rounded-md transition duration-300 font-medium cursor-pointer"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstallDetails;
