"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation variants
  const menuVariants = {
    closed: { opacity: 0, x: 200 },
    open: { opacity: 1, x: 0 }
  };

  const linkVariants = {
    hover: { scale: 1.05, color: '#4a90e2' }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          {/* Logo */}
          <motion.div 
            className="flex justify-start lg:w-0 lg:flex-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center">
              <span className="sr-only">PTSDToday</span>
              {/* Placeholder for logo - replace with your actual logo */}
              <div className="h-10 w-10 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold text-lg">PT</div>
              <span className="ml-2 text-xl font-bold text-gray-800">PTSDToday</span>
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={toggleMenu}
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <HiMenuAlt3 className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <motion.div whileHover="hover" variants={linkVariants}>
              <Link href="/assessment" className="text-base font-medium text-gray-700 hover:text-blue-500">
                Self-Assessment
              </Link>
            </motion.div>
            <motion.div whileHover="hover" variants={linkVariants}>
              <Link href="/resources" className="text-base font-medium text-gray-700 hover:text-blue-500">
                Find Help
              </Link>
            </motion.div>
            <motion.div whileHover="hover" variants={linkVariants}>
              <Link href="/community" className="text-base font-medium text-gray-700 hover:text-blue-500">
                Community
              </Link>
            </motion.div>
          </nav>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/assessment" 
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-600"
              >
                Start Your Journey
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on mobile menu state */}
      <motion.div
        className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        initial="closed"
        animate={isMenuOpen ? 'open' : 'closed'}
        variants={menuVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div>
              <span className="sr-only">PTSDToday</span>
              <div className="h-8 w-8 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold text-lg">PT</div>
            </div>
            <div className="-mr-2">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                onClick={toggleMenu}
              >
                <span className="sr-only">Close menu</span>
                <HiX className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/assessment"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Self-Assessment
            </Link>
            <Link
              href="/resources"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Find Help
            </Link>
            <Link
              href="/community"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Community
            </Link>
          </div>
          <div className="p-4 border-t border-gray-200">
            <Link
              href="/assessment"
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-600"
              onClick={toggleMenu}
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
