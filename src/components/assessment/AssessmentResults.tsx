import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface AssessmentResultsProps {
  score: number;
  maxScore: number;
  answers: number[];
}

const AssessmentResults = ({ score, maxScore, answers }: AssessmentResultsProps) => {
  // Severity levels based on PCL-5 and similar screening tools
  const [resultsCategory, setResultsCategory] = useState({
    level: '',
    description: '',
    color: '',
    recommendations: ['']
  });

  useEffect(() => {
    // Determine the severity level based on the score
    // Note: These thresholds are for illustrative purposes and based on PCL-5 research
    const percentage = (score / maxScore) * 100;
    
    if (percentage < 25) {
      setResultsCategory({
        level: 'Minimal',
        description: 'Your responses indicate minimal symptoms that may be associated with PTSD.',
        color: 'green',
        recommendations: [
          'Continue to monitor your symptoms',
          'Practice self-care and stress management',
          'Consider regular check-ins with a mental health professional if symptoms change'
        ]
      });
    } else if (percentage < 50) {
      setResultsCategory({
        level: 'Mild',
        description: 'Your responses suggest mild symptoms that could be associated with PTSD.',
        color: 'yellow',
        recommendations: [
          'Consider speaking with a mental health professional for further evaluation',
          'Explore stress reduction techniques',
          'Establish regular self-care practices',
          'Keep a symptom journal to track changes over time'
        ]
      });
    } else if (percentage < 75) {
      setResultsCategory({
        level: 'Moderate',
        description: 'Your responses indicate moderate symptoms consistent with PTSD. This suggests that you may benefit from professional support.',
        color: 'orange',
        recommendations: [
          'Speak with a healthcare provider or mental health professional about your symptoms',
          'Consider therapy options like CBT or EMDR, which are effective for trauma',
          'Establish a support network of trusted individuals',
          'Learn and practice grounding techniques for moments of distress'
        ]
      });
    } else {
      setResultsCategory({
        level: 'Severe',
        description: 'Your responses indicate severe symptoms consistent with PTSD. Professional support is strongly recommended.',
        color: 'red',
        recommendations: [
          'Connect with a mental health professional as soon as possible',
          'If in crisis, please contact a crisis hotline immediately',
          'Consider reaching out to a trusted person for support',
          'Therapy and possibly medication may help manage your symptoms'
        ]
      });
    }
  }, [score, maxScore]);

  // Color mapping for the results display
  const colorClasses = {
    green: 'bg-green-100 text-green-800 border-green-200',
    yellow: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    orange: 'bg-orange-100 text-orange-800 border-orange-200',
    red: 'bg-red-100 text-red-800 border-red-200'
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Assessment Results</h2>
        
        {/* Results Summary */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
          <div className={`rounded-lg p-4 mb-6 border ${colorClasses[resultsCategory.color as keyof typeof colorClasses]}`}>
            <h3 className="text-xl font-semibold mb-2">
              {resultsCategory.level} Level of PTSD Symptoms
            </h3>
            <p>{resultsCategory.description}</p>
          </div>
          
          <div className="mb-8">
            <p className="mb-4">
              Your score: <span className="font-bold">{score}</span> out of a possible {maxScore}
            </p>
            
            <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
              <motion.div 
                className={`h-full ${
                  resultsCategory.color === 'green' ? 'bg-green-500' :
                  resultsCategory.color === 'yellow' ? 'bg-yellow-500' :
                  resultsCategory.color === 'orange' ? 'bg-orange-500' :
                  'bg-red-500'
                }`}
                initial={{ width: 0 }}
                animate={{ width: `${(score / maxScore) * 100}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>
          
          {/* Recommendations */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-3">Recommendations:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {resultsCategory.recommendations.map((rec, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                >
                  {rec}
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Important Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-blue-800">
            <h4 className="font-semibold mb-2">Important Notice</h4>
            <p>
              This assessment is a screening tool only and not a diagnostic instrument.
              A proper diagnosis can only be made by a qualified mental health professional.
            </p>
          </div>

          {/* Next Steps */}
          <div className="mt-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1"
              >
                <Link 
                  href="/resources"
                  className="w-full block text-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all"
                >
                  Find Help Resources
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1"
              >
                <Link 
                  href="/resources#hotlines"
                  className="w-full block text-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all"
                >
                  Crisis Hotlines
                </Link>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button
                onClick={() => window.print()}
                className="w-full flex justify-center items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 6 2 18 2 18 9"></polyline>
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                  <rect x="6" y="14" width="12" height="8"></rect>
                </svg>
                Print Results
              </button>
            </motion.div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="text-center text-gray-500 text-sm">
          <p>
            If you're experiencing thoughts of harming yourself or others, please seek immediate help 
            by calling 988 (Suicide & Crisis Lifeline) or going to your nearest emergency room.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AssessmentResults;
