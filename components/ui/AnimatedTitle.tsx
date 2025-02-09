'use client';

import Lottie from 'lottie-react';
import travelAnimation from '../../public/animations/travelmap.json';
import globeAnimation from '../../public/animations/globe.json';

export function AnimatedTitle() {
  return (
    <div className="text-center space-y-2 p-8">
      <h1 className="text-4xl sm:text-5xl font-bold text-gradient animate-float">
        How To Piss Off Men 🐒
        <br />
        from Other Countries
        <span className="inline-block ml-2 animate-bounce">👿</span>
      </h1>
      <div className="flex items-center justify-center gap-4 mt-6">
        <p className="text-2xl sm:text-3xl font-bold text-gradient-subtitle">
          Cultural Triggers - A World Tour
          <span className="inline-block ml-2">✈️</span>
        </p>
        <div className="w-16 h-16 flex gap-2">
          <Lottie
            animationData={travelAnimation}
            loop={true}
            autoplay={true}
          />
          <Lottie
            animationData={globeAnimation}
            loop={true}
            autoplay={true}
          />
        </div>
      </div>
    </div>
  );
}
