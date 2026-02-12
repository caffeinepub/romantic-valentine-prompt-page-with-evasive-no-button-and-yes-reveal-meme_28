import { useState } from 'react';
import GiftOverlay from './GiftOverlay';
import Gift1View from './gifts/Gift1View';
import Gift2View from './gifts/Gift2View';
import Gift3View from './gifts/Gift3View';

type GiftType = 'gift1' | 'gift2' | 'gift3' | null;

export default function Screen2() {
  const [openGift, setOpenGift] = useState<GiftType>(null);

  const handleGiftClick = (gift: GiftType) => {
    setOpenGift(gift);
  };

  const handleCloseGift = () => {
    setOpenGift(null);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-6 relative z-10 animate-in fade-in duration-700">
        <div className="max-w-6xl w-full">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Heart character on the left */}
            <div className="shrink-0 animate-in slide-in-from-left duration-700">
              <img 
                src="/assets/generated/heart-character.dim_512x512.png" 
                alt="Heart character"
                className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 animate-bounce-slow drop-shadow-2xl"
                style={{ animationDuration: '2.5s' }}
              />
            </div>

            {/* Main content */}
            <div className="flex-1 space-y-8 md:space-y-12 text-center lg:text-left">
              {/* Headline */}
              <div className="animate-in slide-in-from-right duration-700">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rose-600 leading-tight">
                  Yay, you said yes!
                  <br />
                  I made all these for you hehe
                </h1>
              </div>

              {/* Gift cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in slide-in-from-bottom duration-700 delay-300">
                {/* Gift 1 */}
                <button
                  onClick={() => handleGiftClick('gift1')}
                  className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border-4 border-rose-200 animate-pop-in"
                  style={{ animationDelay: '0.4s' }}
                >
                  <div className="space-y-4">
                    <div className="text-6xl">🎁</div>
                    <h3 className="text-2xl font-bold text-rose-600">Gift 1</h3>
                    <p className="text-sm text-rose-400">Click to open!</p>
                  </div>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-rose-100 to-pink-100 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                </button>

                {/* Gift 2 */}
                <button
                  onClick={() => handleGiftClick('gift2')}
                  className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border-4 border-rose-200 animate-pop-in"
                  style={{ animationDelay: '0.6s' }}
                >
                  <div className="space-y-4">
                    <div className="text-6xl">💝</div>
                    <h3 className="text-2xl font-bold text-rose-600">Gift 2</h3>
                    <p className="text-sm text-rose-400">Click to open!</p>
                  </div>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-rose-100 to-pink-100 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                </button>

                {/* Gift 3 */}
                <button
                  onClick={() => handleGiftClick('gift3')}
                  className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border-4 border-rose-200 animate-pop-in"
                  style={{ animationDelay: '0.8s' }}
                >
                  <div className="space-y-4">
                    <div className="text-6xl">🎀</div>
                    <h3 className="text-2xl font-bold text-rose-600">Gift 3</h3>
                    <p className="text-sm text-rose-400">Click to open!</p>
                  </div>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-rose-100 to-pink-100 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gift overlays */}
      {openGift === 'gift1' && (
        <GiftOverlay onClose={handleCloseGift}>
          <Gift1View />
        </GiftOverlay>
      )}
      
      {openGift === 'gift2' && (
        <GiftOverlay onClose={handleCloseGift}>
          <Gift2View />
        </GiftOverlay>
      )}
      
      {openGift === 'gift3' && (
        <GiftOverlay onClose={handleCloseGift}>
          <Gift3View />
        </GiftOverlay>
      )}
    </>
  );
}
