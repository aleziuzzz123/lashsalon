'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Clock, Star, Sparkles } from 'lucide-react';

export function SalonGallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const salonImages = [
    {
      src: '/images/products/Portada3.jpg',
      alt: 'Salón THE LASH & CO - Estación de trabajo profesional',
      title: 'Estaciones Profesionales',
      description: 'Nuestras cómodas estaciones equipadas con la mejor tecnología para tus extensiones de pestañas'
    },
    {
      src: '/images/products/portada_thelash.jpg',
      alt: 'Salón THE LASH & CO - Área de recepción elegante',
      title: 'Área de Recepción',
      description: 'Un espacio acogedor donde te recibimos con la calidez que mereces'
    },
    {
      src: '/images/products/IMG_6588-HDR-Editar.jpg',
      alt: 'Salón THE LASH & CO - Ambiente relajante y moderno',
      title: 'Ambiente Relajante',
      description: 'Disfruta de un ambiente tranquilo y elegante diseñado para tu comodidad'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % salonImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + salonImages.length) % salonImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-cream/30 to-taupe/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-theme"></div>
            <Sparkles className="w-6 h-6 text-theme" />
            <div className="w-12 h-0.5 bg-theme"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
            Nuestro Espacio en Cancún
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Un oasis de belleza y tranquilidad en el corazón de Cancún, diseñado especialmente para brindarte la mejor experiencia en extensiones de pestañas.
          </p>
        </div>

        {/* Main Gallery */}
        <div className="relative">
          {/* Image Carousel */}
          <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative w-full h-full">
              <img
                src={salonImages[currentImageIndex].src}
                alt={salonImages[currentImageIndex].alt}
                className="w-full h-full object-cover transition-all duration-500"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="max-w-2xl">
                  <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">
                    {salonImages[currentImageIndex].title}
                  </h3>
                  <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
                    {salonImages[currentImageIndex].description}
                  </p>
                  
                  {/* Location Info */}
                  <div className="flex items-center gap-6 text-white/90">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      <span className="font-medium">Cancún, Q.R.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span className="font-medium">Lun-Vie 9am-8pm</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Image Dots */}
          <div className="flex justify-center mt-8 gap-3">
            {salonImages.map((_, index) => (
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

        {/* Features Grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-theme/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-8 h-8 text-theme" />
            </div>
            <h3 className="text-xl font-serif text-charcoal mb-3">Ambiente Elegante</h3>
            <p className="text-gray-600 leading-relaxed">
              Un espacio diseñado con amor para brindarte la máxima comodidad y relajación durante tu tratamiento.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-theme/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-8 h-8 text-theme" />
            </div>
            <h3 className="text-xl font-serif text-charcoal mb-3">Ubicación Perfecta</h3>
            <p className="text-gray-600 leading-relaxed">
              Situado en el corazón de Cancún, fácil acceso y estacionamiento disponible para tu comodidad.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-theme/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Star className="w-8 h-8 text-theme" />
            </div>
            <h3 className="text-xl font-serif text-charcoal mb-3">Experiencia Premium</h3>
            <p className="text-gray-600 leading-relaxed">
              Cada detalle está cuidadosamente pensado para ofrecerte una experiencia de belleza excepcional.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-theme/20">
            <h3 className="text-2xl font-serif text-charcoal mb-4">
              ¿Lista para vivir la experiencia THE LASH & CO?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Reserva tu cita y descubre por qué somos la opción preferida de las mujeres en Cancún para sus extensiones de pestañas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book"
                className="btn btn-primary px-8 py-4 text-lg font-medium"
              >
                Reservar Cita
              </a>
              <a
                href="/contact"
                className="btn btn-outline px-8 py-4 text-lg font-medium"
              >
                Ver Ubicación
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
