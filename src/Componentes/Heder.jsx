
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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Apps', path: '/about' },
    { name: 'Installation', path: '/readList' },
  ];

 
  const Links = navLinks.map((link) => (
    <Link
      key={link.path}
      to={link.path}
      onClick={() => setIsOpen(false)} 
      className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
    >
      {link.name}
    </Link>
  ));

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Heor.io Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-blue-600">HERO.IO</span>
        </div>

        <nav className="hidden md:flex justify-between space-x-6">{Links}</nav>
        <button
          onClick={openGitHub}
          className="
    flex 
    items-center 
    justify-center 
    gap-2 
    bg-gradient-to-r 
    from-blue-500 
    via-purple-500 
    to-pink-500 
    text-white 
    px-3 
    sm:px-5 
    md:px-6 
    py-1.5 
    sm:py-2 
    md:py-2.5 
    rounded-md 
    text-xs 
    sm:text-sm 
    md:text-base 
    font-medium 
    hover:opacity-90 
    transition-all 
    duration-200 
    w-22 
    sm:w-32 
    md:w-40
  "
        >
          <span > <FaGithub className=" " /></span>
         
          <span>Contribute</span>
        </button>

        <button
          className="md:hidden flex items-center text-gray-700 ml-2"
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
            {Links}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
