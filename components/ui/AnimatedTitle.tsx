'use client';

export function AnimatedTitle() {
  return (
    <div className="text-center space-y-2 p-8">
      <div className="relative">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">
          How To Piss Off Men
          <br />
          from Other Countries
          <span className="inline-block ml-2">😈</span>
        </h1>
        <span className="absolute left-1/2 top-1/2 animate-fly-around text-2xl">✈️</span>
      </div>
      <div className="flex items-center justify-center gap-4 mt-6">
        <div className="flex items-center gap-2">
          <span className="inline-block animate-spin-crazy text-3xl">🌍</span>
          <p className="text-2xl sm:text-3xl font-bold text-gradient-subtitle">
            Cultural Triggers - A World Tour
          </p>
        </div>
      </div>
    </div>
  );
}
