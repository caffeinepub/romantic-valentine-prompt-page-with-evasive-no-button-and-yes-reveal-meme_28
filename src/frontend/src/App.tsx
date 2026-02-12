import { useState, useRef, useCallback } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function App() {
  const [answered, setAnswered] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const moveNoButton = useCallback(() => {
    if (!containerRef.current || !noButtonRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const button = noButtonRef.current.getBoundingClientRect();

    // Calculate safe boundaries (with padding to avoid edges)
    const padding = 20;
    const maxX = container.width - button.width - padding * 2;
    const maxY = container.height - button.height - padding * 2;

    // Generate random position
    const newX = Math.random() * maxX + padding;
    const newY = Math.random() * maxY + padding;

    setNoButtonPosition({ x: newX, y: newY });
  }, []);

  const handleYesClick = () => {
    setAnswered(true);
  };

  const handleNoInteraction = (e: React.PointerEvent | React.TouchEvent) => {
    e.preventDefault();
    moveNoButton();
  };

  if (answered) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-white p-6">
        <div className="max-w-2xl w-full text-center space-y-8 animate-in fade-in duration-700">
          <div className="space-y-4">
            <div className="flex justify-center gap-2">
              <Heart className="w-12 h-12 text-rose-500 fill-rose-500 animate-pulse" />
              <Heart className="w-12 h-12 text-pink-500 fill-pink-500 animate-pulse delay-100" />
              <Heart className="w-12 h-12 text-rose-500 fill-rose-500 animate-pulse delay-200" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-rose-600 tracking-tight">
              Good choice
            </h1>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-rose-200 bg-white">
            <img
              src="/assets/generated/valentine-good-choice-meme.dim_1024x1024.png"
              alt="Good choice meme"
              className="w-full h-auto"
            />
          </div>

          <div className="flex justify-center gap-2 pt-4">
            <Heart className="w-6 h-6 text-rose-400 fill-rose-400" />
            <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
            <Heart className="w-6 h-6 text-rose-400 fill-rose-400" />
          </div>
        </div>

        <footer className="mt-12 text-center text-sm text-rose-400">
          <p>
            Built with <Heart className="inline w-4 h-4 fill-rose-500 text-rose-500" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== 'undefined' ? window.location.hostname : 'valentine-app'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-rose-600 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
          <p className="mt-1">© {new Date().getFullYear()}</p>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-white p-6 overflow-hidden">
      <div className="max-w-4xl w-full text-center space-y-12 relative z-10">
        <div className="space-y-6 animate-in fade-in slide-in-from-top duration-700">
          <div className="flex justify-center gap-3">
            <Heart className="w-16 h-16 text-rose-500 fill-rose-500 animate-pulse" />
            <Heart className="w-20 h-20 text-pink-500 fill-pink-500 animate-pulse delay-100" />
            <Heart className="w-16 h-16 text-rose-500 fill-rose-500 animate-pulse delay-200" />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-rose-600 tracking-tight leading-tight">
            Will you be my Valentine?
          </h1>
          
          <p className="text-xl md:text-2xl text-rose-400 font-medium">
            Choose wisely... 💕
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative min-h-[300px] md:min-h-[400px] flex items-center justify-center"
        >
          {/* Yes Button - Fixed position */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <Button
              onClick={handleYesClick}
              size="lg"
              className="text-2xl md:text-3xl px-12 md:px-16 py-8 md:py-10 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold shadow-2xl hover:shadow-rose-500/50 transition-all duration-300 hover:scale-110 border-4 border-white"
            >
              Yes! 💖
            </Button>
          </div>

          {/* No Button - Evasive position */}
          <button
            ref={noButtonRef}
            onPointerEnter={handleNoInteraction}
            onTouchStart={handleNoInteraction}
            className="absolute text-xl md:text-2xl px-8 md:px-12 py-6 md:py-8 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 text-gray-700 font-bold shadow-lg transition-all duration-200 border-4 border-white cursor-pointer"
            style={{
              left: noButtonPosition.x || '50%',
              top: noButtonPosition.y || 'calc(50% + 140px)',
              transform: noButtonPosition.x ? 'none' : 'translateX(-50%)',
              transition: noButtonPosition.x ? 'none' : 'all 0.2s'
            }}
          >
            No
          </button>
        </div>

        <div className="text-rose-300 text-sm md:text-base italic animate-in fade-in delay-500">
          Hint: Try hovering over "No" 😉
        </div>
      </div>

      {/* Floating hearts decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <Heart className="absolute top-[10%] left-[10%] w-8 h-8 text-rose-200 fill-rose-200 opacity-40 animate-pulse" />
        <Heart className="absolute top-[20%] right-[15%] w-6 h-6 text-pink-200 fill-pink-200 opacity-30 animate-pulse delay-100" />
        <Heart className="absolute bottom-[15%] left-[20%] w-10 h-10 text-rose-200 fill-rose-200 opacity-20 animate-pulse delay-200" />
        <Heart className="absolute bottom-[25%] right-[10%] w-7 h-7 text-pink-200 fill-pink-200 opacity-35 animate-pulse delay-300" />
        <Heart className="absolute top-[40%] left-[5%] w-5 h-5 text-rose-200 fill-rose-200 opacity-25 animate-pulse delay-150" />
        <Heart className="absolute top-[60%] right-[8%] w-9 h-9 text-pink-200 fill-pink-200 opacity-30 animate-pulse delay-250" />
      </div>

      <footer className="fixed bottom-4 left-0 right-0 text-center text-xs text-rose-300 z-50">
        <p>
          Built with <Heart className="inline w-3 h-3 fill-rose-400 text-rose-400" /> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== 'undefined' ? window.location.hostname : 'valentine-app'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-rose-500 transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
