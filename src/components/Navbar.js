import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'About PTSD', path: '/about-ptsd' },
  { title: 'Self-Assessment', path: '/self-assessment' },
  { title: 'Healing Tools', path: '/healing-tools' },
  { title: 'Stories & Community', path: '/stories-community' },
  { title: 'Find Help', path: '/find-help' },
  { title: 'Education', path: '/education' },
  { title: 'Mood Tracker', path: '/mood-tracker' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkStyle = {
    color: '#0d9488', // brand-blue-green
    textDecoration: 'underline',
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">PTSDToday</div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map(link => (
            <NavLink key={link.title} to={link.path} style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-gray-600 hover:text-brand-blue-green transition-colors">
              {link.title}
            </NavLink>
          ))}
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">🌙</button>
        </div>

        {/* Mobile Nav Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map(link => (
            <NavLink key={link.title} to={link.path} onClick={() => setIsOpen(false)} style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-brand-blue-green">
              {link.title}
            </NavLink>
          ))}
           <div className="flex justify-center mt-4">
            <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">🌙</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
