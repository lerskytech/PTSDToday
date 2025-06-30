"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus, FaInfoCircle } from 'react-icons/fa';

// Type definitions
interface CopingSkill {
  id: number;
  title: string;
  description: string;
  steps: string[];
  infoText: string;
  category: string;
}

const CopingSkillsToolkit = () => {
  // State to track which accordion items are open
  const [openItems, setOpenItems] = useState<number[]>([]);
  // State for skill tooltips
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  // Toggle accordion items
  const toggleItem = (id: number) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter(item => item !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };

  // Toggle tooltip display
  const toggleTooltip = (id: number | null) => {
    setActiveTooltip(id);
  };

  // Coping skills data - trauma-informed strategies
  const copingSkills: CopingSkill[] = [
    {
      id: 1,
      title: "Grounding Techniques (5-4-3-2-1)",
      description: "The 5-4-3-2-1 technique helps anchor you to the present when you're feeling overwhelmed or experiencing flashbacks.",
      steps: [
        "Acknowledge 5 things you can see around you",
        "Acknowledge 4 things you can touch or feel",
        "Acknowledge 3 things you can hear",
        "Acknowledge 2 things you can smell (or like to smell)",
        "Acknowledge 1 thing you can taste (or like to taste)"
      ],
      infoText: "Grounding techniques work by redirecting attention to the present moment and physical sensations, which helps interrupt the stress response cycle and activate the parasympathetic nervous system.",
      category: "Immediate Relief"
    },
    {
      id: 2,
      title: "Box Breathing for Anxiety Management",
      description: "A simple breathing technique that can help calm your nervous system during moments of stress or anxiety.",
      steps: [
        "Breathe in slowly through your nose for a count of 4",
        "Hold your breath for a count of 4",
        "Exhale slowly through your mouth for a count of 4",
        "Hold your breath for a count of 4",
        "Repeat for 3-5 minutes or until you feel calmer"
      ],
      infoText: "Box breathing regulates the autonomic nervous system and has been used by military personnel, first responders, and healthcare professionals to manage acute stress and anxiety.",
      category: "Immediate Relief"
    },
    {
      id: 3,
      title: "Progressive Muscle Relaxation (PMR)",
      description: "A deeper relaxation technique that involves tensing and then releasing different muscle groups to reduce physical tension.",
      steps: [
        "Find a comfortable position sitting or lying down",
        "Start with your feet: tense the muscles as tightly as you can for 5 seconds",
        "Release the tension and notice how your muscles feel as they relax",
        "Move progressively upward through your body (calves, thighs, abdomen, etc.)",
        "Focus on the difference between tension and relaxation"
      ],
      infoText: "PMR helps break the cycle between physical tension and psychological stress. Research shows it can reduce anxiety, improve sleep quality, and help manage trauma symptoms by creating body awareness and control.",
      category: "Physical Techniques"
    },
    {
      id: 9,
      title: "Body Scan Meditation for Trauma",
      description: "A mindful awareness practice specifically adapted for trauma survivors to safely reconnect with bodily sensations.",
      steps: [
        "Find a comfortable position where you feel safe and supported",
        "Begin with several deep breaths, focusing only on the sensation of breathing",
        "Slowly scan your body from feet to head, noticing sensations without judgment",
        "If you encounter areas of tension or discomfort, acknowledge them but don't force relaxation",
        "If you encounter a triggering sensation, gently shift attention to a neutral or pleasant area"
      ],
      infoText: "Unlike traditional meditation, trauma-sensitive body scans emphasize safety and choice. You always have permission to open your eyes, adjust your position, or take a break if needed.",
      category: "Physical Techniques"
    },
    {
      id: 10,
      title: "Container Visualization Exercise",
      description: "A therapeutic technique to help temporarily store overwhelming thoughts and feelings until you're ready to process them.",
      steps: [
        "Imagine a container with a secure lid that can hold difficult thoughts/emotions",
        "Visualize placing intrusive thoughts or overwhelming feelings into this container",
        "Secure the lid, knowing you can return to these contents when you feel safe and supported",
        "Notice the immediate sense of relief as these thoughts are temporarily contained",
        "Remember you can access this container anytime with a therapist or support person"
      ],
      infoText: "This technique was developed as part of trauma therapy protocols and helps create psychological distance from overwhelming emotions without suppressing them completely.",
      category: "Emotional Regulation"
    },
    {
      id: 11,
      title: "Rapid Orientation Grounding (Flashback Protocol)",
      description: "An emergency technique to quickly reorient yourself during flashbacks or dissociation.",
      steps: [
        "State out loud: 'I am [your name], I am [your current age] years old'",
        "State: 'I am safe now. The trauma happened in the past. I am here in [current location]'",
        "Name the current year, season, month, and day of the week",
        "Notice and name 5 objects you can see in your surroundings",
        "If possible, move your body - stand up, stretch, or touch something with texture"
      ],
      infoText: "This protocol helps the brain distinguish between past traumatic memories and present reality by engaging the prefrontal cortex, which can become temporarily deactivated during flashbacks.",
      category: "Immediate Relief"
    },
    {
      id: 4,
      title: "Creating a Safe Space Visualization",
      description: "A guided imagery technique where you mentally create and visit a safe, peaceful place when feeling triggered or anxious.",
      steps: [
        "Close your eyes and take several deep breaths",
        "Imagine a place (real or imagined) where you feel completely safe",
        "Engage all your senses: What do you see? Hear? Smell? Feel?",
        "Include details that make you feel calm and protected",
        "Return to this mental safe space whenever you need comfort"
      ],
      infoText: "Safe space visualization provides a mental refuge during emotional distress. It activates the brain's visual cortex and can help reduce activity in the amygdala, which is often overactive in people with PTSD.",
      category: "Mindfulness & Visualization"
    },
    {
      id: 5,
      title: "The Container Exercise",
      description: "A visualization technique to temporarily store overwhelming thoughts or emotions until you're ready to address them.",
      steps: [
        "Imagine a container that feels secure and strong",
        "Visualize placing distressing memories or emotions inside it",
        "Secure the container (lock it, bury it, etc.) until you're ready to process these feelings",
        "Remind yourself you can open it when you have appropriate support",
        "Practice this whenever intrusive thoughts become overwhelming"
      ],
      infoText: "This technique, often used in EMDR therapy, helps create psychological distance from overwhelming emotions without suppressing them. It acknowledges difficult feelings while providing temporary relief.",
      category: "Mindfulness & Visualization"
    },
    {
      id: 6,
      title: "Sensory Grounding Kit",
      description: "A personalized collection of items that engage your senses to help manage flashbacks and dissociation.",
      steps: [
        "Gather items that stimulate your five senses in soothing ways",
        "Touch: Stress ball, smooth stone, or textured fabric",
        "Smell: Essential oil, scented lotion, or herb sachet",
        "Hear: Calming music playlist or nature sounds on phone",
        "Taste: Strong mint, sour candy, or herbal tea",
        "See: Photos of safe places/people or calming images"
      ],
      infoText: "Sensory grounding kits provide immediate physical anchors to the present moment. Strong sensory input can help override flashbacks by activating different neural pathways and shifting focus to the here and now.",
      category: "Physical Techniques"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Filter skills by category
  const getSkillsByCategory = (category: string) => {
    return copingSkills.filter(skill => skill.category === category);
  };
  
  // Available categories - using Set to ensure uniqueness
  const categories = Array.from(new Set(copingSkills.map(skill => skill.category)));
  
  // Sort categories to ensure consistent order with most urgent categories first
  categories.sort((a, b) => {
    // Prioritize immediate relief techniques first
    if (a === "Immediate Relief") return -1;
    if (b === "Immediate Relief") return 1;
    return a.localeCompare(b);
  });

  return (
    <section id="coping" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Coping Skills Toolkit
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Evidence-based techniques to help manage PTSD symptoms and support your healing journey.
          </motion.p>
        </motion.div>

        {categories.map(category => (
          <motion.div
            key={category}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="mb-12"
          >
            <motion.h3 variants={itemVariants} className="text-xl font-semibold text-gray-800 mb-6 border-l-4 border-blue-500 pl-4">
              {category} Strategies
            </motion.h3>

            <div className="space-y-4">
              {getSkillsByCategory(category).map((skill) => (
                <motion.div
                  key={skill.id}
                  variants={itemVariants}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    className={`w-full px-6 py-4 flex justify-between items-center text-left transition-colors ${
                      openItems.includes(skill.id)
                        ? 'bg-blue-50 text-blue-700'
                        : 'bg-white text-gray-800 hover:bg-gray-50'
                    }`}
                    onClick={() => toggleItem(skill.id)}
                    aria-expanded={openItems.includes(skill.id)}
                    aria-controls={`content-${skill.id}`}
                  >
                    <span className="font-medium text-lg">{skill.title}</span>
                    <div className="flex items-center">
                      <div className="relative mr-3">
                        <button
                          className="text-gray-500 hover:text-blue-600 focus:outline-none"
                          onMouseEnter={() => toggleTooltip(skill.id)}
                          onMouseLeave={() => toggleTooltip(null)}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleTooltip(activeTooltip === skill.id ? null : skill.id);
                          }}
                          aria-label="More information"
                        >
                          <FaInfoCircle className="w-5 h-5" />
                        </button>

                        {/* Tooltip */}
                        {activeTooltip === skill.id && (
                          <div className="absolute right-0 bottom-full mb-2 w-64 p-4 bg-gray-800 text-white text-sm rounded-lg shadow-lg z-10">
                            {skill.infoText}
                            <div className="absolute bottom-0 right-0 transform translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>
                          </div>
                        )}
                      </div>
                      {openItems.includes(skill.id) ? (
                        <FaMinus className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <FaPlus className="w-5 h-5 flex-shrink-0" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {openItems.includes(skill.id) && (
                      <motion.div
                        id={`content-${skill.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-4">
                          <p className="text-gray-700 mb-4">{skill.description}</p>
                          <div className="bg-gray-50 p-4 rounded-md">
                            <h4 className="font-medium text-gray-800 mb-2">How to practice:</h4>
                            <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-2">
                              {skill.steps.map((step, index) => (
                                <li key={index}>{step}</li>
                              ))}
                            </ol>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-blue-50 rounded-lg p-6 border border-blue-100 text-center"
        >
          <p className="text-gray-700 mb-4">
            Remember that different coping strategies work for different people. It's okay 
            to try several techniques until you find what works best for you.
          </p>
          <p className="text-gray-700">
            For personalized guidance, consider discussing these techniques with a mental health professional.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CopingSkillsToolkit;
