'use client';

import { useState, useEffect } from 'react';

interface CookieConsentProps {
  className?: string;
}

const CookieConsent = ({ className = '' }: CookieConsentProps) => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookie-consent');
    if (!hasConsented) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 p-4 ${className}`}>
      <div className="max-w-4xl mx-auto bg-gray-900 border border-gray-700 rounded-lg p-4 shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="mb-4 md:mb-0 md:mr-4">
            <h3 className="text-green-400 font-mono text-lg mb-1">// System.Notification</h3>
            <p className="text-gray-300 font-light">
              This mental interface stores local data for optimal function. Your preferences and settings will be saved locally to enhance your experience.
            </p>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={handleAccept}
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded font-mono transition-colors"
            >
              &gt; Accept_All()
            </button>
            <button
              onClick={handleAccept}
              className="bg-transparent border border-gray-600 hover:border-gray-500 text-gray-400 hover:text-gray-300 py-2 px-4 rounded font-mono transition-colors"
            >
              &gt; Accept_Essential()
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;