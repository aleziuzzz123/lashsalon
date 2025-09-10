
'use client';

import Link from "next/link";
import { Sparkles, Shield, Target, Eye, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const heroImages = [
    {
      src: "/images/services/Extensiones Clásicas.png",
      alt: "Extensiones Clásicas",
      title: "Extensiones Clásicas",
      description: "Look natural y elegante",
      price: "$650 MXN"
    },
    {
      src: "/images/services/Extensiones Híbridas.png",
      alt: "Extensiones Híbridas",
      title: "Extensiones Híbridas",
      description: "Perfecto balance natural-drama",
      price: "$700 MXN"
    },
    {
      src: "/images/services/ Extensiones Volumen.png",
      alt: "Extensiones Volumen",
      title: "Extensiones Volumen",
      description: "Máximo impacto y volumen",
      price: "$800 MXN"
    },
    {
      src: "/images/services/Extensiones Mega Volumen.png",
      alt: "Extensiones Mega Volumen",
      title: "Extensiones Mega Volumen",
      description: "Drama y glamour extremo",
      price: "$900 MXN"
    },
    {
      src: "/images/services/Extensiones Wet Look.png",
      alt: "Extensiones Wet Look",
      title: "Extensiones Wet Look",
      description: "Efecto húmedo y brillante",
      price: "$750 MXN"
    },
    {
      src: "/images/services/Extensiones Kim K.png",
      alt: "Extensiones Kim K",
      title: "Extensiones Kim K",
      description: "Estilo icónico y llamativo",
      price: "$850 MXN"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section className="relative overflow-hidden gradient-bg">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-gradient-to-r from-rose/10 via-gold/5 to-sage/10"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-rose/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-gold/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-sage/15 rounded-full blur-3xl"></div>
      </div>
      <div className="container py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 mb-4">
              <Eye className="w-5 h-5 text-gold" />
              <p className="tracking-[0.3em] text-gold uppercase text-xs md:text-sm font-medium">Belleza de mirada</p>
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-serif leading-tight">
              Extensiones & Lifting de pestañas con 
              <span className="text-gold"> acabado de lujo</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-gray-600 leading-relaxed">
              Somos especialistas en crear nuevas miradas. Reserva con 30% de anticipo, 
              trabajamos con materiales premium y ofrecemos garantía de 48 horas.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="btn btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all">
                Reservar ahora
              </Link>
              <Link href="/services" className="btn btn-outline text-lg px-8 py-4 hover:bg-gold hover:text-white transition-all">
                Ver servicios
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Materiales Premium</p>
                  <p className="text-xs text-gray-600">Solo lo mejor</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Garantía 48h</p>
                  <p className="text-xs text-gray-600">Satisfacción total</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                  <Target className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Diseño Personalizado</p>
                  <p className="text-xs text-gray-600">Para tu rostro</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image Carousel */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[555px] h-[410px]">
              {/* Main Image Card */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-2 border-gold/20 bg-white">
                <img
                  src={heroImages[currentImageIndex].src}
                  alt={heroImages[currentImageIndex].alt}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay with service info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span className="text-gold text-sm font-medium">Servicio Premium</span>
                  </div>
                  <h3 className="text-white text-xl font-serif mb-1">
                    {heroImages[currentImageIndex].title}
                  </h3>
                  <p className="text-gray-200 text-sm mb-3">
                    {heroImages[currentImageIndex].description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-gold text-lg font-bold">
                        {heroImages[currentImageIndex].price}
                      </span>
                      <span className="text-gray-300 text-sm">•</span>
                      <span className="text-gray-300 text-sm">Resultado garantizado</span>
                    </div>
                    <Link 
                      href="/book" 
                      className="bg-gold text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gold/90 transition-colors"
                    >
                      Reservar Ahora
                    </Link>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>

                {/* Auto Play Toggle */}
                <button
                  onClick={toggleAutoPlay}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                >
                  {isAutoPlaying ? (
                    <Pause className="w-4 h-4 text-gray-600" />
                  ) : (
                    <Play className="w-4 h-4 text-gray-600" />
                  )}
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2 mt-4">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-gold' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
