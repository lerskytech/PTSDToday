import React from 'react';
import { Link } from 'react-router-dom';
import SoraImage from './SoraImage';

const featuredArticles = [
  {
    id: 1,
    category: 'Understanding PTSD',
    title: 'What Are Intrusive Thoughts? And How to Cope',
    excerpt: 'Learn about the nature of intrusive thoughts, why they happen, and effective strategies to manage them.',
    image: '/images/20250729_1954_Morning Journaling Scene_simple_compose_01k1c9m0tbe4vr8n2qa1rsek1w.png',
    link: '/education/what-are-intrusive-thoughts',
  },
  {
    id: 2,
    category: 'For Family & Friends',
    title: 'How to Support a Loved One with PTSD',
    excerpt: 'Practical advice for friends and family on how to provide meaningful support without burning out.',
    image: '/images/20250729_1925_Books and Plant_simple_compose_01k1c82q7ze9bs337808vphtha.png',
    link: '/education/supporting-a-loved-one',
  },
  {
    id: 3,
    category: 'Treatment Options',
    title: 'An Introduction to EMDR Therapy',
    excerpt: 'Explore the basics of Eye Movement Desensitization and Reprocessing (EMDR) therapy, a leading treatment for trauma.',
    image: '/images/20250729_2001_Cozy Learning Corner_simple_compose_01k1ca1kjwef6r01psf5f16fwa.png',
    link: '/education/intro-to-emdr',
  },
];

const EducationHubPreview = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">From the Education Hub</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">Knowledge is a powerful tool for healing. Start with these featured articles.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <Link to={article.link} key={article.id} className="group block bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <SoraImage src={article.image} alt={article.title} aspect="3:2" />
              <div className="p-6">
                <p className="text-sm text-brand-blue-green font-semibold mb-2">{article.category}</p>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-brand-accent transition-colors duration-300">{article.title}</h3>
                <p className="text-gray-600">{article.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/education" className="inline-block bg-brand-accent text-white font-bold py-3 px-8 rounded-lg hover:bg-amber-600 transition-colors duration-300">
            Explore All Resources
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EducationHubPreview;
