import React from 'react';
import SoraImage from './SoraImage';

const helpItems = [
  {
    title: 'Learn',
    description: 'Understand the science behind PTSD and evidence-based treatments.',
    image: '/images/quicknav-1x1-A.jpg', // Placeholder, to be replaced with specific image
  },
  {
    title: 'Assess',
    description: 'Use our confidential tools to understand your symptoms and track progress.',
    image: '/images/quicknav-1x1-B.jpg', // Placeholder
  },
  {
    title: 'Heal',
    description: 'Access guided exercises and techniques to support your recovery journey.',
    image: '/images/quicknav-1x1-C.jpg', // Placeholder
  },
];

const HowItHelps = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How This Site Helps You</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">A clear path forward with resources designed for every step of your journey.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {helpItems.map((item) => (
            <div key={item.title} className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-32 h-32 mb-6">
                <SoraImage src={item.image} alt={item.title} aspect="1:1" className="rounded-full" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItHelps;
