"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import Hero from '@/components/home/Hero';
import JourneySection from '@/components/home/JourneySection';
import { FaHeart, FaUsers, FaHandHoldingHeart, FaBookOpen } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Journey Section */}
      <JourneySection />
      
      {/* About PTSDToday */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About PTSDToday</h2>
              <p className="text-lg text-gray-600 mb-4">
                PTSDToday is a non-profit initiative dedicated to making trauma resources accessible to everyone.
                Our mission is to provide education, support, and hope to individuals affected by PTSD and trauma.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that healing is possible, and that no one should have to navigate the path to recovery alone.
                Through evidence-based resources, community support, and reducing stigma, we're working toward a world
                where trauma survivors have the tools they need to heal and thrive.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/assessment"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-sm"
                >
                  Take Self-Assessment
                </Link>
                <Link
                  href="/resources"
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all"
                >
                  Explore Resources
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 md:order-2 flex justify-center"
            >
              <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-md">
                {[
                  { icon: <FaHeart className="w-8 h-8 text-red-500" />, title: "Compassionate", desc: "Resources created with sensitivity and care" },
                  { icon: <FaUsers className="w-8 h-8 text-blue-500" />, title: "Community", desc: "You are not alone on your healing journey" },
                  { icon: <FaBookOpen className="w-8 h-8 text-green-500" />, title: "Educational", desc: "Evidence-based information and tools" },
                  { icon: <FaHandHoldingHeart className="w-8 h-8 text-purple-500" />, title: "Supportive", desc: "Guidance to professional help and resources" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="bg-white p-4 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center"
                  >
                    <div className="mb-3">{item.icon}</div>
                    <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Understanding PTSD
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl opacity-90 max-w-3xl mx-auto"
            >
              Post-Traumatic Stress Disorder affects millions worldwide, but with proper support and treatment, healing is possible.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "7-8%", label: "of adults in the US will experience PTSD in their lifetime" },
              { number: "70%", label: "of adults worldwide experience at least one traumatic event" },
              { number: "5.2M", label: "Americans experience PTSD during a given year" },
              { number: "67%", label: "improvement with evidence-based treatment" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="text-3xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center text-sm opacity-80"
          >
            <p>Sources: National Center for PTSD, VA.gov, National Institute of Mental Health</p>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tools and support to help you on your healing journey
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Self-Assessment",
                description: "Take our screening quiz to better understand your symptoms and find appropriate resources.",
                link: "/assessment",
                linkText: "Take the Assessment"
              },
              {
                title: "Crisis Support",
                description: "Access immediate help through crisis hotlines and text services available 24/7.",
                link: "/resources#hotlines",
                linkText: "Find Support"
              },
              {
                title: "Coping Skills",
                description: "Learn practical techniques for managing symptoms and building resilience.",
                link: "/resources#coping",
                linkText: "Explore Techniques"
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 flex flex-col h-full"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{resource.description}</p>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href={resource.link}
                    className="w-full block text-center px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all"
                  >
                    {resource.linkText}
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="p-8 md:p-12 text-white">
              <div className="md:flex items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">Join Our Community</h2>
                  <p className="text-blue-100 max-w-xl">Connect with others, share experiences, and access exclusive resources to support your healing journey.</p>
                </div>
                <div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/community"
                      className="px-8 py-3 bg-white text-blue-700 rounded-lg font-medium shadow-md hover:bg-blue-50 transition-all inline-block"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
