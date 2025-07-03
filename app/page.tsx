import Header from './components/Header'
import OfferCards from './components/OfferCards'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import FloatingCTA from './components/FloatingCTA'
import Background from './components/Background'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <Background />
      
      <div className="relative z-10">
        <Header />
        <OfferCards />
        <Testimonials />
        <Gallery />
        
        {/* Final CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-black via-purple-900 to-pink-900 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300 mb-6 sm:mb-8 leading-tight">
              🚀 NÃO PERCA ESSA! 🚀
            </h2>
            
            <div className="bg-gradient-to-r from-red-500 to-pink-600 p-1 rounded-2xl sm:rounded-3xl mb-6 sm:mb-8">
              <div className="bg-black p-6 sm:p-8 rounded-2xl sm:rounded-3xl">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white uppercase tracking-wide mb-3 sm:mb-4 leading-tight">
                  ⏰ OFERTA LIMITADA ⏰
                </p>
                <p className="text-base sm:text-lg text-gray-300 font-bold">
                  Mais de 500 figurinhas exclusivas para bombar no Instagram!
                </p>
              </div>
            </div>

            <button className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 hover:from-yellow-500 hover:via-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 py-4 sm:py-6 px-8 sm:px-12 rounded-xl sm:rounded-2xl font-black text-white uppercase tracking-wider text-xl sm:text-2xl shadow-2xl border-2 sm:border-4 border-white/30 relative overflow-hidden group w-full max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative">🔥 GARANTIR AGORA POR R$ 19,90 🔥</span>
            </button>

            <p className="text-gray-400 text-sm sm:text-base mt-4 font-semibold">
              💳 Pagamento 100% seguro • 📱 Entrega imediata • 🔒 Garantia de 7 dias
            </p>
          </div>
        </section>
      </div>

      <FloatingCTA />
    </div>
  )
}