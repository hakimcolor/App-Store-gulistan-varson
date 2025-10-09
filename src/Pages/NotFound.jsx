import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import ErrorImage from '../assets/App-Error.png'; 
const NotFound = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white overflow-hidden">
    
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1], opacity: [0, 0.6, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: 'mirror' }}
        className="absolute w-[400px] h-[400px] rounded-full bg-white/10 blur-3xl"
      ></motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.3, 1], opacity: [0, 0.5, 0.3] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 1,
        }}
        className="absolute w-[600px] h-[600px] rounded-full bg-pink-300/10 blur-3xl"
      ></motion.div>


      <motion.img
        src={ErrorImage}
        alt="App Error"
        className="w-64 sm:w-80 md:w-96 z-10"
        initial={{ y: -50, opacity: 0, rotate: -5 }}
        animate={{ y: [0, -20, 0], opacity: 1, rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: 'loop' }}
      />


      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-extrabold text-white drop-shadow-2xl z-10 text-center mt-6"
      >
        OOPS!! APP NOT FOUND
      </motion.h1>

 
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="text-base md:text-xl lg:text-2xl text-white/90 font-semibold z-10 text-center max-w-[700px] px-6"
      >
        The app you’re looking for doesn’t exist, has been removed, or is
        currently unavailable.
      </motion.p>

   
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="mt-8 z-10"
      >
        <Link
          to="/"
          className="
            flex items-center gap-2 
            bg-white/20 
            backdrop-blur-lg 
            px-8 py-3 
            rounded-full 
            text-white 
            font-semibold 
            text-lg 
            hover:bg-white/30 
            transition 
            duration-300
            shadow-lg
          "
        >
          <FaHome className="text-xl" />
          Back to Home
        </Link>
      </motion.div>


      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-2 h-2 bg-white/70 rounded-full"
            initial={{ opacity: 0 }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              repeatType: 'mirror',
              delay: Math.random() * 2,
            }}
          ></motion.span>
        ))}
      </div>
    </div>
  );
};

export default NotFound;
