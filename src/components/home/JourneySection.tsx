import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const JourneySection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="start-journey" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            variants={itemVariants}
          >
            Start Your Journey to Healing
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Recovery from PTSD is possible. We've designed a path to help you understand your 
            symptoms, find appropriate resources, and connect with others who understand.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Step 1: Self Assessment */}
          <motion.div 
            className="bg-blue-50 rounded-xl p-8 border border-blue-100 relative overflow-hidden group"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-bl-full -mr-12 -mt-12 transition-all duration-300 group-hover:bg-blue-200"></div>
            <div className="relative z-10">
              <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-white mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                  <path d="M9 14h.01"></path>
                  <path d="M13 14h.01"></path>
                  <path d="M9 18h.01"></path>
                  <path d="M13 18h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Self-Assessment</h3>
              <p className="text-gray-600 mb-6">
                Take our interactive PTSD symptom quiz to better understand what you're experiencing 
                and get personalized recommendations.
              </p>
              <Link 
                href="/assessment"
                className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800"
              >
                Take the Assessment
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </motion.div>
          
          {/* Step 2: Find Help */}
          <motion.div 
            className="bg-green-50 rounded-xl p-8 border border-green-100 relative overflow-hidden group"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-100 rounded-bl-full -mr-12 -mt-12 transition-all duration-300 group-hover:bg-green-200"></div>
            <div className="relative z-10">
              <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center text-white mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 2v5h5"></path>
                  <path d="M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7"></path>
                  <path d="M7 15v6"></path>
                  <path d="M3.5 12A3.5 3.5 0 0 0 7 15.5"></path>
                  <path d="M7 8.5A3.5 3.5 0 0 0 3.5 12"></path>
                  <path d="M7 15.5A3.5 3.5 0 0 0 10.5 12h.5"></path>
                  <path d="M21 6v-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Find Resources</h3>
              <p className="text-gray-600 mb-6">
                Access our curated collection of resources, including crisis hotlines, 
                therapy options, coping strategies, and educational materials.
              </p>
              <Link 
                href="/resources"
                className="inline-flex items-center font-medium text-green-600 hover:text-green-800"
              >
                Explore Resources
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </motion.div>
          
          {/* Step 3: Community */}
          <motion.div 
            className="bg-purple-50 rounded-xl p-8 border border-purple-100 relative overflow-hidden group"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-100 rounded-bl-full -mr-12 -mt-12 transition-all duration-300 group-hover:bg-purple-200"></div>
            <div className="relative z-10">
              <div className="bg-purple-500 rounded-full w-12 h-12 flex items-center justify-center text-white mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Join Our Community</h3>
              <p className="text-gray-600 mb-6">
                Connect with others on similar healing journeys, share your story, 
                and subscribe to our newsletter for the latest resources and support.
              </p>
              <Link 
                href="/community"
                className="inline-flex items-center font-medium text-purple-600 hover:text-purple-800"
              >
                Connect Now
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;
