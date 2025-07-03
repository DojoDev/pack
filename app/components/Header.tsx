import { Flame, Zap, Star } from 'lucide-react'

export default function Header() {
  return (
    <header className="relative min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-black overflow-hidden">
      {/* Animated Background Elements - Hidden on mobile */}
      <div className="absolute inset-0 hidden md:block">
        <div className="absolute top-20 left-10 text-yellow-300 animate-pulse">
          <Flame size={60} />
        </div>
        <div className="absolute top-40 right-20 text-pink-400 animate-bounce">
          <Zap size={40} />
        </div>
        <div className="absolute bottom-40 left-20 text-purple-400 animate-spin">
          <Star size={50} />
        </div>
        <div className="absolute top-60 right-40 text-yellow-400 animate-pulse delay-1000">
          <Flame size={30} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="mb-8 animate-fade-in max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 mb-4 drop-shadow-2xl leading-tight">
            🔥 PACK DE FIGURINHAS
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-yellow-300 to-purple-300 mb-6 drop-shadow-2xl leading-tight">
            PARA ENGATAR SEUS STORIES!
          </h2>
        </div>

        <div className="bg-gradient-to-r from-yellow-400 to-pink-500 p-1 rounded-2xl mb-8 transform hover:scale-105 transition-transform duration-300 max-w-2xl mx-auto">
          <div className="bg-black p-4 sm:p-6 rounded-xl">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase tracking-wide">
              + de 500 figurinhas exclusivas!
            </p>
          </div>
        </div>

        <div className="relative max-w-lg mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
          <div className="relative bg-gradient-to-r from-red-500 to-pink-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full border-4 border-yellow-400 shadow-2xl">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white uppercase tracking-widest animate-pulse">
              ⚡ SOMENTE HOJE! ⚡
            </p>
          </div>
        </div>

        {/* Floating Elements - Only on larger screens */}
        <div className="absolute top-32 left-32 text-4xl sm:text-6xl animate-bounce delay-500 hidden lg:block">🔥</div>
        <div className="absolute top-48 right-32 text-3xl sm:text-4xl animate-pulse delay-700 hidden lg:block">💬</div>
        <div className="absolute bottom-32 right-24 text-4xl sm:text-5xl animate-bounce delay-300 hidden lg:block">🤑</div>
        <div className="absolute bottom-48 left-16 text-2xl sm:text-3xl animate-spin delay-1000 hidden lg:block">⚡</div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </header>
  )
}