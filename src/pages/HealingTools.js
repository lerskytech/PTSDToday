import React from 'react';
import { Link } from 'react-router-dom';
import SoraImage from '../components/SoraImage';

const tools = [
  {
    id: 'breathing-exercise',
    title: 'Guided Breathing',
    description: 'A simple 4-7-8 breathing technique to calm your nervous system and find your center.',
    image: '/images/20250729_1949_Calm Breathing Abstraction_simple_compose_01k1c9d4rwf6esd3e88tjdd4ek.png',
    link: '/healing-tools/breathing-exercise',
  },
  // More tools will be added here
];

const HealingTools = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Healing Tools</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">A collection of interactive exercises designed to support you in moments of need.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <Link to={tool.link} key={tool.id} className="group block bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <SoraImage src={tool.image} alt={tool.title} aspect="1:1" />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-brand-accent transition-colors duration-300">{tool.title}</h2>
                <p className="text-gray-600">{tool.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealingTools;
