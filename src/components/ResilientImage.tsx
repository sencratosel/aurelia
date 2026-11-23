import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Aurelia Grand Estate',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#14181B] via-[#0F1214] to-[#1A1610] border border-[#242B30] text-[#A8A196] p-6 text-center ${className}`}
      >
        <ImageOff className="w-6 h-6 text-[#D4AF37]/70 mb-2" aria-hidden="true" />
        <span className="font-serif text-sm tracking-wide text-[#EDE8E1]">{fallbackTitle}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
