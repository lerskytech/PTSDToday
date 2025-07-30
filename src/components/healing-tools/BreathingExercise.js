import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

const BreathingExercise = () => {
  const [instruction, setInstruction] = useState('Get Ready...');
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    const cycle = [
      { instruction: 'Breathe In...', duration: 4000, animation: 'animate-inhale' },
      { instruction: 'Hold', duration: 7000, animation: 'animate-hold' },
      { instruction: 'Breathe Out...', duration: 8000, animation: 'animate-exhale' },
    ];

    let currentIndex = 0;
    const runCycle = () => {
      const currentStep = cycle[currentIndex];
      setInstruction(currentStep.instruction);
      setAnimationClass(currentStep.animation);

      setTimeout(() => {
        currentIndex = (currentIndex + 1) % cycle.length;
        runCycle();
      }, currentStep.duration);
    };

    const startTimeout = setTimeout(runCycle, 2000);

    return () => clearTimeout(startTimeout);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url('/images/20250729_1949_Calm Breathing Abstraction_simple_compose_01k1c9d4rwf6esd3e88tjdd4ek.png')` }}
      ></div>
      <Link to="/healing-tools" className="absolute top-6 left-6 text-white hover:text-brand-accent transition-colors duration-300 z-10">
        <ArrowLeftIcon className="h-8 w-8" />
      </Link>
      <div className="relative flex flex-col items-center justify-center text-center">
        <div className={`relative w-64 h-64 rounded-full bg-brand-blue-green flex items-center justify-center transition-transform duration-[4000ms] ease-in-out ${animationClass}`}>
          <div className="absolute w-full h-full rounded-full bg-brand-blue-green opacity-20 animate-pulse-slow"></div>
        </div>
        <p className="mt-8 text-4xl font-semibold tracking-wider">{instruction}</p>
        <p className="mt-4 text-lg text-gray-300">Follow the rhythm: 4s in, 7s hold, 8s out.</p>
      </div>
    </div>
  );
};

export default BreathingExercise;
