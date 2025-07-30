import React from 'react';

const EmailCommunity = () => {
  return (
    <section className="bg-brand-blue-green text-white py-12 md:py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">You Are Not Alone</h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">Join our community. Receive supportive content, resources, and reminders that healing is a journey, not a destination.</p>
        <form className="max-w-lg mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full px-4 py-3 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent"
              aria-label="Email Address"
            />
            <button 
              type="submit" 
              className="w-full sm:w-auto bg-brand-accent text-white font-bold py-3 px-8 rounded-lg hover:bg-amber-600 transition-colors duration-300 flex-shrink-0"
            >
              Join Us
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailCommunity;
