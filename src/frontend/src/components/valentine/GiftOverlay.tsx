import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GiftOverlayProps {
  children: React.ReactNode;
  onClose: () => void;
}

export default function GiftOverlay({ children, onClose }: GiftOverlayProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl shadow-2xl border-4 border-rose-200 animate-in zoom-in duration-300">
        {/* Close button */}
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 rounded-full bg-white/80 hover:bg-white shadow-lg"
        >
          <X className="w-6 h-6 text-rose-600" />
        </Button>
        
        {/* Gift content */}
        <div className="p-8 md:p-12">
          {children}
        </div>
      </div>
    </div>
  );
}
