import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useEvasiveButton } from './useEvasiveButton';

interface Screen1Props {
  onYesClick: () => void;
}

export default function Screen1({ onYesClick }: Screen1Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  
  const { position, handlePointerEnter, handleTouchStart } = useEvasiveButton(
    containerRef,
    noButtonRef
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative z-10">
      {/* Calendar icon in top corner */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 animate-in fade-in slide-in-from-top duration-700">
        <img 
          src="/assets/generated/calendar-14-feb-kawaii.dim_256x256.png" 
          alt="14 FEB"
          className="w-16 h-16 md:w-20 md:h-20 drop-shadow-lg"
        />
      </div>

      <div className="max-w-4xl w-full text-center space-y-12">
        {/* Heading with stickers */}
        <div className="space-y-6 animate-in fade-in slide-in-from-top duration-700 relative">
          {/* Bunny sticker - left side */}
          <img 
            src="/assets/generated/bunny-sticker.dim_512x512.png" 
            alt="Bunny"
            className="absolute -left-4 -top-8 md:-left-12 md:-top-12 w-20 h-20 md:w-32 md:h-32 animate-bounce-slow drop-shadow-lg"
            style={{ animationDuration: '3s' }}
          />
          
          {/* Heart sticker - right side */}
          <img 
            src="/assets/generated/heart-sticker.dim_512x512.png" 
            alt="Heart"
            className="absolute -right-4 -top-8 md:-right-12 md:-top-12 w-20 h-20 md:w-32 md:h-32 animate-bounce-slow drop-shadow-lg"
            style={{ animationDuration: '3s', animationDelay: '0.5s' }}
          />
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-rose-600 tracking-tight leading-tight px-4">
            Hey there,
            <br />
            Will you be my Valentine?
          </h1>
        </div>

        {/* Buttons container */}
        <div
          ref={containerRef}
          className="relative min-h-[300px] md:min-h-[400px] flex items-center justify-center"
        >
          {/* YES Button - Fixed position, larger and more inviting */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 animate-in zoom-in duration-500 delay-300">
            <Button
              onClick={onYesClick}
              size="lg"
              className="text-2xl md:text-4xl px-16 md:px-24 py-10 md:py-14 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold shadow-2xl hover:shadow-rose-500/50 transition-all duration-300 hover:scale-110 border-4 border-white"
            >
              YES OF COURSE 💖
            </Button>
          </div>

          {/* NO Button - Evasive position */}
          <button
            ref={noButtonRef}
            onPointerEnter={handlePointerEnter}
            onTouchStart={handleTouchStart}
            className="absolute text-lg md:text-2xl px-10 md:px-16 py-7 md:py-10 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 text-gray-700 font-bold shadow-lg border-4 border-white cursor-pointer animate-in zoom-in duration-500 delay-500"
            style={{
              left: position.x || '50%',
              top: position.y || 'calc(50% + 160px)',
              transform: position.x ? 'none' : 'translateX(-50%)',
              transition: position.x ? 'none' : 'all 0.2s'
            }}
          >
            NO THANK YOU
          </button>
        </div>
      </div>
    </div>
  );
}
