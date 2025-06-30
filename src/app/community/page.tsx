"use client";

import { FaUsers, FaEnvelope, FaPodcast, FaHandsHelping, FaLock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import NewsletterSignup from '@/components/community/NewsletterSignup';
import StoriesSection from '@/components/community/StoriesSection';

export default function Community() {
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

  // Support options data
  const supportOptions = [
    {
      icon: <FaUsers className="h-10 w-10 text-blue-500" />,
      title: "Support Groups",
      description: "Connect with others who understand what you're going through in a safe, moderated environment.",
      link: "#support-groups",
      isComingSoon: true
    },
    {
      icon: <FaEnvelope className="h-10 w-10 text-blue-500" />,
      title: "Newsletter",
      description: "Receive regular updates with coping strategies, resources, and community stories.",
      link: "#newsletter",
      isComingSoon: false
    },
    {
      icon: <FaPodcast className="h-10 w-10 text-blue-500" />,
      title: "Healing Stories",
      description: "Read personal accounts of healing and recovery from PTSD survivors.",
      link: "#stories",
      isComingSoon: false
    },
    {
      icon: <FaHandsHelping className="h-10 w-10 text-blue-500" />,
      title: "Peer Support",
      description: "One-on-one connections with trained peer supporters who have lived experience with PTSD.",
      link: "#peer-support",
      isComingSoon: true
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
              Join Our Community
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl opacity-90 mb-8">
              Connect with others on the healing journey. You don't have to walk this path alone.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
              <a href="#newsletter" className="px-6 py-3 bg-white text-blue-700 rounded-lg font-medium hover:bg-blue-50 transition-all">
                Subscribe to Newsletter
              </a>
              <a href="#stories" className="px-6 py-3 bg-blue-700 text-white rounded-lg font-medium border border-blue-400 hover:bg-blue-600 transition-all">
                Read Recovery Stories
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Community Support Options
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Different ways to connect and find support in our growing community.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportOptions.map((option, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center flex flex-col justify-between h-full relative transition-all duration-300"
              >
                {option.isComingSoon && (
                  <div className="absolute top-4 right-4 bg-blue-100 text-blue-800 text-xs py-1 px-2 rounded-full">
                    Coming Soon
                  </div>
                )}
                <div>
                  <div className="flex justify-center mb-4">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{option.title}</h3>
                  <p className="text-gray-600 mb-6">{option.description}</p>
                </div>
                
                {option.isComingSoon ? (
                  <button
                    disabled
                    className="w-full px-4 py-2 bg-gray-100 text-gray-500 rounded-lg font-medium cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                ) : (
                  <a
                    href={option.link}
                    className="w-full block px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all"
                  >
                    Learn More
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-8">
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Subscribe to Our Newsletter
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-gray-600">
                Join our community and receive helpful resources, insights, and updates.
              </motion.p>
            </div>
            
            <motion.div variants={itemVariants}>
              <NewsletterSignup />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stories Section */}
      <section id="stories" className="py-16 bg-white">
        <StoriesSection />
      </section>

      {/* Support Groups (Coming Soon) */}
      <section id="support-groups" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Online Support Groups
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Coming soon: Connect with others who understand what you're going through in a safe, 
              moderated environment.
            </motion.p>
          </motion.div>

          <div className="max-w-3xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
            <div className="p-6 md:p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaUsers className="h-10 w-10 text-blue-600" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Support Groups Launching Soon</h3>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                We're currently developing a safe, supportive space for moderated group discussions.
                Subscribe to our newsletter to be notified when this feature launches.
              </p>
              
              <div className="inline-flex items-center text-gray-700 bg-gray-100 px-4 py-2 rounded-lg mb-8">
                <FaLock className="mr-2" /> All groups will be secure and professionally moderated
              </div>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <a 
                  href="#newsletter" 
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-md hover:bg-blue-700 transition-all inline-block"
                >
                  Get Launch Updates
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Peer Support (Coming Soon) */}
      <section id="peer-support" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Peer Support Program
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Coming soon: One-on-one connections with trained peer supporters who have lived experience with PTSD.
            </motion.p>
          </motion.div>

          <div className="max-w-3xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
            <div className="p-6 md:p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaHandsHelping className="h-10 w-10 text-blue-600" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Peer Support Network Launching Soon</h3>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                We're building a network of trained peer supporters who have lived experience with trauma and PTSD.
                Our peer supporters will receive specialized training to provide empathetic listening and valuable perspective.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-xl mx-auto">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-1">For Those Seeking Support</h4>
                  <p className="text-sm text-gray-600">Connect with someone who understands your experience</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-1">For Potential Peer Supporters</h4>
                  <p className="text-sm text-gray-600">Use your experience to help others on their journey</p>
                </div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <a 
                  href="#newsletter" 
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-md hover:bg-blue-700 transition-all inline-block"
                >
                  Get Launch Updates
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* External Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Additional Community Resources
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
              While we build our community features, here are some established resources you can access now:
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "NAMI Connection",
                description: "Recovery support groups for adults living with mental health conditions.",
                link: "https://www.nami.org/Support-Education/Support-Groups/NAMI-Connection"
              },
              {
                title: "PTSD Foundation of America",
                description: "Support groups and community resources for trauma survivors and veterans.",
                link: "https://ptsdusa.org/"
              },
              {
                title: "Mental Health America",
                description: "Peer support resources and online communities across the country.",
                link: "https://www.mhanational.org/find-support-groups"
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-100"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a 
                  href={resource.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Visit Website
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Healing Journey Today</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Take the first step toward healing by connecting with resources, information, and support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/assessment"
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all shadow-md"
              >
                Take the Self-Assessment
              </Link>
              <Link 
                href="/resources"
                className="px-8 py-3 bg-blue-700 text-white rounded-lg font-medium border border-blue-400 hover:bg-blue-500 transition-all shadow-md"
              >
                Find Help Resources
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
