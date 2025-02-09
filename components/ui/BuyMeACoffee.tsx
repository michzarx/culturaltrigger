import React from 'react';
import { Coffee } from 'lucide-react';

interface BuyMeACoffeeProps {
  username: string;
  className?: string;
}

export function BuyMeACoffee({ username, className = '' }: BuyMeACoffeeProps) {
  const buyMeACoffeeUrl = `https://www.buymeacoffee.com/${username}`;

  return (
    <div className={`flex flex-col items-end gap-2 ${className}`}>
      <p className="text-sm font-medium text-gray-600 animate-fade-in">
        Enjoying these cute cultural tips? 🌍✨
      </p>
      <a
        href={buyMeACoffeeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFDD00] hover:bg-[#FFDD00]/90 text-black font-semibold rounded-lg transition-all hover:scale-105"
      >
        <Coffee className="w-5 h-5" />
        <span>Buy me a coffee ☕️</span>
      </a>
    </div>
  );
}
