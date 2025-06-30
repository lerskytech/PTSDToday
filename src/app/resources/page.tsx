"use client";

import HotlinesSection from '@/components/resources/HotlinesSection';
import FindTherapistSection from '@/components/resources/FindTherapistSection';
import CopingSkillsToolkit from '@/components/resources/CopingSkillsToolkit';
import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaPeopleCarry, FaBookOpen, FaSeedling } from 'react-icons/fa';
import Link from 'next/link';

export default function Resources() {
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
              Find Help & Resources
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl opacity-90 mb-8">
              Support and tools for your healing journey, all in one place.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
              <a href="#hotlines" className="px-6 py-3 bg-white text-blue-700 rounded-lg font-medium hover:bg-blue-50 transition-all">
                Crisis Hotlines
              </a>
              <a href="#therapy" className="px-6 py-3 bg-blue-700 text-white rounded-lg font-medium border border-blue-400 hover:bg-blue-600 transition-all">
                Find a Therapist
              </a>
              <a href="#coping" className="px-6 py-3 bg-blue-700 text-white rounded-lg font-medium border border-blue-400 hover:bg-blue-600 transition-all">
                Coping Skills
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Resource Navigation */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center flex-wrap md:flex-nowrap gap-4 text-center">
            <Link href="#hotlines" className="flex flex-col items-center py-2 px-4 rounded-lg hover:bg-gray-50">
              <FaHandHoldingHeart className="text-blue-600 text-2xl mb-2" />
              <span className="text-gray-700">Crisis Support</span>
            </Link>
            <Link href="#therapy" className="flex flex-col items-center py-2 px-4 rounded-lg hover:bg-gray-50">
              <FaPeopleCarry className="text-blue-600 text-2xl mb-2" />
              <span className="text-gray-700">Find a Therapist</span>
            </Link>
            <Link href="#coping" className="flex flex-col items-center py-2 px-4 rounded-lg hover:bg-gray-50">
              <FaBookOpen className="text-blue-600 text-2xl mb-2" />
              <span className="text-gray-700">Coping Skills</span>
            </Link>
            <Link href="#self-care" className="flex flex-col items-center py-2 px-4 rounded-lg hover:bg-gray-50">
              <FaSeedling className="text-blue-600 text-2xl mb-2" />
              <span className="text-gray-700">Self-Care</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Crisis Hotlines Section */}
      <HotlinesSection />

      {/* Find a Therapist Section */}
      <FindTherapistSection />

      {/* Coping Skills Toolkit */}
      <CopingSkillsToolkit />

      {/* Self-Care Section */}
      <section id="self-care" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Self-Care Practices
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple practices to nurture your wellbeing and support your healing journey.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Physical Self-Care",
                description: "Activities that nurture your body and physical wellbeing",
                practices: [
                  "Prioritize sleep and create a relaxing bedtime routine",
                  "Move your body in ways that feel good (walking, stretching, dancing)",
                  "Practice mindful eating and stay hydrated",
                  "Spend time in nature whenever possible",
                  "Take breaks from screens and digital devices"
                ],
                color: "bg-green-50 border-green-100"
              },
              {
                title: "Emotional Self-Care",
                description: "Practices that honor your emotional needs and experiences",
                practices: [
                  "Journal about your thoughts and feelings",
                  "Allow yourself to cry when needed",
                  "Practice self-compassion and positive self-talk",
                  "Set healthy boundaries in relationships",
                  "Engage with art, music, or other creative outlets"
                ],
                color: "bg-purple-50 border-purple-100"
              },
              {
                title: "Connection Self-Care",
                description: "Ways to nurture meaningful connections with others",
                practices: [
                  "Reach out to supportive friends or family",
                  "Consider joining a support group",
                  "Practice active listening in conversations",
                  "Ask for help when you need it",
                  "Spend time with pets or animals"
                ],
                color: "bg-blue-50 border-blue-100"
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-xl overflow-hidden shadow-sm border ${category.color}`}
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <ul className="space-y-2 text-gray-700">
                    {category.practices.map((practice, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {practice}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 text-center max-w-2xl mx-auto"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Remember</h3>
            <p className="text-gray-700">
              Self-care is not selfish. Taking care of your needs is an essential part of healing from trauma.
              Start small, be consistent, and celebrate your progress along the way.
            </p>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">You Are Not Alone</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Healing is possible, and support is available. Take the next step in your journey today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/assessment"
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all shadow-md"
              >
                Take the Self-Assessment
              </Link>
              <Link 
                href="/community"
                className="px-8 py-3 bg-blue-700 text-white rounded-lg font-medium border border-blue-400 hover:bg-blue-500 transition-all shadow-md"
              >
                Join Our Community
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
