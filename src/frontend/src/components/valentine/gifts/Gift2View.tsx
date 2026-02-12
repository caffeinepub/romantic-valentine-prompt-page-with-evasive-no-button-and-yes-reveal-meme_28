export default function Gift2View() {
  return (
    <div className="relative">
      {/* Sparkles decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <img 
          src="/assets/generated/sparkles-doodles.dim_512x512.png" 
          alt="Sparkles"
          className="absolute top-0 left-0 w-32 h-32 animate-twinkle"
        />
        <img 
          src="/assets/generated/sparkles-doodles.dim_512x512.png" 
          alt="Sparkles"
          className="absolute top-0 right-0 w-32 h-32 animate-twinkle"
          style={{ animationDelay: '0.5s' }}
        />
        <img 
          src="/assets/generated/sparkles-doodles.dim_512x512.png" 
          alt="Sparkles"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 animate-twinkle"
          style={{ animationDelay: '1s' }}
        />
      </div>

      {/* Floating small hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl animate-float-heart"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            💕
          </div>
        ))}
      </div>

      <div className="relative space-y-8">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-rose-600 text-center animate-in fade-in duration-500">
          A Letter For You 💌
        </h2>

        {/* Love letter card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-rose-200 animate-in zoom-in duration-500 delay-200">
          <div className="space-y-6 text-rose-700">
            <p className="text-lg md:text-xl leading-relaxed">
              My Dearest Valentine,
            </p>
            
            <p className="text-base md:text-lg leading-relaxed">
              From the moment you came into my life, everything changed. You brought color to my gray days, warmth to my cold nights, and joy to my heart.
            </p>
            
            <p className="text-base md:text-lg leading-relaxed">
              Every smile you share, every laugh we have together, every moment by your side—these are the treasures I hold closest to my heart. You make the ordinary feel extraordinary, and the simple moments unforgettable.
            </p>
            
            <p className="text-base md:text-lg leading-relaxed">
              Thank you for being you. Thank you for choosing me. Thank you for making every day feel like Valentine's Day.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-right">
              Forever yours,
              <br />
              <span className="text-2xl">💖</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
