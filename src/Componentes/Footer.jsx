import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaApple,
  FaGooglePlay,
} from 'react-icons/fa';
import Logo from '../assets/logo.png'; // ✅ your logo

const AppFooter = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 mt-20">
      <div className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 py-12">
        {/* 🌟 Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 border-b border-gray-700 pb-10">
          {/* Brand + Description */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-3">
              <img
                src={Logo}
                alt="Heor.io Logo"
                className="w-12 h-12 object-contain rounded-lg"
              />
              <h1 className="text-3xl font-bold text-white">Heor.io</h1>
            </div>
            <p className="text-gray-400 mt-3 max-w-md text-sm sm:text-base">
              Discover the latest apps, games, and tools — all curated and
              secure on Heor.io.
            </p>
          </div>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition-all">
              <FaApple className="text-2xl" />
              <span className="text-sm text-left leading-tight">
                Download on the <br />{' '}
                <span className="font-bold text-base">App Store</span>
              </span>
            </button>

            <button className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition-all">
              <FaGooglePlay className="text-2xl" />
              <span className="text-sm text-left leading-tight">
                Get it on <br />{' '}
                <span className="font-bold text-base">Google Play</span>
              </span>
            </button>
          </div>
        </div>

        {/* 🔗 Middle Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-10 text-center sm:text-left">
          <div>
            <h3 className="text-white font-semibold mb-3">Explore</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Top Apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Games
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  New & Trending
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Editor's Picks
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Developers</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Submit App
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  API Access
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Heor.io
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ⚡ Bottom Section */}
        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-6">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Heor.io. All rights reserved.
          </p>

          <div className="flex gap-4 mt-4 sm:mt-0">
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
