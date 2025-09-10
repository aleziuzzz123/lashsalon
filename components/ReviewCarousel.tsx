'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

interface ReviewCarouselProps {
  reviews: Review[];
  title?: string;
}

export function ReviewCarousel({ reviews, title = "Reseñas de Clientes" }: ReviewCarouselProps) {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    if (reviews.length <= 1) return;
    
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentReviewIndex((prevIndex) => 
          prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [reviews.length, isHovered]);

  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentReviewIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  if (!reviews || reviews.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No hay reseñas disponibles aún.</p>
      </div>
    );
  }

  const currentReview = reviews[currentReviewIndex];

  return (
    <div className="bg-gradient-to-br from-gold/5 to-rose/10 rounded-2xl p-6 border border-gold/20">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-charcoal flex items-center gap-2">
          <Star className="w-5 h-5 text-gold fill-current" />
          {title}
        </h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600 bg-white/60 px-3 py-1 rounded-full">
            {currentReviewIndex + 1} de {reviews.length}
          </span>
          {isHovered && (
            <div className="flex items-center space-x-1">
              <button
                onClick={prevReview}
                className="p-2 rounded-full hover:bg-theme/20 transition-colors bg-white/60"
              >
                <ChevronLeft className="w-4 h-4 text-theme" />
              </button>
              <button
                onClick={nextReview}
                className="p-2 rounded-full hover:bg-theme/20 transition-colors bg-white/60"
              >
                <ChevronRight className="w-4 h-4 text-theme" />
              </button>
            </div>
          )}
        </div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="bg-white rounded-xl p-6 shadow-xl border border-gold/30">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="font-bold text-charcoal text-lg">{currentReview.name}</h4>
              <div className="flex items-center space-x-1 mt-2">
                {renderStars(currentReview.rating)}
                <span className="text-sm text-gold font-semibold ml-2">
                  {currentReview.rating}/5
                </span>
              </div>
            </div>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {new Date(currentReview.date).toLocaleDateString('es-MX')}
            </span>
          </div>
          
          <p className="text-gray-700 leading-relaxed text-base italic">
            "{currentReview.comment}"
          </p>
        </div>

        {/* Navigation dots */}
        {reviews.length > 1 && (
          <div className="flex justify-center space-x-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReviewIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentReviewIndex
                    ? 'bg-gold w-8'
                    : 'bg-gray-300 hover:bg-gold/50 w-2'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Auto-scroll indicator */}
      {reviews.length > 1 && (
        <div className="flex items-center justify-center mt-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600 bg-white/60 px-4 py-2 rounded-full">
            <div className={`w-2 h-2 rounded-full ${isHovered ? 'bg-gray-400' : 'bg-gold'}`} />
            <span className="font-medium">{isHovered ? 'Pausado' : 'Auto-scroll'}</span>
          </div>
        </div>
      )}
    </div>
  );
}
