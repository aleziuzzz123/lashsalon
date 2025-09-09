'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Sparkles, Star } from 'lucide-react';

export function ServiceShowcase() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const serviceImages = [
    {
      src: '/images/services/390X390px_1.png',
      alt: 'Extensiones de Pestañas Clásicas',
      title: 'Extensiones Clásicas',
      description: 'Look natural y elegante',
      price: '$650 MXN'
    },
    {
      src: '/images/services/390X390px_2.png',
      alt: 'Extensiones de Pestañas Volumen',
      title: 'Extensiones Volumen',
      description: 'Máximo impacto y drama',
      price: '$750 MXN'
    },
    {
      src: '/images/services/390X390px_3.png',
      alt: 'Extensiones de Pestañas Híbridas',
      title: 'Extensiones Híbridas',
      description: 'Perfecto balance natural-drama',
      price: '$700 MXN'
    },
    {
      src: '/images/services/390X390px_4.png',
      alt: 'Extensiones de Pestañas Mega Volumen',
      title: 'Mega Volumen',
      description: 'Look más dramático',
      price: '$890 MXN'
    },
    {
      src: '/images/services/390X390px_5.png',
      alt: 'Extensiones de Pestañas Wet Look',
      title: 'Wet Look',
      description: 'Efecto mojado espectacular',
      price: '$800 MXN'
    },
    {
      src: '/images/services/390X390px_6.png',
      alt: 'Extensiones de Pestañas Kim K',
      title: 'Kim K Style',
      description: 'Look icónico y glamuroso',
      price: '$850 MXN'
    },
    {
      src: '/images/services/390X390px_7.png',
      alt: 'Brow Lifting + Laminado',
      title: 'Brow Lifting',
      description: 'Cejas perfectas y definidas',
      price: '$450 MXN'
    },
    {
      src: '/images/services/390X390px_8.png',
      alt: 'Lash Lifting',
      title: 'Lash Lifting',
      description: 'Realza tus pestañas naturales',
      price: '$350 MXN'
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % serviceImages.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, serviceImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % serviceImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + serviceImages.length) % serviceImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-warmWhite to-softPink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-theme"></div>
            <Sparkles className="w-6 h-6 text-theme" />
            <div className="w-12 h-0.5 bg-theme"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
            Nuestros Trabajos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre la transformación que podemos lograr en tus pestañas y cejas. 
            Cada trabajo es una obra de arte diseñada para realzar tu belleza natural.
          </p>
        </div>

        {/* Main Showcase */}
        <div className="relative">
          {/* Image Carousel */}
          <div 
            className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl group"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="relative w-full h-full">
              <img
                src={serviceImages[currentImageIndex].src}
                alt={serviceImages[currentImageIndex].alt}
                className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-5 h-5 text-gold fill-current" />
                    <span className="text-gold font-medium">Servicio Premium</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">
                    {serviceImages[currentImageIndex].title}
                  </h3>
                  
                  <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
                    {serviceImages[currentImageIndex].description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <span className="text-2xl md:text-3xl font-bold text-gold">
                        {serviceImages[currentImageIndex].price}
                      </span>
                      <div className="flex items-center gap-2 text-white/80">
                        <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                        <span className="text-sm">Resultado garantizado</span>
                      </div>
                    </div>
                    
                    <button className="btn btn-primary px-6 py-3 text-lg font-medium">
                      Reservar Ahora
                    </button>
                  </div>
                </div>
              </div>

              {/* Auto-play indicator */}
              <div className="absolute top-6 right-6">
                <div className="flex items-center gap-3">
                  <button
                    onClick={toggleAutoPlay}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
                  >
                    {isAutoPlaying ? (
                      <Pause className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    ) : (
                      <Play className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    )}
                  </button>
                  
                  <div className="text-white/80 text-sm">
                    {isAutoPlaying ? 'Auto' : 'Pausa'}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Image Dots */}
          <div className="flex justify-center mt-8 gap-3">
            {serviceImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-theme scale-125' 
                    : 'bg-gray-300 hover:bg-theme/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Service Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-theme/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-8 h-8 text-theme" />
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-2">8+</h3>
            <p className="text-gray-600">Servicios Especializados</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-theme/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Star className="w-8 h-8 text-theme" />
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-2">1000+</h3>
            <p className="text-gray-600">Clientas Satisfechas</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-theme/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <div className="w-8 h-8 bg-theme rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">5</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-2">5.0</h3>
            <p className="text-gray-600">Calificación Promedio</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-theme/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <div className="w-8 h-8 bg-theme rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">3</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-2">3+</h3>
            <p className="text-gray-600">Años de Experiencia</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-theme/20">
            <h3 className="text-2xl font-serif text-charcoal mb-4">
              ¿Lista para tu transformación?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Reserva tu cita y descubre por qué somos la opción preferida para extensiones de pestañas en Cancún.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book"
                className="btn btn-primary px-8 py-4 text-lg font-medium"
              >
                Reservar Cita
              </a>
              <a
                href="/services"
                className="btn btn-outline px-8 py-4 text-lg font-medium"
              >
                Ver Todos los Servicios
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
