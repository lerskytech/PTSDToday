import React from 'react';
import SoraImage from './SoraImage';
import resources from '../data/resources.json';

const TrustedResources = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">Trusted Resources</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">Vetted organizations and services ready to provide immediate support.</p>
        <div className="flex space-x-6 overflow-x-auto pb-4 -mx-6 px-6">
          {resources.map((resource) => (
            <a 
              key={resource.id} 
              href={resource.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-shrink-0 w-64 group relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <SoraImage src={`/images/findhelp-2x3.jpg`} alt={resource.name} aspect="2:3" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                {resource.verified && <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">Verified</span>}
                <h3 className="text-white text-lg font-bold">{resource.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedResources;
