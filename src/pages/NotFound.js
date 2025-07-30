import React from 'react';
import SoraImage from '../components/SoraImage';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <SoraImage src="/images/lost-2x3.jpg" alt="A person looking lost" aspect="2:3" className="w-64" />
      <h1 className="text-4xl font-bold mt-8">404 - Page Not Found</h1>
      <p className="text-lg mt-4">The page you are looking for does not exist.</p>
      <a href="/" className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Go Home</a>
    </div>
  );
};

export default NotFound;
