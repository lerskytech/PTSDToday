import React from 'react';
import { Link } from 'react-router-dom';
import SoraImage from './SoraImage';

const moodTrackerImage = '/images/20250729_2003_Colorful Mood Calendar_simple_compose_01k1ca5mpze2saz5n42gth71m3.png';

const MoodTrackerPreview = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="md:w-1/2">
            <SoraImage src={moodTrackerImage} alt="A colorful calendar image representing mood tracking" aspect="3:2" />
          </div>
          <div className="md:w-1/2 p-8 md:p-12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Track Your Journey to Wellness</h2>
            <p className="text-lg text-gray-600 mb-6">Gently track your moods and symptoms to recognize patterns and celebrate progress. Your private journal for healing.</p>
            <Link to="/mood-tracker" className="inline-block bg-brand-blue-green text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-700 transition-colors duration-300">
              Start Tracking
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoodTrackerPreview;
