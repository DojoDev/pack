import React from 'react';
import { Star, MessageCircle } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "João Silva",
      username: "@joao_sk8",
      text: "Mano, meus stories bombaram depois disso! 🔥",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 2,
      name: "Mariana Costa",
      username: "@mari_funk",
      text: "Já vendi até mais com essas figurinhas, surreal! 💰",
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 3,
      name: "Carlos Mendes",
      username: "@carlao_trap",
      text: "Ficou muito chave 🔥, geral me respondeu no insta!",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 4,
      name: "Beatriz Santos",
      username: "@bia_vibes",
      text: "Melhor compra que fiz! Stories sempre no topo! ⚡",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 5,
      name: "Rafael Lima",
      username: "@rafa_lifestyle",
      text: "Figurinhas top demais! Engajamento lá em cima! 📈",
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      rating: 5
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-purple-900 via-black to-pink-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 left-16 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-yellow-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-40 sm:w-56 md:w-64 h-40 sm:h-56 md:h-64 bg-pink-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300 mb-4 leading-tight">
            💬 O QUE A GALERA TÁ FALANDO 🔥
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 font-bold uppercase tracking-wide">
            Depoimentos de quem já está arrasando!
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-yellow-400 to-pink-500 p-1 rounded-2xl shadow-2xl h-full">
                  <div className="bg-black rounded-2xl p-4 lg:p-6 relative overflow-hidden h-full flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
                    
                    <div className="relative z-10 flex-1 flex flex-col">
                      <div className="flex items-center mb-3 lg:mb-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-yellow-400 mr-3"
                        />
                        <div className="min-w-0 flex-1">
                          <h4 className="text-white font-bold text-sm truncate">{testimonial.name}</h4>
                          <p className="text-gray-400 text-xs truncate">{testimonial.username}</p>
                        </div>
                      </div>
                      
                      <div className="flex mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={14} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      <p className="text-white font-semibold text-sm leading-relaxed flex-1">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="mt-3 lg:mt-4 flex justify-center">
                        <MessageCircle size={18} className="text-pink-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex-shrink-0 w-72 sm:w-80">
                <div className="bg-gradient-to-br from-yellow-400 to-pink-500 p-1 rounded-2xl shadow-2xl h-full">
                  <div className="bg-black rounded-2xl p-6 relative overflow-hidden h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center mb-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full border-2 border-yellow-400 mr-3"
                        />
                        <div>
                          <h4 className="text-white font-bold">{testimonial.name}</h4>
                          <p className="text-gray-400 text-sm">{testimonial.username}</p>
                        </div>
                      </div>
                      
                      <div className="flex mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={16} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      <p className="text-white font-semibold leading-relaxed">
                        "{testimonial.text}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;