import React from 'react';
import { Link } from 'react-router-dom';
import SoraImage from './SoraImage';

import navImageA from '../assets/images/quicknav-1x1-A.jpg';
import navImageB from '../assets/images/quicknav-1x1-B.jpg';
import navImageC from '../assets/images/quicknav-1x1-C.jpg';
import navImageD from '../assets/images/quicknav-1x1-D.jpg';
import navImageE from '../assets/images/quicknav-1x1-E.jpg';
import navImageF from '../assets/images/quicknav-1x1-F.jpg';

const navItems = [
  { title: 'About PTSD', path: '/about-ptsd', image: navImageA },
  { title: 'Healing Tools', path: '/healing-tools', image: navImageB },
  { title: 'Assess', path: '/assessment', image: navImageC },
  { title: 'Find Help', path: '/find-help', image: navImageD },
  { title: 'Stories & Community', path: '/stories-community', image: navImageE },
  { title: 'Education', path: '/education', image: navImageF },
];

const QuickNavGrid = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {navItems.map((item) => (
            <Link 
              key={item.title} 
              to={item.path} 
              className="group relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <SoraImage src={item.image} alt={item.title} aspect="1:1" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-2">
                <h3 className="text-white text-lg font-bold text-center">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickNavGrid;
