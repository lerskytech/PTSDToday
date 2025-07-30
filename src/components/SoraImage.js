import React from 'react';

const aspectRatios = {
  '1:1': 'aspect-square',
  '2:3': 'aspect-[2/3]',
  '3:2': 'aspect-[3/2]',
};

const SoraImage = ({ src, alt, aspect, className = '' }) => {
  const aspectRatioClass = aspectRatios[aspect] || 'aspect-auto';

  return (
    <div className={`w-full overflow-hidden ${aspectRatioClass} ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-center"
        loading="lazy"
      />
    </div>
  );
};

export default SoraImage;
