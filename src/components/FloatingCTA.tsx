import React, { useState, useEffect } from 'react';
import { ShoppingCart, Zap } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {/* Mobile Floating Button */}
      <div className={`fixed bottom-20 left-4 right-4 z-50 transition-all duration-300 md:hidden ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}>
        <button className="w-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 hover:from-yellow-500 hover:via-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 py-4 px-4 rounded-2xl font-black text-white uppercase tracking-wider text-base sm:text-lg shadow-2xl border-2 border-white/30 relative overflow-hidden group">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          <div className="relative flex items-center justify-center space-x-2">
            <ShoppingCart size={20} className="animate-bounce flex-shrink-0" />
            <span className="animate-pulse truncate">🔥 QUERO POR R$ 19,90 🔥</span>
            <Zap size={20} className="animate-bounce delay-200 flex-shrink-0" />
          </div>
        </button>
      </div>

      {/* Desktop Floating Button */}
      <div className={`fixed bottom-8 right-8 z-50 transition-all duration-300 hidden md:block ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}>
        <button className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 hover:from-yellow-500 hover:via-pink-600 hover:to-purple-700 transform hover:scale-110 transition-all duration-300 p-6 rounded-full font-black text-white shadow-2xl border-4 border-white/30 relative overflow-hidden group">
          {/* Pulsing Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-ping"></div>
          <div className="absolute inset-2 rounded-full border-2 border-white/30 animate-ping delay-200"></div>
          
          <div className="relative flex items-center space-x-2">
            <ShoppingCart size={28} className="animate-bounce" />
            <span className="text-xl">🔥</span>
          </div>
        </button>
      </div>

      {/* Bottom Fixed CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-black via-purple-900 to-black border-t-4 border-yellow-400 p-4 z-40 md:hidden">
        <div className="flex items-center justify-between max-w-sm mx-auto">
          <div className="flex-shrink-0">
            <p className="text-yellow-300 font-black text-sm sm:text-base">OFERTA LIMITADA</p>
            <p className="text-white font-black text-xl sm:text-2xl">R$ 19,90</p>
          </div>
          <button className="bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 px-6 sm:px-8 py-3 rounded-xl font-black text-black uppercase tracking-wide shadow-lg transform hover:scale-105 transition-all duration-300 text-sm sm:text-base">
            COMPRAR 🔥
          </button>
        </div>
      </div>
    </>
  );
};

export default FloatingCTA;