import React from 'react';
import { Link } from 'react-router-dom';
const navItems = [
  { title: 'About PTSD', path: '/about-ptsd', image: '/images/quicknav-1x1-A.jpg' },
  { title: 'Healing Tools', path: '/healing-tools', image: '/images/quicknav-1x1-B.jpg' },
  { title: 'Assess', path: '/assessment', image: '/images/quicknav-1x1-C.jpg' },
  { title: 'Find Help', path: '/find-help', image: '/images/quicknav-1x1-D.jpg' },
  { title: 'Stories & Community', path: '/stories-community', image: '/images/quicknav-1x1-E.jpg' },
  { title: 'Education', path: '/education', image: '/images/quicknav-1x1-F.jpg' },
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
              className="group relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl aspect-square"
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover object-center" />
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
