import React, { useState } from 'react';
import { assessmentQuestions, answerOptions } from '../data/assessmentQuestions';

const Assessment = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleNext = () => {
    if (currentQuestionIndex < assessmentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    return Object.values(answers).reduce((total, value) => total + value, 0);
  };

  const progress = ((currentQuestionIndex + 1) / assessmentQuestions.length) * 100;

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Assessment Complete</h1>
          <div className="mt-8 p-8 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">Your Score: {score}</h2>
            <p className="mt-4 text-gray-600">This score is an indicator of the severity of symptoms. A higher score suggests a greater likelihood of PTSD, but this is not a diagnosis.</p>
            <p className="mt-2 font-bold text-red-600">Disclaimer: This tool is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.</p>
            <button onClick={() => { setShowResults(false); setCurrentQuestionIndex(0); setAnswers({}); }} className="mt-8 bg-teal-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-teal-600 transition-colors">
              Take Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = assessmentQuestions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900">PTSD Self-Assessment</h1>
        
        {/* Progress Bar */}
        <div className="mt-8">
          <div className="bg-gray-200 rounded-full h-2.5">
            <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-2">Question {currentQuestionIndex + 1} of {assessmentQuestions.length}</p>
        </div>

        <div className="mt-6 p-8 bg-white rounded-xl shadow-lg">
          <p className="text-xl font-semibold text-gray-800">{currentQuestion.text}</p>
          <div className="mt-6 space-y-4">
            {answerOptions.map(option => (
              <label key={option.value} className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                <input 
                  type="radio" 
                  name={`question-${currentQuestion.id}`}
                  value={option.value} 
                  checked={answers[currentQuestion.id] === option.value}
                  onChange={() => handleAnswerSelect(currentQuestion.id, option.value)}
                  className="h-5 w-5 text-teal-600 focus:ring-teal-500 border-gray-300"
                />
                <span className="ml-4 text-lg text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          <button onClick={handleBack} disabled={currentQuestionIndex === 0} className="bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-lg hover:bg-gray-400 transition-colors disabled:opacity-50">
            Back
          </button>
          <button onClick={handleNext} disabled={answers[currentQuestion.id] === undefined} className="bg-teal-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-teal-600 transition-colors disabled:opacity-50">
            {currentQuestionIndex < assessmentQuestions.length - 1 ? 'Next' : 'Finish'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
