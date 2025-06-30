import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaPhone, FaComment, FaExternalLinkAlt } from 'react-icons/fa';

const hotlines = [
  {
    name: '988 Suicide & Crisis Lifeline',
    description: 'Free and confidential support for people in distress, 24/7.',
    phone: '988',
    textOption: 'Text HOME to 988',
    website: 'https://988lifeline.org/',
    logo: '/assets/988-logo.svg', // Placeholder for real logo
    hours: '24/7',
  },
  {
    name: 'Veterans Crisis Line',
    description: 'Connects Veterans in crisis with qualified responders through a confidential toll-free hotline.',
    phone: '988 (Press 1)',
    textOption: 'Text 838255',
    website: 'https://www.veteranscrisisline.net/',
    logo: '/assets/veterans-crisis-logo.svg', // Placeholder for real logo
    hours: '24/7',
  },
  {
    name: 'Crisis Text Line',
    description: 'Free crisis support via text message. Text with a trained Crisis Counselor.',
    phone: 'N/A',
    textOption: 'Text HOME to 741741',
    website: 'https://www.crisistextline.org/',
    logo: '/assets/crisis-text-logo.svg', // Placeholder for real logo
    hours: '24/7',
  },
  {
    name: 'SAMHSA National Helpline',
    description: 'Treatment referral and information service for individuals facing mental health or substance use disorders.',
    phone: '1-800-662-4357',
    textOption: 'N/A',
    website: 'https://www.samhsa.gov/find-help/national-helpline',
    logo: '/assets/samhsa-logo.svg', // Placeholder for real logo
    hours: '24/7, 365 days a year',
  }
];

const HotlinesSection = () => {
  // Animation variants for staggered animations
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
    <section id="hotlines" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Crisis Hotlines & Immediate Support
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
            If you're in crisis or need immediate support, these resources are available 
            24/7 to provide help when you need it most.
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {hotlines.map((hotline, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              className="bg-blue-50 rounded-xl overflow-hidden shadow-md border border-blue-100 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-shrink-0 mr-4">
                    {/* Placeholder for logo */}
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-800 font-bold">
                      {hotline.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800">{hotline.name}</h3>
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs inline-flex items-center mt-1">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                      Available {hotline.hours}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{hotline.description}</p>
                
                <div className="space-y-3">
                  {/* Phone number */}
                  {hotline.phone !== 'N/A' && (
                    <a 
                      href={`tel:${hotline.phone.replace(/\D/g,'')}`}
                      className="flex items-center space-x-3 text-blue-600 hover:text-blue-800"
                      aria-label={`Call ${hotline.name} at ${hotline.phone}`}
                    >
                      <div className="bg-blue-100 p-2 rounded-full">
                        <FaPhone className="h-5 w-5" />
                      </div>
                      <span className="font-medium">{hotline.phone}</span>
                    </a>
                  )}
                  
                  {/* Text option */}
                  {hotline.textOption !== 'N/A' && (
                    <div className="flex items-center space-x-3 text-blue-600">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <FaComment className="h-5 w-5" />
                      </div>
                      <span className="font-medium">{hotline.textOption}</span>
                    </div>
                  )}
                  
                  {/* Website */}
                  <a 
                    href={hotline.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-blue-600 hover:text-blue-800"
                    aria-label={`Visit ${hotline.name} website`}
                  >
                    <div className="bg-blue-100 p-2 rounded-full">
                      <FaExternalLinkAlt className="h-5 w-5" />
                    </div>
                    <span className="font-medium">Visit Website</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-block px-6 py-3 border border-gray-300 rounded-lg bg-gray-50">
            <p className="text-gray-700">
              If you are in immediate danger, please call <strong>911</strong> or go to your nearest emergency room.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HotlinesSection;
