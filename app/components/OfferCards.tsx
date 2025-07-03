import { MessageCircle, Zap, Crown } from 'lucide-react'

export default function OfferCards() {
  const features = [
    {
      id: 1,
      icon: <MessageCircle size={40} />,
      title: "FRASES QUE VIRALIZAM",
      description: "Mais de 500 figurinhas com frases exclusivas criadas especialmente para bombar nos seus Stories do Instagram!",
      gradient: "from-purple-500 to-pink-500",
      emoji: "🔥"
    },
    {
      id: 2,
      icon: <Zap size={40} />,
      title: "ENGAJAMENTO GARANTIDO",
      description: "Figurinhas testadas e aprovadas que aumentam curtidas, comentários e visualizações dos seus Stories!",
      gradient: "from-yellow-500 to-orange-500",
      emoji: "⚡"
    },
    {
      id: 3,
      icon: <Crown size={40} />,
      title: "EXCLUSIVIDADE TOTAL",
      description: "Pack único e limitado! Você não vai encontrar essas figurinhas em nenhum outro lugar da internet!",
      gradient: "from-pink-500 to-purple-600",
      emoji: "👑"
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-pink-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-40 right-20 w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 bg-yellow-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300 mb-4 leading-tight">
            💬 O QUE VOCÊ VAI RECEBER 🔥
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 font-bold uppercase tracking-wide">
            Descubra tudo que está incluso no pack!
          </p>
        </div>

        {/* Feature Balloons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="relative group transform hover:scale-105 transition-all duration-300"
            >
              {/* Floating Emoji - Positioned to not overlap text */}
              <div className="absolute -top-3 -right-3 text-2xl sm:text-3xl animate-bounce z-20">
                {feature.emoji}
              </div>

              <div className={`relative bg-gradient-to-br ${feature.gradient} p-1 rounded-3xl shadow-2xl h-full`}>
                <div className="bg-black rounded-3xl p-6 sm:p-8 h-full relative overflow-hidden flex flex-col">
                  {/* Card Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
                  
                  <div className="relative z-10 text-center flex-1 flex flex-col">
                    <div className="text-yellow-300 mb-4 sm:mb-6 flex justify-center">
                      {feature.icon}
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase mb-3 sm:mb-4 tracking-wide leading-tight">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-300 font-semibold text-base sm:text-lg leading-relaxed flex-1">
                      {feature.description}
                    </p>

                    {/* Decorative Elements */}
                    <div className="mt-4 sm:mt-6 flex justify-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-200"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-400"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional floating elements - Hidden on mobile */}
              <div className="absolute -bottom-2 -left-2 text-xl sm:text-2xl animate-pulse delay-300 hidden sm:block">💎</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-pink-500 p-1 rounded-2xl inline-block max-w-full">
            <div className="bg-black px-6 sm:px-8 py-3 sm:py-4 rounded-2xl">
              <p className="text-white font-bold text-xl sm:text-2xl uppercase tracking-wide">
                🚀 TUDO ISSO POR APENAS R$ 19,90! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}