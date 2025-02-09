'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Share2, Heart } from 'lucide-react';
import { countryData } from '@/lib/data';
import { Toast } from '@/components/ui/toast';
import { AnimatedTitle } from '@/components/ui/AnimatedTitle';

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);

  const filteredCountries = Object.keys(countryData).filter(country =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleShare = async () => {
    if (!selectedCountry) return;
    
    // Get a random trigger from the country's list
    const randomTrigger = countryData[selectedCountry][Math.floor(Math.random() * countryData[selectedCountry].length)];
    
    const textToShare = `🌍 Want to know how to trigger men from ${selectedCountry}? \n\n"${randomTrigger}" 😈\n\nFind more at culturaltriggers.com #CulturalTriggers`;
    
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(textToShare)}`;
    window.open(twitterUrl, '_blank');
  };

  const handleRandomCountry = () => {
    const countries = Object.keys(countryData);
    const randomCountry = countries[Math.floor(Math.random() * countries.length)];
    setSelectedCountry(randomCountry);
    setSearchTerm(randomCountry);
    setIsDropdownOpen(false);
  };

  return (
    <main className="min-h-screen p-4 sm:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <AnimatedTitle />
        
        <div className="relative" ref={searchRef}>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl cute-border cute-shadow p-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#ff6b9d]" />
              <input
                type="text"
                placeholder="Search countries..."
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border-2 border-[#ff6b9d]/50 
                         text-white placeholder-[#ffd6e6] focus:outline-none focus:border-[#ff6b9d]
                         focus:ring-2 focus:ring-[#ff6b9d]/30 transition-all duration-300"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setIsDropdownOpen(true);
                }}
                onFocus={() => setIsDropdownOpen(true)}
              />
            </div>
          </div>

          <AnimatePresence>
            {isDropdownOpen && filteredCountries.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                style={{ position: 'absolute', left: 0, right: 0, top: '100%' }}
                className="mt-2 max-h-[300px] overflow-y-auto bg-white/10 backdrop-blur-sm 
                         rounded-xl cute-border soft-glow z-[9999]"
              >
                {filteredCountries.map(country => (
                  <button
                    key={country}
                    className="w-full px-4 py-3 text-left text-white hover:bg-[#ff6b9d]/20 
                             transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                    onClick={() => {
                      setSelectedCountry(country);
                      setSearchTerm(country);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {country}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          {selectedCountry && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl cute-border cute-shadow p-6 space-y-4"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white animate-gentle-pulse">
                  {selectedCountry}
                </h2>
                <div className="flex gap-3">
                  <button
                    onClick={handleRandomCountry}
                    className="flex items-center gap-2 px-4 py-2 bg-[#ff6b9d] text-white rounded-xl 
                             hover:bg-[#ff6b9d]/80 transition-colors cute-shadow"
                  >
                    <span>🎲</span>
                    Try Another Country
                  </button>
                  <button
                    onClick={handleShare}
                    className="flex items-center gap-2 px-4 py-2 bg-[#ff6b9d] text-white rounded-xl 
                             hover:bg-[#ff6b9d]/80 transition-colors cute-shadow"
                  >
                    <Share2 className="h-5 w-5" />
                    Share
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {countryData[selectedCountry].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-white/5 rounded-xl border-2 border-[#ff6b9d]/20 hover:border-[#ff6b9d]/40 
                             transition-colors duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <Heart className="h-5 w-5 text-[#ff6b9d] flex-shrink-0 mt-1 animate-gentle-pulse" />
                      <p className="text-white">{point}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Toast show={showToast} message={toastMessage} />
    </main>
  );
}
