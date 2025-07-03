import React from 'react';

const Gallery = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-purple-900 via-black to-pink-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-20 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-pink-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-20 right-40 w-40 sm:w-56 md:w-64 h-40 sm:h-56 md:h-64 bg-yellow-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Main Banner */}
        <div className="relative mb-8 sm:mb-12">
          {/* Floating Elements - Hidden on mobile to prevent overlap */}
          <div className="absolute -top-6 -left-6 text-4xl sm:text-5xl md:text-6xl animate-bounce hidden lg:block">🔥</div>
          <div className="absolute -top-6 -right-6 text-4xl sm:text-5xl md:text-6xl animate-bounce delay-300 hidden lg:block">💰</div>
          <div className="absolute -bottom-6 -left-6 text-3xl sm:text-4xl md:text-5xl animate-pulse hidden lg:block">⚡</div>
          <div className="absolute -bottom-6 -right-6 text-3xl sm:text-4xl md:text-5xl animate-pulse delay-500 hidden lg:block">💎</div>

          <div className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 p-1 sm:p-2 rounded-2xl sm:rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="bg-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-pulse"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300 mb-4 sm:mb-6 leading-tight">
                  🚨 ÚLTIMA CHANCE! 🚨
                </h2>
                
                <div className="bg-gradient-to-r from-red-500 to-pink-600 p-1 rounded-xl sm:rounded-2xl mb-6 sm:mb-8">
                  <div className="bg-black p-4 sm:p-6 rounded-xl sm:rounded-2xl">
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide mb-2 sm:mb-4 leading-tight">
                      ⏰ OFERTA EXPIRA EM BREVE ⏰
                    </p>
                    <p className="text-lg sm:text-xl text-gray-300 font-bold">
                      Não perca a chance de ter as figurinhas mais virais do Instagram!
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 p-1 rounded-xl">
                    <div className="bg-black p-4 sm:p-6 rounded-xl h-full">
                      <h3 className="text-xl sm:text-2xl font-black text-white uppercase mb-2 sm:mb-3">✅ VOCÊ RECEBE</h3>
                      <ul className="text-left space-y-1 sm:space-y-2">
                        <li className="text-white font-bold text-sm sm:text-base">🔥 +500 figurinhas exclusivas</li>
                        <li className="text-white font-bold text-sm sm:text-base">📱 Entrega imediata</li>
                        <li className="text-white font-bold text-sm sm:text-base">💎 Qualidade premium</li>
                        <li className="text-white font-bold text-sm sm:text-base">🎯 Frases que viralizam</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-1 rounded-xl">
                    <div className="bg-black p-4 sm:p-6 rounded-xl h-full">
                      <h3 className="text-xl sm:text-2xl font-black text-white uppercase mb-2 sm:mb-3">🚀 RESULTADOS</h3>
                      <ul className="text-left space-y-1 sm:space-y-2">
                        <li className="text-white font-bold text-sm sm:text-base">📈 Mais engajamento</li>
                        <li className="text-white font-bold text-sm sm:text-base">👥 Mais seguidores</li>
                        <li className="text-white font-bold text-sm sm:text-base">💬 Mais interações</li>
                        <li className="text-white font-bold text-sm sm:text-base">🔥 Stories que viralizam</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <button className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 hover:from-yellow-500 hover:via-pink-600 hover:to-purple-700 transform hover:scale-110 transition-all duration-300 py-4 sm:py-6 md:py-8 px-8 sm:px-12 md:px-16 rounded-xl sm:rounded-2xl font-black text-white uppercase tracking-wider text-xl sm:text-2xl md:text-3xl shadow-2xl border-2 sm:border-4 border-white/30 relative overflow-hidden group w-full max-w-2xl mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative">🔥 GARANTIR AGORA POR R$ 19,90 🔥</span>
                </button>

                <p className="text-gray-400 text-base sm:text-lg mt-4 sm:mt-6 font-bold">
                  💳 Pagamento seguro • 📱 Entrega imediata • 🔒 Garantia total
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Quote */}
        <div className="bg-gradient-to-r from-yellow-400 to-pink-500 p-1 rounded-xl sm:rounded-2xl max-w-3xl mx-auto">
          <div className="bg-black p-6 sm:p-8 rounded-xl sm:rounded-2xl">
            <p className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-wide leading-tight">
              "Meus stories nunca tiveram tanto engajamento! 🔥"
            </p>
            <p className="text-gray-400 font-bold mt-2 text-sm sm:text-base">- Cliente satisfeito</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;