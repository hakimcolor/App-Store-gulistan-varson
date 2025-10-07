import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import Logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);


  const openGitHub = () => {
    window.open(
      'https://github.com/hakimcolor/App-Store-gulistan-varson',
      '_blank'
    );
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between  p-4">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Hero.io Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-blue-600">HERO.IO</span>
        </div>

        <nav className="hidden md:flex justify-between space-x-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            Apps
          </Link>
          <Link
            to="/readList"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            Installation
          </Link>

          
        </nav>
<button
            onClick={openGitHub}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity duration-200  "
          >
            <FaGithub size={18} />
            <span>Contribute</span>
          </button>
      
        <button
          className="md:hidden flex items-center text-gray-700"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>


      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-100">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link
              to="/"
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Apps
            </Link>
            <Link
              to="/readList"
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Installation
            </Link>

            {/* <button
              onClick={() => {
                openGitHub();
                toggleMenu();
              }}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity duration-200 cursor-pointer"
            >
              <FaGithub size={18} />
              <span>Contribute</span>
            </button> */}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
