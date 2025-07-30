import React from 'react';
import { Link } from 'react-router-dom';

const AssessmentCTA = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="relative p-8 md:p-12 rounded-lg bg-white/50 backdrop-blur-lg shadow-xl overflow-hidden border border-white/20">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Take the First Step</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Our confidential 2-minute self-assessment can help you understand your symptoms and find the right resources.</p>
            <Link to="/assessment" className="mt-8 inline-block bg-white text-teal-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors transform duration-300 hover:scale-105">
              Take the 2-Minute PTSD Assessment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentCTA;
