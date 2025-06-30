import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/assets/pattern.svg')] bg-repeat"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block">PTSDToday</span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-blue-100 font-light mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Start Healing from PTSD—Today
            </motion.p>
            
            <p className="text-blue-100 mb-8 text-lg max-w-lg">
              A compassionate space providing resources, support, and tools for anyone 
              affected by trauma. You're not alone on this journey.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/assessment" 
                  className="px-8 py-4 bg-white text-blue-800 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
                  aria-label="Take the self-assessment quiz"
                >
                  Start Your Journey
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/resources" 
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-all"
                  aria-label="Find resources for PTSD"
                >
                  Find Resources
                </Link>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Hero image/video */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg h-[400px] rounded-xl overflow-hidden shadow-2xl">
              {/* Placeholder for hero image/AI generated video */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <button 
                  className="p-4 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-white hover:bg-white/30 transition-all"
                  aria-label="Play video"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </button>
              </div>
              <div className="absolute inset-0">
                {/* This would be replaced with actual video or AI-generated content */}
                <div className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <p className="text-white/70 text-lg font-light">Sora/AI video placeholder</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2 
          }}
        >
          <a 
            href="#start-journey" 
            className="flex flex-col items-center text-sm text-blue-100"
            aria-label="Scroll to start your journey"
          >
            <span className="mb-2">Explore More</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 13L12 18L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 7L12 12L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
