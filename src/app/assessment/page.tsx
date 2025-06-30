'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaChevronRight, FaShieldAlt, FaInfoCircle } from 'react-icons/fa';
import AssessmentQuiz from '@/components/assessment/AssessmentQuiz';
import AssessmentResults from '@/components/assessment/AssessmentResults';

export default function Assessment() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const maxScore = 40; // Based on the PCL-5 scoring system (10 questions, max 4 points each)
  
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

  const handleQuizComplete = (finalScore: number, userAnswers: number[]) => {
    setScore(finalScore);
    setAnswers(userAnswers);
    setQuizCompleted(true);
    
    // Scroll to top for results
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setQuizCompleted(false);
    setScore(0);
    setAnswers([]);
  };

  return (
    <main>
      {!quizStarted ? (
        // Introduction page
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center mb-12"
            >
              <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                PTSD Self-Assessment
              </motion.h1>
              <motion.p variants={itemVariants} className="text-xl text-gray-600">
                A simple screening tool to help you understand your symptoms
              </motion.p>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="bg-blue-50 border border-blue-100 rounded-xl p-6 md:p-8 mb-10"
            >
              <div className="flex items-start">
                <div className="mr-4 pt-1">
                  <FaInfoCircle className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">About This Assessment</h2>
                  <p className="text-gray-700 mb-4">
                    This brief assessment is based on common symptoms of Post-Traumatic Stress Disorder (PTSD). 
                    It can help you identify if you're experiencing symptoms that may be related to trauma.
                  </p>
                  <p className="text-gray-700">
                    While this tool can provide helpful insights, it is not a diagnostic tool. Only a qualified 
                    healthcare professional can provide a proper diagnosis and treatment recommendations.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mb-10">
                <div className="p-6 md:p-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Before You Begin</h2>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <FaChevronRight className="h-4 w-4 text-green-600" />
                      </div>
                      <span>This assessment takes approximately 2-3 minutes to complete</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <FaChevronRight className="h-4 w-4 text-green-600" />
                      </div>
                      <span>You'll be asked about your experiences over the past month</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <FaChevronRight className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Try to answer as honestly as possible for the most accurate results</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <FaChevronRight className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Your responses are not stored or shared with anyone</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col md:flex-row gap-4 justify-center mb-10"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1"
              >
                <button
                  onClick={() => setQuizStarted(true)}
                  className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-md hover:bg-blue-700 transition-all flex items-center justify-center"
                >
                  Begin Assessment
                  <FaChevronRight className="ml-2" />
                </button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1"
              >
                <Link
                  href="/resources"
                  className="w-full px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all flex items-center justify-center"
                >
                  View Resources Instead
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="text-center text-sm text-gray-500 flex items-center justify-center"
            >
              <FaShieldAlt className="mr-2" />
              <span>Your privacy matters. This assessment is anonymous and your data remains on your device.</span>
            </motion.div>
          </div>
        </section>
      ) : !quizCompleted ? (
        // Quiz in progress
        <section className="py-8 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AssessmentQuiz onComplete={handleQuizComplete} />
          </div>
        </section>
      ) : (
        // Quiz completed, show results
        <section className="py-8 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AssessmentResults score={score} maxScore={maxScore} answers={answers} />
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  onClick={resetQuiz}
                  className="w-full px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all"
                >
                  Retake Assessment
                </button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/resources"
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-md hover:bg-blue-700 transition-all flex items-center justify-center"
                >
                  Find Support Resources
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Additional Resources Section - shown at the bottom regardless of quiz state */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Additional Resources</h2>
            <p className="text-gray-600">
              Whether you decide to take the assessment or not, these resources are available to help:
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/resources#hotlines">
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-lg p-6 shadow-md h-full border border-gray-100 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Crisis Support</h3>
                <p className="text-gray-600">
                  Immediate help from crisis hotlines and text services.
                </p>
              </motion.div>
            </Link>
            
            <Link href="/resources#therapy">
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-lg p-6 shadow-md h-full border border-gray-100 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Find a Therapist</h3>
                <p className="text-gray-600">
                  Connect with mental health professionals specializing in trauma.
                </p>
              </motion.div>
            </Link>
            
            <Link href="/resources#coping">
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-lg p-6 shadow-md h-full border border-gray-100 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Coping Skills</h3>
                <p className="text-gray-600">
                  Practical techniques to help manage symptoms and build resilience.
                </p>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
