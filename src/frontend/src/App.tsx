import { useState } from 'react';
import { Heart } from 'lucide-react';
import Screen1 from '@/components/valentine/Screen1';
import Screen2 from '@/components/valentine/Screen2';
import DecorBackground from '@/components/valentine/DecorBackground';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'screen1' | 'screen2'>('screen1');

  const handleYesClick = () => {
    setCurrentScreen('screen2');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <DecorBackground />
      
      {currentScreen === 'screen1' && (
        <Screen1 onYesClick={handleYesClick} />
      )}
      
      {currentScreen === 'screen2' && (
        <Screen2 />
      )}

      <footer className="fixed bottom-4 left-0 right-0 text-center text-xs text-rose-300 z-50 px-4">
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
        <p className="mt-1">© {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
