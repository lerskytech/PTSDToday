import React from 'react';
import SoraImage from './SoraImage';

const Hero = () => {
  return (
    <div className="relative w-full h-[60vh] text-white">
      <SoraImage 
        src="/images/20250729_1924_Serene Sunrise Lake_simple_compose_01k1c7z1acfjmtxw7xwy79dczq.png" 
        alt="A serene landscape representing peace and hope."
        aspect="3:2"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 from-transparent to-black/80 bg-gradient-to-t"></div>
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">You are not alone.</h1>
        <p className="mt-4 text-lg md:text-2xl max-w-3xl">Evidence-based support for PTSD, trauma, and emotional health.</p>
      </div>
    </div>
  );
};

export default Hero;
