"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaEnvelope, FaShieldAlt } from 'react-icons/fa';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Simple email validation
  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset states
    setError('');
    
    // Validate email
    if (!email || !isValidEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Simulate API call
    setLoading(true);
    
    try {
      // In a real implementation, this would be an API call to your newsletter service
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
      <div className="p-6 md:p-8">
        {!submitted ? (
          <>
            <div className="mb-6">
              <p className="text-gray-600 mb-4">
                Join our community to receive:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-green-100 text-green-500 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                    <FaCheck className="w-3 h-3" />
                  </span>
                  Monthly resources and coping strategies
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-green-100 text-green-500 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                    <FaCheck className="w-3 h-3" />
                  </span>
                  Personal recovery stories that inspire hope
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-green-100 text-green-500 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                    <FaCheck className="w-3 h-3" />
                  </span>
                  Updates on new research and treatment approaches
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-green-100 text-green-500 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                    <FaCheck className="w-3 h-3" />
                  </span>
                  Early access to community features and events
                </li>
              </ul>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaEnvelope className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`block w-full pl-10 pr-3 py-3 border ${error ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="Your email address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={!!error}
                    aria-describedby={error ? "email-error" : undefined}
                  />
                </div>
                {error && (
                  <p id="email-error" className="mt-1 text-sm text-red-600">
                    {error}
                  </p>
                )}
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className={`w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-md hover:bg-blue-700 transition-all ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Subscribe to Newsletter'
                )}
              </motion.button>
            </form>
            
            <div className="mt-4 flex items-center text-sm text-gray-500">
              <FaShieldAlt className="w-4 h-4 mr-1 text-gray-400" />
              <span>We respect your privacy. Unsubscribe at any time.</span>
            </div>
          </>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-6"
          >
            <div className="inline-flex items-center justify-center bg-green-100 rounded-full p-3 mb-6">
              <FaCheck className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You for Subscribing!</h3>
            <p className="text-gray-600">
              We've sent a confirmation email to <span className="font-medium">{email}</span>. 
              Please check your inbox and confirm your subscription.
            </p>
            
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700">
                If you don't see the email in your inbox, please check your spam folder and add us to your contacts.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NewsletterSignup;
