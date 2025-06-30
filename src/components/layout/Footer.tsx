"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About / Mission */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold mb-4">PTSDToday</h2>
            <p className="text-gray-300 mb-4">
              A nonprofit open-source platform providing resources, self-assessment tools, and 
              community support for those dealing with PTSD. Our mission is to make healing 
              accessible to everyone, today.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://twitter.com" 
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-white"
              >
                <FaTwitter size={20} />
              </motion.a>
              <motion.a
                href="https://facebook.com" 
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-white"
              >
                <FaFacebook size={20} />
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-white"
              >
                <FaInstagram size={20} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={20} />
              </motion.a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/assessment" className="text-gray-300 hover:text-white">
                  Self-Assessment
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-white">
                  Find Help
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-300 hover:text-white">
                  Community
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources#hotlines" className="text-gray-300 hover:text-white">
                  Crisis Hotlines
                </Link>
              </li>
              <li>
                <Link href="/resources#therapy" className="text-gray-300 hover:text-white">
                  Find a Therapist
                </Link>
              </li>
              <li>
                <Link href="/resources#coping" className="text-gray-300 hover:text-white">
                  Coping Skills
                </Link>
              </li>
              <li>
                <Link href="/resources#reading" className="text-gray-300 hover:text-white">
                  Recommended Reading
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} PTSDToday. All rights reserved. This site is not intended to provide medical advice.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white">
              Terms of Use
            </Link>
            <Link href="/accessibility" className="text-gray-400 hover:text-white">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
