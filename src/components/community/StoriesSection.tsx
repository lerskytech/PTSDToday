"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteRight, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Story interface
interface Story {
  id: number;
  name: string;
  age?: number;
  location?: string;
  avatar: string; // path to avatar image or placeholder
  shortQuote: string;
  fullStory: string;
  tags: string[];
}

const StoriesSection = () => {
  const [activeStoryId, setActiveStoryId] = useState<number | null>(null);
  
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

  // Sample stories data - these would be real testimonials with permission in a production setting
  const stories: Story[] = [
    {
      id: 1,
      name: "Emma",
      age: 34,
      location: "Oregon",
      avatar: "/assets/avatars/avatar-1.jpg", // This would be a real image in production
      shortQuote: "Finding a community that understood my experiences changed everything for me.",
      fullStory: "After serving two tours in Afghanistan, I came home a different person. Nightmares, flashbacks, and constant anxiety became my new normal. I pushed away friends and family, thinking no one could possibly understand. For years, I suffered in silence, convinced this was just how my life would be now.\n\nWhen I finally reached out for help, it wasn't easy. My first therapist wasn't a good fit, and I nearly gave up. But then I found a specialist in military trauma and a support group of fellow veterans. For the first time, I was in a room with people who truly understood.\n\nRecovery hasn't been linear. There are still hard days, but now I have tools to manage my symptoms and a community that supports me. I've learned that healing from PTSD doesn't mean forgetting or never feeling triggered again—it means building resilience and reclaiming your life one step at a time.\n\nIf you're struggling, please know that reaching out is worth it. You deserve support, and you are not alone on this journey.",
      tags: ["Military", "Peer Support", "Therapy"]
    },
    {
      id: 2,
      name: "Michael",
      age: 42,
      location: "Illinois",
      avatar: "/assets/avatars/avatar-2.jpg",
      shortQuote: "Treatment wasn't easy, but it gave me back a future I thought I'd lost.",
      fullStory: "The car accident happened six years ago, but for a long time afterward, it was as if I was still trapped in that moment. The screeching tires, shattering glass, and overwhelming helplessness—these sensations would flood back without warning. I developed an intense fear of driving and had panic attacks even as a passenger.\n\nAt first, I tried to ignore it. I told myself I was just being dramatic and needed to 'toughen up.' But the symptoms only got worse. I couldn't sleep, couldn't focus at work, and started isolating from everyone I cared about.\n\nA friend finally convinced me to see a therapist who specialized in trauma. Being diagnosed with PTSD was actually a relief—there was a name for what I was experiencing, and more importantly, there were treatments that could help.\n\nCBT and EMDR therapy were challenging. Confronting my trauma wasn't easy, but with patient guidance, I learned to process what happened and develop healthier coping mechanisms. Gradually, the flashbacks became less intense, and my panic attacks less frequent.\n\nToday, I drive again. I've rebuilt relationships and found new purpose in volunteering with accident survivors. PTSD doesn't define me anymore. If you're struggling after trauma, please know that healing is possible, even when it seems impossible.",
      tags: ["Accident", "EMDR", "CBT"]
    },
    {
      id: 3,
      name: "Sofia",
      age: 29,
      location: "California",
      avatar: "/assets/avatars/avatar-3.jpg",
      shortQuote: "Healing isn't linear, but every step forward matters, no matter how small.",
      fullStory: "Growing up in a home with domestic violence left invisible scars that I carried into adulthood. I didn't understand why I was always on edge, why certain sounds made me freeze, or why I struggled with relationships. I thought there was just something wrong with me.\n\nIt wasn't until I started therapy in my mid-twenties that I learned about complex PTSD and how childhood trauma can affect our nervous systems and patterns of behavior. This knowledge was the first step in a long healing journey.\n\nI started with trauma-informed therapy, which helped me understand my triggers and reactions. Mindfulness practices taught me how to ground myself when I felt overwhelmed. Most importantly, I found a support group of other survivors who validated my experiences and showed me I wasn't alone.\n\nHealing hasn't been a straight line. There are setbacks and difficult days. But I've learned to celebrate the small victories—sleeping through the night, setting boundaries in relationships, finding moments of genuine joy. These are all signs of progress.\n\nIf you're dealing with the effects of childhood trauma, please know that your feelings are valid, your experiences matter, and healing is possible. Be patient with yourself and don't hesitate to reach out for the support you deserve.",
      tags: ["Childhood Trauma", "Support Groups", "Mindfulness"]
    }
  ];

  // Function to open story modal
  const openStory = (id: number) => {
    setActiveStoryId(id);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  // Function to close story modal
  const closeStory = () => {
    setActiveStoryId(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Get active story
  const activeStory = activeStoryId !== null ? stories.find(story => story.id === activeStoryId) : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="text-center mb-12"
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Healing Stories
        </motion.h2>
        <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
          Read personal accounts from people who have experienced PTSD and are on their healing journey.
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story, index) => (
          <motion.div
            key={story.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
            className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 flex flex-col h-full transition-all duration-300"
          >
            <div className="p-6 flex-1 flex flex-col">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold mr-4">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{story.name}</h3>
                    {(story.age || story.location) && (
                      <p className="text-sm text-gray-500">
                        {story.age && `${story.age}, `}{story.location}
                      </p>
                    )}
                  </div>
                </div>
                <div className="relative pl-6 pr-4 italic text-gray-700">
                  <FaQuoteLeft className="absolute top-0 left-0 text-blue-200 text-lg" />
                  <p>{story.shortQuote}</p>
                  <FaQuoteRight className="absolute bottom-0 right-0 text-blue-200 text-lg" />
                </div>
              </div>
              
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {story.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button
                  onClick={() => openStory(story.id)}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all"
                >
                  Read Full Story
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA to share your story */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Share Your Story</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Your experience matters and could help others on their healing journey. 
          If you'd like to share your story of living with and healing from PTSD, 
          we'd be honored to hear from you.
        </p>
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <a 
            href="mailto:stories@ptsdtoday.org" 
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-md hover:bg-blue-700 transition-all inline-block"
          >
            Submit Your Story
          </a>
        </motion.div>
      </motion.div>

      {/* Story Modal */}
      {activeStory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold mr-4">
                    {activeStory.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{activeStory.name}</h3>
                    {(activeStory.age || activeStory.location) && (
                      <p className="text-sm text-gray-500">
                        {activeStory.age && `${activeStory.age}, `}{activeStory.location}
                      </p>
                    )}
                  </div>
                </div>
                <button 
                  onClick={closeStory}
                  className="p-2 rounded-full hover:bg-gray-100"
                  aria-label="Close modal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              <div className="prose max-w-none">
                {activeStory.fullStory.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-4 text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="mt-8 flex flex-wrap gap-2">
                {activeStory.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex justify-between items-center">
                <button
                  onClick={() => {
                    const prevIndex = stories.findIndex(s => s.id === activeStoryId) - 1;
                    if (prevIndex >= 0) {
                      setActiveStoryId(stories[prevIndex].id);
                    }
                  }}
                  disabled={stories.findIndex(s => s.id === activeStoryId) === 0}
                  className={`flex items-center ${
                    stories.findIndex(s => s.id === activeStoryId) === 0
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-blue-600 hover:text-blue-800'
                  }`}
                >
                  <FaChevronLeft className="mr-1" /> Previous Story
                </button>

                <button
                  onClick={closeStory}
                  className="px-5 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Close
                </button>

                <button
                  onClick={() => {
                    const nextIndex = stories.findIndex(s => s.id === activeStoryId) + 1;
                    if (nextIndex < stories.length) {
                      setActiveStoryId(stories[nextIndex].id);
                    }
                  }}
                  disabled={stories.findIndex(s => s.id === activeStoryId) === stories.length - 1}
                  className={`flex items-center ${
                    stories.findIndex(s => s.id === activeStoryId) === stories.length - 1
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-blue-600 hover:text-blue-800'
                  }`}
                >
                  Next Story <FaChevronRight className="ml-1" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Disclaimer */}
      <div className="mt-12 text-center text-sm text-gray-500">
        <p>
          Stories shared with permission. Names and identifying details may have been changed to protect privacy.
          These accounts reflect individual experiences and are not meant to replace professional advice.
        </p>
      </div>
    </div>
  );
};

export default StoriesSection;
