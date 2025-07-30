import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">PTSDToday</h3>
            <p className="text-sm">Evidence-based support for PTSD, trauma, and emotional health.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about-ptsd" className="hover:text-brand-blue-green">About PTSD</Link></li>
              <li><Link to="/healing-tools" className="hover:text-brand-blue-green">Healing Tools</Link></li>
              <li><Link to="/find-help" className="hover:text-brand-blue-green">Find Help</Link></li>
              <li><Link to="/education" className="hover:text-brand-blue-green">Education</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Legal & Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="hover:text-brand-blue-green">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="hover:text-brand-blue-green">Cookie Policy</Link></li>
              <li><Link to="/accessibility" className="hover:text-brand-blue-green">Accessibility Statement</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm">
          <p className="mb-4"><strong>Disclaimer:</strong> This website is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>
          <p>&copy; {new Date().getFullYear()} PTSDToday. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
