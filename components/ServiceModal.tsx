'use client';
import { useEffect, useState } from 'react';
import { X, Clock, Star, CheckCircle, Heart, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { ReviewCarousel } from './ReviewCarousel';

interface Service {
  id: string;
  name: string;
  category: string;
  price_mxn: number;
  duration_min: number;
  description: string;
  image?: string;
  reviews?: Array<{
    id: number;
    name: string;
    rating: number;
    comment: string;
    date: string;
  }>;
}

interface ServiceModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!service || !isOpen) return null;

  const deposit = Math.round(service.price_mxn * 0.3);
  const balance = service.price_mxn - deposit;

  const getServiceBenefits = (category: string) => {
    switch (category) {
      case 'Extensiones de Pestañas':
        return [
          'Look natural y elegante',
          'Duración de 3-4 semanas',
          'Materiales premium',
          'Garantía 48 horas'
        ];
      case 'Lifting de Pestañas':
        return [
          'Realza pestañas naturales',
          'Duración de 6-8 semanas',
          'Sin extensiones necesarias',
          'Efecto curvado perfecto'
        ];
      case 'Cejas':
        return [
          'Diseño personalizado',
          'Efecto lifting duradero',
          'Cejas perfectamente definidas',
          'Look natural y elegante'
        ];
      case 'Rellenos':
        return [
          'Mantén tus extensiones perfectas',
          'Ahorra tiempo y dinero',
          'Resultado como nuevo',
          'Cuidado profesional'
        ];
      default:
        return [
          'Servicio profesional',
          'Materiales de calidad',
          'Resultado garantizado',
          'Atención personalizada'
        ];
    }
  };

  const getServiceIcon = (category: string) => {
    switch (category) {
      case 'Extensiones de Pestañas':
        return <Sparkles className="w-6 h-6 text-gold" />;
      case 'Lifting de Pestañas':
        return <Heart className="w-6 h-6 text-rose" />;
      case 'Cejas':
        return <Star className="w-6 h-6 text-sage" />;
      default:
        return <CheckCircle className="w-6 h-6 text-gold" />;
    }
  };

  return (
    <div className={`fixed inset-0 z-50 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className={`relative flex items-center justify-center min-h-screen p-2 md:p-4 transition-all duration-300 ${isVisible ? 'scale-100' : 'scale-95'}`}>
        <div className="bg-gradient-to-br from-warmWhite via-white to-softPink rounded-2xl md:rounded-3xl shadow-2xl max-w-2xl w-full max-h-[95vh] md:max-h-[90vh] overflow-hidden border border-rose/20">
          {/* Header */}
          <div className="relative p-4 md:p-8 pb-4 md:pb-6">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/80 hover:bg-white transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl group"
            >
              <X className="w-4 h-4 md:w-5 md:h-5 text-gray-600 group-hover:text-rose transition-colors" />
            </button>
            
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-gold/20 to-rose/20 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                {getServiceIcon(service.category)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs md:text-sm uppercase tracking-widest text-gold font-medium mb-1 md:mb-2">
                  {service.category}
                </div>
                <h2 className="text-xl md:text-3xl font-serif text-charcoal mb-1 md:mb-2">
                  {service.name}
                </h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-4 md:px-8 pb-4 md:pb-8 space-y-4 md:space-y-6 overflow-y-auto max-h-[calc(95vh-200px)] md:max-h-[calc(90vh-200px)]">
            {/* Duration & Price */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="bg-gradient-to-r from-cream to-taupe/30 rounded-xl md:rounded-2xl p-3 md:p-4">
                <div className="flex items-center gap-2 mb-1 md:mb-2">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                  <span className="font-semibold text-charcoal text-sm md:text-base">Duración</span>
                </div>
                <p className="text-lg md:text-2xl font-bold text-gold">~{service.duration_min} min</p>
              </div>
              
              <div className="bg-gradient-to-r from-rose/10 to-gold/10 rounded-xl md:rounded-2xl p-3 md:p-4">
                <div className="flex items-center gap-2 mb-1 md:mb-2">
                  <Star className="w-4 h-4 md:w-5 md:h-5 text-rose" />
                  <span className="font-semibold text-charcoal text-sm md:text-base">Precio Total</span>
                </div>
                <p className="text-lg md:text-2xl font-bold text-rose">${service.price_mxn} MXN</p>
              </div>
            </div>

            {/* Payment Breakdown */}
            <div className="bg-gradient-to-r from-sage/10 to-sageLight/20 rounded-xl md:rounded-2xl p-4 md:p-6">
              <h3 className="text-base md:text-lg font-serif text-charcoal mb-3 md:mb-4">Desglose de Pago</h3>
              <div className="space-y-2 md:space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm md:text-base">Depósito (30%)</span>
                  <span className="font-semibold text-gold text-sm md:text-base">${deposit} MXN</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm md:text-base">Saldo restante</span>
                  <span className="font-semibold text-charcoal text-sm md:text-base">${balance} MXN</span>
                </div>
                <div className="border-t border-sage/30 pt-2 md:pt-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-charcoal text-sm md:text-base">Total</span>
                    <span className="text-lg md:text-xl font-bold text-rose">${service.price_mxn} MXN</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-base md:text-lg font-serif text-charcoal mb-3 md:mb-4">¿Qué incluye?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                {getServiceBenefits(service.category).map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-white/60 rounded-lg md:rounded-xl">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-sage flex-shrink-0" />
                    <span className="text-xs md:text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            {service.reviews && service.reviews.length > 0 && (
              <div>
                <ReviewCarousel reviews={service.reviews} title="Reseñas de Clientes" />
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
              <Link
                href={`/book?service=${service.id}`}
                className="flex-1 btn btn-primary text-center py-3 md:py-4 text-base md:text-lg font-semibold"
                onClick={onClose}
              >
                Reservar Ahora
              </Link>
              <button
                onClick={onClose}
                className="px-6 md:px-8 py-3 md:py-4 border-2 border-gold text-gold rounded-xl md:rounded-2xl hover:bg-gold hover:text-white transition-all duration-300 font-semibold text-sm md:text-base"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
