import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Question data structure
interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    value: number;
  }[];
}

// List of PTSD assessment questions based on PCL-5 and similar validated screening tools
const questions: Question[] = [
  {
    id: 1,
    text: "In the past month, how often have you been bothered by repeated, disturbing memories, thoughts, or images of a stressful experience?",
    options: [
      { text: "Not at all", value: 0 },
      { text: "A little bit", value: 1 },
      { text: "Moderately", value: 2 },
      { text: "Quite a bit", value: 3 },
      { text: "Extremely", value: 4 }
    ]
  },
  {
    id: 2,
    text: "In the past month, how often have you been bothered by repeated, disturbing dreams of a stressful experience?",
    options: [
      { text: "Not at all", value: 0 },
      { text: "A little bit", value: 1 },
      { text: "Moderately", value: 2 },
      { text: "Quite a bit", value: 3 },
      { text: "Extremely", value: 4 }
    ]
  },
  {
    id: 3,
    text: "In the past month, how often have you suddenly felt as if a stressful experience was happening again (as if you were reliving it)?",
    options: [
      { text: "Not at all", value: 0 },
      { text: "A little bit", value: 1 },
      { text: "Moderately", value: 2 },
      { text: "Quite a bit", value: 3 },
      { text: "Extremely", value: 4 }
    ]
  },
  {
    id: 4,
    text: "In the past month, how often have you felt very upset when something reminded you of a stressful experience?",
    options: [
      { text: "Not at all", value: 0 },
      { text: "A little bit", value: 1 },
      { text: "Moderately", value: 2 },
      { text: "Quite a bit", value: 3 },
      { text: "Extremely", value: 4 }
    ]
  },
  {
    id: 5,
    text: "In the past month, how often have you avoided activities or situations because they reminded you of a stressful experience?",
    options: [
      { text: "Not at all", value: 0 },
      { text: "A little bit", value: 1 },
      { text: "Moderately", value: 2 },
      { text: "Quite a bit", value: 3 },
      { text: "Extremely", value: 4 }
    ]
  },
  {
    id: 6,
    text: "In the past month, how often have you had trouble falling or staying asleep?",
    options: [
      { text: "Not at all", value: 0 },
      { text: "A little bit", value: 1 },
      { text: "Moderately", value: 2 },
      { text: "Quite a bit", value: 3 },
      { text: "Extremely", value: 4 }
    ]
  },
  {
    id: 7,
    text: "In the past month, how often have you felt irritable or had angry outbursts?",
    options: [
      { text: "Not at all", value: 0 },
      { text: "A little bit", value: 1 },
      { text: "Moderately", value: 2 },
      { text: "Quite a bit", value: 3 },
      { text: "Extremely", value: 4 }
    ]
  },
  {
    id: 8,
    text: "In the past month, how often have you had difficulty concentrating?",
    options: [
      { text: "Not at all", value: 0 },
      { text: "A little bit", value: 1 },
      { text: "Moderately", value: 2 },
      { text: "Quite a bit", value: 3 },
      { text: "Extremely", value: 4 }
    ]
  },
  {
    id: 9,
    text: "In the past month, how often have you felt distant or cut off from other people?",
    options: [
      { text: "Not at all", value: 0 },
      { text: "A little bit", value: 1 },
      { text: "Moderately", value: 2 },
      { text: "Quite a bit", value: 3 },
      { text: "Extremely", value: 4 }
    ]
  },
  {
    id: 10,
    text: "In the past month, how often have you felt emotionally numb or unable to have loving feelings for those close to you?",
    options: [
      { text: "Not at all", value: 0 },
      { text: "A little bit", value: 1 },
      { text: "Moderately", value: 2 },
      { text: "Quite a bit", value: 3 },
      { text: "Extremely", value: 4 }
    ]
  }
];

interface AssessmentQuizProps {
  onComplete: (finalScore: number, userAnswers: number[]) => void;
}

const AssessmentQuiz = ({ onComplete }: AssessmentQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [isFading, setIsFading] = useState<boolean>(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Focus on the first option of the current question
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [currentQuestion]);

  // Handle option selection
  const handleOptionSelect = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);

    // Move to next question after a short delay for better UX
    if (currentQuestion < questions.length - 1) {
      setIsFading(true);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setIsFading(false);
      }, 400);
    } else {
      // Calculate total score before showing results
      const totalScore = answers.reduce((acc, val) => acc + (val >= 0 ? val : 0), 0);
      onComplete(totalScore, [...answers]);
    }
  };

  // Calculate progress percentage
  const progress = ((currentQuestion) / (questions.length - 1)) * 100;

  // Calculate total score
  const totalScore = answers.reduce((acc, val) => acc + (val >= 0 ? val : 0), 0);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">PTSD Self-Assessment</h2>
        <p className="text-gray-600">
          This assessment can help you understand if you might be experiencing symptoms of PTSD. 
          Please answer honestly for the most accurate results.
        </p>
        <div className="mt-6">
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-blue-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isFading ? 0 : 1, y: isFading ? -20 : 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8"
        >
          <h3 className="text-xl md:text-2xl font-medium text-gray-800 mb-6">
            {questions[currentQuestion].text}
          </h3>
          
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, idx) => (
              <div 
                key={idx} 
                className="flex items-center"
              >
                <input
                  id={`question-${currentQuestion}-option-${idx}`}
                  type="radio"
                  name={`question-${currentQuestion}`}
                  value={option.value}
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500"
                  onChange={() => handleOptionSelect(option.value)}
                  checked={answers[currentQuestion] === option.value}
                  ref={(el) => {
                    if (el) {
                      inputRefs.current[idx] = el;
                    }
                  }}
                  aria-label={option.text}
                  tabIndex={0}
                />
                <label 
                  htmlFor={`question-${currentQuestion}-option-${idx}`}
                  className="ml-3 block text-gray-700 cursor-pointer w-full py-2"
                >
                  {option.text}
                </label>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between">
            <button
              type="button"
              onClick={() => {
                setIsFading(true);
                setTimeout(() => {
                  setCurrentQuestion(Math.max(0, currentQuestion - 1));
                  setIsFading(false);
                }, 400);
              }}
              disabled={currentQuestion === 0}
              className={`px-4 py-2 rounded-md ${
                currentQuestion === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              aria-label="Previous question"
            >
              Previous
            </button>
            
            <button
              type="button"
              onClick={() => {
                if (currentQuestion < questions.length - 1) {
                  setIsFading(true);
                  setTimeout(() => {
                    setCurrentQuestion(currentQuestion + 1);
                    setIsFading(false);
                  }, 400);
                } else {
                  // Calculate total score before showing results
                  const totalScore = answers.reduce((acc, val) => acc + (val >= 0 ? val : 0), 0);
                  onComplete(totalScore, [...answers]);
                }
              }}
              disabled={answers[currentQuestion] === -1}
              className={`px-4 py-2 rounded-md ${
                answers[currentQuestion] === -1
                  ? 'bg-blue-300 cursor-not-allowed'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
              aria-label={currentQuestion < questions.length - 1 ? "Next question" : "See results"}
            >
              {currentQuestion < questions.length - 1 ? "Next" : "See Results"}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className="text-center text-gray-500 text-sm mt-8">
        <p>
          Note: This self-assessment is not a diagnostic tool. If you're concerned about your mental health, 
          please consult with a qualified healthcare professional.
        </p>
      </div>
    </div>
  );
};

export default AssessmentQuiz;
