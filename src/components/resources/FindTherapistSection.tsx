"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaClipboardCheck, FaRegQuestionCircle } from 'react-icons/fa';

const FindTherapistSection = () => {
  const [showModal, setShowModal] = useState(false);

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

  const therapistTips = [
    {
      title: "Look for Trauma Specialization",
      description: "Seek therapists who specialize in trauma treatment and have experience with PTSD.",
      icon: <FaClipboardCheck className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Ask About Therapy Approaches",
      description: "Evidence-based approaches for PTSD include Cognitive Processing Therapy (CPT), Prolonged Exposure (PE), and EMDR.",
      icon: <FaRegQuestionCircle className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Consider Telehealth Options",
      description: "Many therapists now offer virtual sessions, which can make therapy more accessible.",
      icon: <FaSearch className="h-6 w-6 text-blue-500" />
    }
  ];

  return (
    <section id="therapy" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Find a Therapist
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Working with a qualified mental health professional can be an important part of healing from trauma. 
            Let us help you find the right support.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {therapistTips.map((tip, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  {tip.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{tip.title}</h3>
              </div>
              <p className="text-gray-600">{tip.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <button
              onClick={() => setShowModal(true)}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium shadow-md hover:bg-blue-700 transition-all flex items-center justify-center mx-auto"
            >
              <FaSearch className="mr-2" />
              Find a Therapist Near You
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-blue-50 rounded-xl p-6 md:p-8 border border-blue-100"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Additional Resources for Finding Help</h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <h4 className="font-medium mb-2">Therapy Directories</h4>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <a 
                    href="https://www.psychologytoday.com/us/therapists/trauma-and-ptsd" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Psychology Today
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.goodtherapy.org/find-therapist.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Good Therapy
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.therapyforblackgirls.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Therapy for Black Girls
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">PTSD Treatment Programs</h4>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <a 
                    href="https://www.va.gov/find-locations/?facilityType=vet_center" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    VA PTSD Programs (for Veterans)
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.sidran.org/help-desk/find-a-therapist/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Sidran Institute Trauma Therapist Finder
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Find a Therapist Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Find a Therapist</h3>
                <button 
                  onClick={() => setShowModal(false)}
                  className="p-2 rounded-full hover:bg-gray-100"
                  aria-label="Close modal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              <div className="mb-8">
                <p className="text-gray-600 mb-4">
                  Finding the right therapist is a critical step in your healing journey. We've partnered with Psychology Today to help you find qualified therapists who specialize in trauma and PTSD treatment.
                </p>
                <p className="text-gray-600 mb-4">
                  When you click the link below, you'll be redirected to Psychology Today's therapist directory where you can:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 mb-4">
                  <li>Search for therapists in your area</li>
                  <li>Filter by specialization in trauma and PTSD</li>
                  <li>Find providers who accept your insurance</li>
                  <li>Choose between in-person and telehealth options</li>
                </ul>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <a 
                  href="https://www.psychologytoday.com/us/therapists/trauma-and-ptsd" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-md hover:bg-blue-700 transition-all text-center"
                >
                  Find a Therapist on Psychology Today
                </a>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default FindTherapistSection;
