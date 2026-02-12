import { useEffect, useState } from 'react';

export default function Gift3View() {
  const [showBurst, setShowBurst] = useState(false);

  useEffect(() => {
    // Trigger heart burst animation on mount
    setShowBurst(true);
  }, []);

  return (
    <div className="relative min-h-[500px] flex items-center justify-center">
      {/* Heart burst animation */}
      {showBurst && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => {
            const angle = (i / 20) * 360;
            const distance = 150 + Math.random() * 100;
            return (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 text-4xl animate-heart-burst"
                style={{
                  '--angle': `${angle}deg`,
                  '--distance': `${distance}px`,
                  animationDelay: `${i * 0.05}s`
                } as React.CSSProperties}
              >
                ❤️
              </div>
            );
          })}
        </div>
      )}

      {/* Confetti hearts background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <img 
          src="/assets/generated/confetti-hearts.dim_1024x1024.png" 
          alt="Confetti hearts"
          className="w-full h-full object-cover animate-confetti-fall"
        />
      </div>

      {/* Main message */}
      <div className="relative z-10 text-center space-y-8 animate-in zoom-in duration-700">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-rose-600 animate-in slide-in-from-top duration-500">
            Happy Valentine's Day ❤️
          </h1>
          <p className="text-3xl md:text-5xl font-bold text-pink-600 animate-in slide-in-from-bottom duration-500 delay-200">
            You're my favorite person
          </p>
        </div>

        {/* Decorative hearts */}
        <div className="flex justify-center gap-4 animate-in fade-in duration-500 delay-400">
          <span className="text-6xl animate-bounce" style={{ animationDuration: '1s' }}>💖</span>
          <span className="text-6xl animate-bounce" style={{ animationDuration: '1s', animationDelay: '0.1s' }}>💕</span>
          <span className="text-6xl animate-bounce" style={{ animationDuration: '1s', animationDelay: '0.2s' }}>💗</span>
        </div>
      </div>
    </div>
  );
}
